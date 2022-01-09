import styled from 'styled-components';

import Button from '../Button';
import Divider from '../Divider';

const ChartItemContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
`;

const RightContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: auto;
`;

const AmountStyled = styled.div`
  text-align: center;
  vertical-align: middle;
  width: 30px;
  height: 30px;
  line-height: 30px;
  background: #1ea4ce;
  color: #fff;
`;

const ProductnameTextStyled = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #191919;
`;
const AmountTextStyled = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: #1ea4ce;
`;

const ChartItem = ({ slug, name, price, count, onIncrease, onDecrease }) => {
  return (
    <>
      <ChartItemContainerStyled>
        <div>
          <ProductnameTextStyled>{name}</ProductnameTextStyled>
          <AmountTextStyled>{price}</AmountTextStyled>
        </div>
        <RightContainerStyled>
          <Button type='secondary' onClick={() => onDecrease(slug)}>
            -
          </Button>
          <AmountStyled>{count}</AmountStyled>
          <Button type='secondary' onClick={() => onIncrease(slug)}>
            +
          </Button>
        </RightContainerStyled>
      </ChartItemContainerStyled>
      <Divider />
    </>
  );
};

export default ChartItem;
