"use client";
import { MouseEventHandler, ReactElement, ReactNode, useState } from 'react';
import { Container } from './styles';
import { IconSpan } from '../IconSpan';

export interface DropItemProps {
  onClick: MouseEventHandler<HTMLDivElement>;
  children: ReactNode;
}

export interface DropDownProps {
  children: ReactNode;
  dropDownId: string;
  toggleId: string;
  items: Array<DropItemProps>;
}

export const DropDown = ({ children, dropDownId, toggleId, items }: DropDownProps): ReactElement => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => {
    setIsOpen(old => !old);
  };

  const transClass = isOpen ? "flex" : "hidden";

  return (
    <Container>
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
      <div id={toggleId} className={`absolute flex flex-col py-4 bg-zinc-400 rounded-md ${transClass}`}>
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby={dropDownId}>
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
};