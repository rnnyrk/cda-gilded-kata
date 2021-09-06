import styled from 'styled-components';

export const Container = styled.div`
  max-width: 956px;
  margin: 0 auto;
  padding: 32px;
  overflow-x: scroll;
  box-shadow: ${({ theme }) => theme.ui.shadows.default};
  background-color: ${({ theme }) => theme.colors.white};
`;
