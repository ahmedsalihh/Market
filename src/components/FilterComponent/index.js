import { useEffect, useState } from 'react';
import styled from 'styled-components';

import Button from '../Button';

const FilterContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 8px;
  margin-top: 16px;
  margin-bottom: 16px;
`;

const FilterComponent = ({ items, onFilter }) => {
  const [selectedItems, setSelecteditems] = useState([]);

  useEffect(() => {
    setSelecteditems(items.map(item => ({ ...item })));
  }, [items]);

  const onSelect = item => {
    const tmpSelected = selectedItems.map(data =>
      data.id === item.id ? { ...item, selected: !item.selected } : { ...data },
    );
    setSelecteditems(tmpSelected);
    onFilter(tmpSelected.filter(f => f.selected));
  };

  return (
    <FilterContainerStyled>
      {selectedItems.map(item => (
        <Button
          key={item.id}
          type={item.selected ? 'primary' : 'secondary'}
          onClick={() => onSelect(item)}
        >
          {item.name}
        </Button>
      ))}
    </FilterContainerStyled>
  );
};

export default FilterComponent;
