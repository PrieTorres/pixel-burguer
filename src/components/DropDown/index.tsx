"use client";
import { MouseEventHandler, ReactElement, ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { Container } from './styles';
import { IconSpan } from '../IconSpan';
import ClientPortal from '../Portal';

interface CustomStyling {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  height?: number;
  clientHeight?: number;
  width?: number;
  background?: string;
  padding?: string;
}

type AllCSSProperties = Partial<Record<keyof CSSStyleDeclaration, string | number>>;

type Styling = CustomStyling & AllCSSProperties;

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
  toggleFunction: () => void;
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
    top: (offset.top ?? 0) + (offset.clientHeight ?? 0),
    left: offset.left ?? 0,
    width: offset.width,
  } : {};

  return (
    <ClientPortal>
      <div
        style={{ ...style, position: "absolute", borderRadius: "0 0 5px 5px" }}
        id={toggleId}
        className={`flex flex-col ${transClass}`}
      >
        <ul aria-labelledby={dropDownId}>
          {items.map((dropItem, i) => (
            <li
              key={`drop-item-${i}`}
              style={{ height: offset?.clientHeight, cursor: 'pointer' }}
            >
              <div
                style={{ height: "100%" }}
                onClick={(e) => {
                  dropItem.onClick(e);
                  toggleFunction();
                }}
              >
                {dropItem.children}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </ClientPortal>
  );
};

export const DropDown = ({ children, dropDownId, toggleId, items, height }: DropDownProps): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  const [sizing, setSizing] = useState<Styling>({});
  const containerRef = useRef<HTMLDivElement>(null);

  const toggle = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  useEffect(() => {
    const defineDropListSizing = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const styles: Styling = {
        top: rect.top,
        left: rect.left,
        clientHeight: rect.height,
        width: containerRef.current.clientWidth,
        background: window.getComputedStyle(containerRef.current).background,
        padding: window.getComputedStyle(containerRef.current).padding,
        outline: window.getComputedStyle(containerRef.current.parentElement ?? {}).border,
        boxShadow: "0px 0px 8px 0px #000000d8 inset"
      };

      setSizing(styles);
    };

    defineDropListSizing();
    window.addEventListener("resize", defineDropListSizing);

    return () => {
      window.removeEventListener("resize", defineDropListSizing);
    };
  }, [isOpen]);

  return (
    <Container height={height} ref={containerRef}>
      <button
        id={dropDownId}
        data-dropdown-toggle={toggleId}
        data-dropdown-delay="500"
        className="text-center inline-flex items-center"
        onClick={toggle}
      >
        {children} <IconSpan icon="arrow_drop_down" />
      </button>
      {isOpen && <DropDownList
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
