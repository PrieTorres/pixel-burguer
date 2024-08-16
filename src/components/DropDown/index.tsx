import { MouseEventHandler, ReactElement, ReactNode } from 'react';
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

  return (
    <Container>
      <button
        id={dropDownId}
        data-dropdown-toggle={toggleId}
        data-dropdown-delay="500"
        data-dropdown-trigger="hover"
        className="
          focus:ring-4 
          focus:outline-none 
          focus:ring-blue-300 
          rounded-lg 
          px-5 py-2.5 
          text-center 
          inline-flex 
          items-center"
        type="button"
      >
        {children}<IconSpan icon="arrow_drop_down" />
      </button>
      <div id={toggleId} className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby={dropDownId}>
          {items.map((dropItem, i) => (
            <li key={`drop-item-${i}_${Math.floor(Math.random() * 99999)}`}>
              <div onClick={dropItem.onClick}>
                {dropItem.children}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};