import styled from 'styled-components';
import Button from '../Button';

const ProductCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 124px;
`;

const ProductCardContainerStyled = styled.div`
  width: 124px;
  height: 124px;
  border-radius: 1rem;
  border: 1px solid #a8a8a8;
`;

const ImageContainer = styled.div`
  width: 92px;
  height: 92px;
  background-color: #a8a8a8;
  margin-left: 16px;
  margin-top: 16px;
`;

const AmountStyled = styled.span`
  color: #1ea4ce;
  font-weight: 700;
`;

const ProductNameStyled = styled.span`
  font-size: 14px;
  font-weight: 600;
  word-wrap: normal;
  margin-bottom: 8px;
`;

const ProductCard = ({ id, amount, name }) => {
  const onAddClick = id => {
    console.log('added', id);
  };
  return (
    <ProductCardStyled>
      <ProductCardContainerStyled>
        <ImageContainer></ImageContainer>
      </ProductCardContainerStyled>
      <AmountStyled>
        {amount.toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' })}
      </AmountStyled>
      <ProductNameStyled>{name}</ProductNameStyled>
      {/* <ProductAddButtonContainer> */}
      <Button onClick={() => onAddClick(id)}>Add</Button>
      {/* </ProductAddButtonContainer> */}
    </ProductCardStyled>
  );
};

export default ProductCard;
