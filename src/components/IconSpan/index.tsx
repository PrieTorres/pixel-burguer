import { ReactElement } from 'react';
import * as Styled from './styles';
import { MaterialIcon } from 'material-icons';

export interface IconSpanProps {
  icon: MaterialIcon;
  type?: "outlined" | "round" | "sharp" | "two-tone"
};

export const IconSpan = ({ icon, type }: IconSpanProps): ReactElement => {
  return (
    <Styled.Container className={`material-icons${type ? `-${type}` : ""}`}>
      {icon}
    </Styled.Container>
  )
}