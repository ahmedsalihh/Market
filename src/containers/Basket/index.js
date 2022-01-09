import { connect } from 'react-redux';
import styled from 'styled-components';

import BasketImg from '../../assets/img/basket.png';

const BasketStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  line-height: 76.64px;
  vertical-align: middle;
  background-color: #147594;
`;

const ImageContainer = styled.div`
  margin-left: 24px;
`;

const PriceContainer = styled.div`
  margin-right: 24px;
  margin-left: 8px;
  color: #fff;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
`;

const Basket = ({ chartItems }) => {
  const getTotalPrice = () => {
    let totalAmount = 0;
    chartItems.map(
      item => (totalAmount += parseFloat(item.price) * item.count),
    );
    return totalAmount.toLocaleString('tr-TR', {
      style: 'currency',
      currency: 'TRY',
    });
  };
  return (
    <BasketStyled>
      <ImageContainer>
        <img src={BasketImg} alt='basket' />
      </ImageContainer>
      <PriceContainer>{getTotalPrice()}</PriceContainer>
    </BasketStyled>
  );
};

const mapStateToProps = state => {
  return {
    chartItems: state.shoppingChart.chartItems,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
