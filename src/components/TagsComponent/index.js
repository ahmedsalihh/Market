import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import CheckBox from '../CheckBox';
import Input from '../Input';

const TagsContainer = styled.div`
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

const TagsComponent = ({ items, title }) => {
  const [filter, setFilter] = useState(null);
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    if (filter) {
      setFilteredItems(
        items.filter(f => f.label.toLowerCase().includes(filter.toLowerCase())),
      );
    } else {
      setFilteredItems(items);
    }
  }, [filter, items]);

  const onSearch = e => {
    setFilter(e.target.value);
  };

  return (
    <TagsContainer>
      <TitleContainer>
        <TitleText>{title}</TitleText>
      </TitleContainer>
      <ItemsContainer>
        <InputContainerStyled>
          <Input placeholder={`Search ${title}`} onChange={onSearch} />
        </InputContainerStyled>
        <ListContainer>
          <ul>
            {filteredItems.map(item => (
              <li key={item.id}>
                <CheckBox id={item.id} label={item.label} name='brand' />
              </li>
            ))}
          </ul>
        </ListContainer>
      </ItemsContainer>
    </TagsContainer>
  );
};

TagsComponent.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TagsComponent;
