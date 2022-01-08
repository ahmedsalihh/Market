import styled from 'styled-components';

const ContentStyled = styled.div`
  width: 608px;
  margin-left: 16px;
  margin-right: 16px;
`;

const Content = ({ children }) => <ContentStyled>{children}</ContentStyled>;

export default Content;
