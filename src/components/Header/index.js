import Container from '../Container';
import styled from 'styled-components';
// import ShoppingChart from '../ShopppingChart';

const HeaderContainer = styled.div`
  overflow: hidden;
  background-color: #1ea4ce;
`;

const Logo = styled.a`
  text-align: center;
  text-decoration: none;
  font-size: 1.5rem;
  color: #fff;
  margin-left: 45%;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ChartContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #147594;
`;

const Header = () => (
  <HeaderContainer>
    <Container>
      <LogoContainer>
        <Logo href='#'>Market</Logo>
      </LogoContainer>
      {/* <ChartContainer>
        <div style={{ marginLeft: '2rem', marginRight: '1rem' }}>icon</div>
        <div style={{ marginLeft: '1rem', marginRight: '2rem' }}>price</div>
      </ChartContainer> */}
    </Container>
  </HeaderContainer>
);

export default Header;
