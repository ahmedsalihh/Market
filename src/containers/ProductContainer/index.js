import PropTypes from 'prop-types';
import styled from 'styled-components';
import ProductCard from '../../components/ProductCard';

const ProductContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 24px;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  background-color: #fff;
`;

const ProductsContainer = ({ products }) => {
  return (
    <ProductContainerStyled>
      {products.map(product => (
        <ProductCard key={product.id} {...product} />
      ))}
    </ProductContainerStyled>
  );
};

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

ProductsContainer.defaultProps = {
  products: [
    {
      id: 1,
      image: '',
      amount: 14.99,
    },
    {
      id: 2,
      image: '',
      amount: 14.99,
    },
    {
      id: 3,
      image: '',
      amount: 14.99,
    },
    {
      id: 4,
      image: '',
      amount: 14.99,
    },
    {
      id: 5,
      image: '',
      amount: 14.99,
    },
    {
      id: 6,
      image: '',
      amount: 14.99,
    },
  ],
};

export default ProductsContainer;
