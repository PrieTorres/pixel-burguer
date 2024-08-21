"use client";
import { MouseEventHandler, MutableRefObject, ReactElement, ReactNode, useEffect, useRef, useState } from 'react';
import { Container } from './styles';
import { IconSpan } from '../IconSpan';
import ClientPortal from '../Portal';
import { createPortal } from 'react-dom';

export interface DropItemProps {
  onClick: MouseEventHandler<HTMLDivElement>;
  children: ReactNode;
}

export interface DropDownListProps {
  dropDownId: string;
  toggleId: string;
  items: Array<DropItemProps>;
  height?: number;
  isOpen: boolean;
  toggleFunction: CallableFunction;
  offset?: {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
    height?: number;
    width?:number;
  };
}

export interface DropDownProps {
  children: ReactNode;
  dropDownId: string;
  toggleId: string;
  items: Array<DropItemProps>;
  height?: number;
}

const DropDownList = ({ isOpen, offset, dropDownId, toggleId, items, toggleFunction }: DropDownListProps) => {
  const transClass = isOpen ? "flex" : "hidden";
  const style = offset ? {
    ...offset,
    top: (offset.top || 0) + (offset.height || 0),
    left: offset.left
  } : {};


  return <ClientPortal>
    <div style={style} id={toggleId} className={`flex flex-col rounded-md ${transClass}`}>
      <ul aria-labelledby={dropDownId}>
        {items.map((dropItem, i) => (
          <li key={`drop-item-${i}_${Math.floor(Math.random() * 99999)}`}>
            <div onClick={(e) => { dropItem.onClick(e); toggleFunction(); }}>
              {dropItem.children}
            </div>
          </li>
        ))}
      </ul>
    </div>
  </ClientPortal>;
};

export const DropDown = ({ children, dropDownId, toggleId, items, height }: DropDownProps): ReactElement => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [domReady, setDomReady] = useState<boolean>(false);
  const container: MutableRefObject<null | HTMLDivElement> = useRef(null);
  const boundaries: MutableRefObject<{} | DOMRect> = useRef({});

  const toggle = () => {
    setIsOpen(old => !old);
  };

  useEffect(() => {
    setDomReady(true);

  }, []);
  
  useEffect(() => {
    if (typeof container?.current?.getBoundingClientRect == "function") {
      console.log(container?.current?.getBoundingClientRect());
      boundaries.current = container?.current?.getBoundingClientRect();
    }
  }, []);
  //const transClass = isOpen ? "flex" : "hidden";

  return (
    <Container height={height} ref={container}>
      <button
        id={dropDownId}
        data-dropdown-toggle={toggleId}
        data-dropdown-delay="500"
        className="
          text-center 
          inline-flex 
          items-center"
        onClick={toggle}
      >
        {children} <IconSpan icon="arrow_drop_down" />
      </button>
      {domReady && <DropDownList
        toggleFunction={toggle}
        items={items}
        isOpen={isOpen}
        dropDownId={dropDownId}
        toggleId={toggleId}
        offset={boundaries.current}
      />}
    </Container>
  );
};
