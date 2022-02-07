import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import CheckBox from '../../components/CheckBox';
import Input from '../../components/Input';
import MetricsListContainer from '../../components/MetricsListContainer';

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

const BrandsContainer = ({
  brands,
  title,
  getBrands,
  setFilter,
  setSelectedBrands,
  selectedBrands,
}) => {
  useEffect(() => {
    getBrands();
  }, [getBrands]);

  const onSearch = e => {
    setFilter(e.target.value);
  };

  const handleCheck = position => {
    setSelectedBrands(brands[position]);
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
        <MetricsListContainer>
          <ul>
            <li>
              <CheckBox
                checked={selectedBrands.length === 0 ? true : false}
                id='all'
                label='All'
                name='brand'
              />
            </li>
            {brands.map((item, index) => (
              <li key={item.slug}>
                <CheckBox
                  id={item.slug}
                  label={item.name}
                  name='brand'
                  onChange={() => handleCheck(index)}
                />
              </li>
            ))}
          </ul>
        </MetricsListContainer>
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
    selectedBrands: state.brands.selectedBrands,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getBrands: () => dispatch(brandActions.getBrands()),
    setFilter: filter => dispatch(brandActions.setFilter(filter)),
    setSelectedBrands: brand => dispatch(brandActions.setSelectedBrands(brand)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BrandsContainer);
