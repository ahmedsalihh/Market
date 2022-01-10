import styled from 'styled-components';

const ContentStyled = styled.div`
  min-width: 608px;
  margin-left: 16px;
  margin-right: 16px;
  padding-top: 38.36px;
`;

const Content = ({ children }) => <ContentStyled>{children}</ContentStyled>;

export default Content;
