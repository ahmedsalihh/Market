import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import CheckBox from '../../components/CheckBox';
import Input from '../../components/Input';

import * as brandActions from '../../redux/actions/brandActions';

const BrandsContainerStyled = styled.div`
  width: 296px;
`;

const TitleContainer = styled.div`
  margin-bottom: 12px;
`;

const TitleText = styled.span`
  font-size: 13px;
  font-weight: 600;
`;

const ItemsContainer = styled.div`
  background-color: #fff;
  border-radius: 0.2rem;
  padding-top: 24px;
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 13px;
`;

const InputContainerStyled = styled.div`
  margin-bottom: 17px;
`;

const ListContainer = styled.div`
  display: flex;
  flex-diretion: column;
  background-color: #fff;
  max-height: 184px;
  min-height: 184px;
  overflow: auto;
`;

const BrandsContainer = ({ brands, title, getBrands, setFilter }) => {
  useEffect(() => {
    getBrands();
  }, []);

  const onSearch = e => {
    setFilter(e.target.value);
  };

  return (
    <BrandsContainerStyled>
      <TitleContainer>
        <TitleText>{title}</TitleText>
      </TitleContainer>
      <ItemsContainer>
        <InputContainerStyled>
          <Input placeholder={`Search ${title}`} onChange={onSearch} />
        </InputContainerStyled>
        <ListContainer>
          <ul>
            {brands.map(item => (
              <li key={item.slug}>
                <CheckBox id={item.slug} label={item.name} name='brand' />
              </li>
            ))}
          </ul>
        </ListContainer>
      </ItemsContainer>
    </BrandsContainerStyled>
  );
};

BrandsContainer.propTypes = {
  brands: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

const mapStateToProps = state => {
  return {
    brands: state.brands.brands,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getBrands: () => dispatch(brandActions.getBrands()),
    setFilter: filter => dispatch(brandActions.setFilter(filter)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BrandsContainer);
