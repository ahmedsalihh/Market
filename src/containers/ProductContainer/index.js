import PropTypes from 'prop-types';
import styled from 'styled-components';

import FilterComponent from '../../components/FilterComponent/indec';
import ProductCard from '../../components/ProductCard';

const ProductContainerStyled = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 24px;
  padding: 20px;
  background-color: #fff;
`;

const ProductTitleStyled = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: 0.25px;
  color: #6f6f6f;
`;

const filteItems = [
  { id: 1, name: 'mug' },
  { id: 2, name: 'shirt' },
];

const ProductsContainer = ({ products }) => {
  const onFilter = selectedItems => {
    console.group(selectedItems);
  };
  return (
    <>
      <ProductTitleStyled>Products</ProductTitleStyled>
      <FilterComponent items={filteItems} onFilter={onFilter} />
      <ProductContainerStyled>
        {products.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </ProductContainerStyled>
    </>
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
      name: 'test1',
      amount: 14.99,
    },
    {
      id: 2,
      image: '',
      name: 'test1',
      amount: 14.99,
    },
    {
      id: 3,
      image: '',
      name: 'test1',
      amount: 14.99,
    },
    {
      id: 4,
      image: '',
      name: 'test1',
      amount: 14.99,
    },
    {
      id: 5,
      image: '',
      name: 'test1',
      amount: 14.99,
    },
    {
      id: 6,
      image: '',
      name: 'test1',
      amount: 14.99,
    },
  ],
};

export default ProductsContainer;
