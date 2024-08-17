import { ReactElement, ReactNode } from 'react';
import * as Styled from './styles';
import { TranslatedSpan } from '../TranslatedSpan';

export const Section = ({ children }: { children: ReactNode | ReactElement | string }) => {
  return (
    <Styled.Container>
      {typeof children == "string" ?
        <TranslatedSpan>{children}</TranslatedSpan>
        : children
      }
    </Styled.Container>
  )
}