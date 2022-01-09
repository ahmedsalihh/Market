import styled from 'styled-components';

import ChartItem from '../../components/ChartItem';

const ShopingChartContainerStyled = styled.div`
  border-radius: 2px;
  border: 8px solid #1ea4ce;
  background-color: #fff;
  height: 338.25px;
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

const ShopingChartContainer = ({ chartItems }) => {
  const getTotalAmount = () => {
    let totalAmount = 0;
    chartItems.map(
      item => (totalAmount += parseFloat(item.amount) * item.count),
    );
    return totalAmount.toLocaleString('tr-TR', {
      style: 'currency',
      currency: 'TRY',
    });
  };
  return (
    <>
      <ShopingChartContainerStyled>
        {chartItems.map(item => (
          <ChartItem key={item.id} {...item} />
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

export default ShopingChartContainer;
