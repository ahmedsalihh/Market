import PropTypes from 'prop-types';
import styled from 'styled-components';

import RadioButton from '../RadioButton';

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

const SortingComponent = ({ items }) => (
  <SotringContainerStyled>
    <TitleContainer>
      <TitleText>Sorting</TitleText>
    </TitleContainer>
    <ItemsContainer>
      <ListContainer>
        <ul>
          {items.map(item => (
            <li key={item.id}>
              <RadioButton id={item.id} label={item.label} name='sorting' />
            </li>
          ))}
        </ul>
      </ListContainer>
    </ItemsContainer>
  </SotringContainerStyled>
);

SortingComponent.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default SortingComponent;
