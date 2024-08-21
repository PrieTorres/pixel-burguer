/*"use client";
import { MouseEventHandler, ReactElement, ReactNode, useState } from 'react';
import { Container } from './styles';
import { IconSpan } from '../IconSpan';
import ClientPortal from '../Portal';
import { createPortal } from 'react-dom';

export interface DropItemProps {
  onClick: MouseEventHandler<HTMLDivElement>;
  children: ReactNode;
}

export interface DropDownProps {
  children: ReactNode;
  dropDownId: string;
  toggleId: string;
  items: Array<DropItemProps>;
  height?: number;
}

export const DropDown = ({ children, dropDownId, toggleId, items, height }: DropDownProps): ReactElement => {
  const returnComponent = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => {
    setIsOpen(old => !old);
  };

  const transClass = isOpen ? "flex" : "hidden";

  return (
    
      <Container height={height}>
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
        <div id={toggleId} className={`flex flex-col rounded-md ${transClass}`}>
          <ul aria-labelledby={dropDownId}>
            {items.map((dropItem, i) => (
              <li key={`drop-item-${i}_${Math.floor(Math.random() * 99999)}`}>
                <div onClick={(e) => { dropItem.onClick(e); toggle(); }}>
                  {dropItem.children}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    
  );
  }

  
    return createPortal(returnComponent(),
                                  document.querySelector('#default-portal') as Element
                                )
  
};*/