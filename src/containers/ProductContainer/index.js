import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import FilterComponent from '../../components/FilterComponent';
import ProductCard from '../../components/ProductCard';

import * as productActions from '../../redux/actions/productActions';
import * as shoppingChartActions from '../../redux/actions/shoppingChartActions';

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

const ProductsContainer = ({ products, getProducts, addToChart }) => {
  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const onFilter = selectedItems => {
    console.log(selectedItems);
  };

  const onAdd = slug => {
    addToChart(products.find(f => f.slug === slug));
  };
  return (
    <>
      <ProductTitleStyled>Products</ProductTitleStyled>
      <FilterComponent items={filteItems} onFilter={onFilter} />
      <ProductContainerStyled>
        {products.map(product => (
          <ProductCard key={product.slug} {...product} onAdd={onAdd} />
        ))}
      </ProductContainerStyled>
    </>
  );
};

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
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
    addToChart: product => dispatch(shoppingChartActions.addToChart(product)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
