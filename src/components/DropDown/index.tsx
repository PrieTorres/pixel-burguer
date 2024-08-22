"use client";
import { Dispatch, MouseEventHandler, MutableRefObject, ReactElement, ReactNode, SetStateAction, useEffect, useRef, useState } from 'react';
import { Container } from './styles';
import { IconSpan } from '../IconSpan';
import ClientPortal from '../Portal';

interface Styling {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  height?: number;
  width?: number;
  background?: string;
  padding?: string;
};

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
  offset?: Styling;
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
    top: (offset.top ?? 0) + (offset.height ?? 0),
    left: (offset.left ?? 0),
    width: offset.width,
  } : {};


  return <ClientPortal>
    <div style={{ ...style, position: "absolute", borderRadius:"0px 0px 5px 5px" }} id={toggleId} className={`flex flex-col ${transClass}`}>
      <ul aria-labelledby={dropDownId}>
        {items.map((dropItem, i) => (
          <li style={{ height: offset?.height }} key={`drop-item-${i}_${Math.floor(Math.random() * 99999)}`}>
            <div
              style={{ height: "100%" }}
              onClick={(e) => { dropItem.onClick(e); toggleFunction(); }}
            >
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
  const [sizing, setSizing]: [
    Styling,
    Dispatch<SetStateAction<Styling>>
  ] = useState({});

  const toggle = () => {
    setIsOpen(old => !old);
  };

  useEffect(() => {
    setDomReady(true);
  }, []);

  useEffect(() => {
    function defineDropListSizing() {
      let styles: Styling = {};
      if (typeof container?.current?.getBoundingClientRect == "function") {
        styles = container?.current?.getBoundingClientRect();

        const containerStyles = window.getComputedStyle(container?.current);
        styles.background = containerStyles.background;
        styles.padding = containerStyles.padding;

        if (typeof styles == "object") {
          styles.width = container?.current?.clientWidth;
        }

        setSizing(styles);
      }
    }

    defineDropListSizing();
    window.addEventListener("resize", defineDropListSizing);

    return () => {
      window.removeEventListener("resize", defineDropListSizing);
    };
  }, [domReady]);

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
        offset={sizing}
      />}
    </Container>
  );
};
