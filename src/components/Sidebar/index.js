import styled from 'styled-components';

const SidebarStyled = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 20px;
  min-width: 296px;
  padding-top: 38.36px;
`;

const Sidebar = ({ children }) => <SidebarStyled>{children}</SidebarStyled>;

export default Sidebar;
