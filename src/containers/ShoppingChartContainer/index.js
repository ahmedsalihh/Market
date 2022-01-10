import { connect } from 'react-redux';
import styled from 'styled-components';

import ChartItem from '../../components/ChartItem';
import * as shoppingChartActions from '../../redux/actions/shoppingChartActions';

const ShopingChartContainerStyled = styled.div`
  border-radius: 2px;
  border: 8px solid #1ea4ce;
  background-color: #fff;
  padding-top: 26px;
  padding-bottom: 16px;
  padding-left: 22px;
  padding-right: 27px;
`;

const TotalAmountStyled = styled.div`
  border-radius: 2px;
  border: 2px solid #1ea4ce;
  padding-top: 17.37px;
  padding-bottom: 17.37px;
  padding-left: 24px;
  padding-right: 24px;
`;

const AmountTextStyled = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: #1ea4ce;
`;

const ShopingChartContainer = ({
  chartItems,
  increaseAmount,
  decreaseAmount,
}) => {
  const getTotalAmount = () => {
    let totalAmount = 0;
    chartItems.map(
      item => (totalAmount += parseFloat(item.price) * item.count),
    );
    return totalAmount.toLocaleString('tr-TR', {
      style: 'currency',
      currency: 'TRY',
    });
  };

  const onDecrease = slug => {
    decreaseAmount(slug);
  };

  const onIncrease = slug => {
    increaseAmount(slug);
  };
  return (
    <>
      <ShopingChartContainerStyled>
        {chartItems.map(item => (
          <ChartItem
            {...item}
            key={item.slug}
            onDecrease={onDecrease}
            onIncrease={onIncrease}
          />
        ))}
        <div style={{ float: 'right', width: '92px' }}>
          <TotalAmountStyled>
            <AmountTextStyled>{getTotalAmount()}</AmountTextStyled>
          </TotalAmountStyled>
        </div>
      </ShopingChartContainerStyled>
    </>
  );
};

const mapStateToProps = state => {
  return {
    chartItems: state.shoppingChart.chartItems,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increaseAmount: slug => dispatch(shoppingChartActions.increaseAmount(slug)),
    decreaseAmount: slug => dispatch(shoppingChartActions.decreaseAmount(slug)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShopingChartContainer);
