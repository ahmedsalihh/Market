import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

import RadioButton from '../../components/RadioButton';
import { sortingItems } from '../../constants';

import * as sortingActions from '../../redux/actions/sortingActions';

const SotringContainerStyled = styled.div`
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

const ListContainer = styled.div`
  display: flex;
  flex-diretion: column;
  background-color: #fff;
  max-height: 184px;
  min-height: 184px;
  overflow: auto;
`;

const SortingComponent = ({ setSortingType }) => {
  const handleChange = index => {
    setSortingType(index);
  };
  return (
    <SotringContainerStyled>
      <TitleContainer>
        <TitleText>Sorting</TitleText>
      </TitleContainer>
      <ItemsContainer>
        <ListContainer>
          <ul>
            {sortingItems.map(item => (
              <li key={item.id}>
                <RadioButton
                  defaultChecked={item.id === 1 ? true : false}
                  id={item.id}
                  label={item.label}
                  name='sorting'
                  onChange={() => handleChange(item.id)}
                />
              </li>
            ))}
          </ul>
        </ListContainer>
      </ItemsContainer>
    </SotringContainerStyled>
  );
};

SortingComponent.propTypes = {
  setSortingType: PropTypes.func,
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    setSortingType: type => dispatch(sortingActions.setSelectedSort(type)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SortingComponent);
