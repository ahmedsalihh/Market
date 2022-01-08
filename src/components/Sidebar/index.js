import styled from 'styled-components';

const SidebarStyled = styled.div`
  display: grid;
  grid-gap: 20px;
  width: 296px;
  padding-top: 38.36px;
`;

const Sidebar = ({ children }) => <SidebarStyled>{children}</SidebarStyled>;

export default Sidebar;
