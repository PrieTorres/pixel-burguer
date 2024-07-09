import styled, { DefaultTheme, css } from 'styled-components';


export const Container = styled.div`
  ${({ theme }: { theme: DefaultTheme, height?: number }) => css`
      height: 100%;
      width: fit-content;
      display: flex;
      align-items: center;

      > img {
        height: 100%;
        object-fit: contain;
        width: fit-content;
        max-width: 100%;
      }
  `}
`;