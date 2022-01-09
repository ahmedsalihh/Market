import styled from 'styled-components';

const FooterContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  margin-top: 136px;
  color: #1ea4ce;
`;

const LeftText = styled.span`
  &:after {
    content: '•';
    margin-left: 16px;
    margin-right: 16px;
  }
`;

const Footer = () => {
  return (
    <FooterContainerStyled>
      <LeftText>©2019 Market</LeftText>
      <span>Privacy Policy</span>
    </FooterContainerStyled>
  );
};

export default Footer;
