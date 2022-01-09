import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import FilterComponent from '../../components/FilterComponent';
import ProductCard from '../../components/ProductCard';

import * as productActions from '../../redux/actions/productActions';

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

const ProductsContainer = ({ products, getProducts }) => {
  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const onFilter = selectedItems => {
    console.group(selectedItems);
  };
  return (
    <>
      <ProductTitleStyled>Products</ProductTitleStyled>
      <FilterComponent items={filteItems} onFilter={onFilter} />
      <ProductContainerStyled>
        {products.map(product => (
          <ProductCard key={product.slug} {...product} />
        ))}
      </ProductContainerStyled>
    </>
  );
};

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      prıce: PropTypes.number.isRequired,
      slug: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

const mapStateToProps = state => {
  return {
    products: state.products.products,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProducts: () => dispatch(productActions.getProducts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
