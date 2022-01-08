import styled from 'styled-components';

const ShoppingChartStyled = styled.div`
  background-color: #147594;
  width: 8rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ShoppingChart = () => (
  <ShoppingChartStyled>
    <div style={{ marginLeft: '2rem' }}>icon</div>
    <div style={{ marginLeft: '2rem' }}>price</div>
  </ShoppingChartStyled>
);

export default ShoppingChart;
