import Container from '../Container';
import styled from 'styled-components';
import ShoppingChart from '../../containers/Basket';

import Logo from '../../assets/img/Logo.png';

const HeaderContainer = styled.div`
  background-color: #1ea4ce;
`;

const HeaderContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoContainer = styled.div`
  margin-left: auto;
  margin-right: -40px;
`;

const BasketContainer = styled.div`
  margin-left: auto;
`;

const Header = () => (
  <HeaderContainer>
    <Container>
      <HeaderContentContainer>
        <LogoContainer>
          <img src={Logo} alt='logo' />
        </LogoContainer>
        <BasketContainer>
          <ShoppingChart />
        </BasketContainer>
      </HeaderContentContainer>
    </Container>
  </HeaderContainer>
);

export default Header;
