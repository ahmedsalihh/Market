import styled from 'styled-components';

const LayoutStyled = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const Layout = ({ children }) => <LayoutStyled>{children}</LayoutStyled>;

export default Layout;
