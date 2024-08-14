import { MouseEventHandler, ReactElement } from 'react';
import * as Styled from './styles';
import { MaterialIcon } from 'material-icons';

interface IconButtonProps {
  icon: MaterialIcon;
  onClick: MouseEventHandler<HTMLButtonElement>;
  type?: "outlined" | "round" | "sharp" | "two-tone"
};

export const IconButton = ({ onClick, icon, type }: IconButtonProps): ReactElement => {
  return (
    <Styled.Container onClick={onClick}>
      <span className={`material-icons${type ? `-${type}` : ""}`}>{icon}</span>
    </Styled.Container>
  )
}