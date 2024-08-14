import { ReactElement } from 'react';
import * as Styled from './styles';
import { TranslatedSpan } from '../TranslatedSpan';

export const Section = ({ children }: { children: ReactElement | string }) => {
  return (
    <Styled.Container>
      {typeof children == "string" ?
        <TranslatedSpan>{children}</TranslatedSpan>
        : children
      }
    </Styled.Container>
  )
}