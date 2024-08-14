import { MouseEventHandler, ReactElement } from 'react';
import * as Styled from './styles';

interface DotButtonProps { 
  children?: ReactElement | string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  selected: boolean;
};

export const DotButton = ({ children, onClick, selected }: DotButtonProps) => {
  return (
    <Styled.Container onClick={onClick} selected={selected}>
      {children}
    </Styled.Container>
  )
}