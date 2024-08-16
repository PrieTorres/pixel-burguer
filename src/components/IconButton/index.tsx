import { MouseEventHandler, ReactElement } from 'react';
import * as Styled from './styles';
import { IconSpan, IconSpanProps } from '../IconSpan';

interface IconButtonProps extends IconSpanProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export const IconButton = ({ onClick, icon, type }: IconButtonProps): ReactElement => {
  return (
    <Styled.Container onClick={onClick}>
      <IconSpan icon={icon} type={type} />
    </Styled.Container>
  );
};