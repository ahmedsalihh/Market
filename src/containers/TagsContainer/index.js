import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import CheckBox from '../../components/CheckBox';
import Input from '../../components/Input';

import * as tagActions from '../../redux/actions/tagActions';

const TagsContainerStyled = styled.div`
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

const TagsContainer = ({ tags, title, getTags, setFilter }) => {
  useEffect(() => {
    getTags();
  }, [getTags]);

  const onSearch = e => {
    setFilter(e.target.value);
  };

  return (
    <TagsContainerStyled>
      <TitleContainer>
        <TitleText>{title}</TitleText>
      </TitleContainer>
      <ItemsContainer>
        <InputContainerStyled>
          <Input placeholder={`Search ${title}`} onChange={onSearch} />
        </InputContainerStyled>
        <ListContainer>
          <ul>
            {tags.map(item => (
              <li key={item}>
                <CheckBox id={item} label={item} name='brand' />
              </li>
            ))}
          </ul>
        </ListContainer>
      </ItemsContainer>
    </TagsContainerStyled>
  );
};

TagsContainer.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

const mapStateToProps = state => {
  return {
    tags: state.tags.tags,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getTags: () => dispatch(tagActions.getTags()),
    setFilter: filter => dispatch(tagActions.setFilter(filter)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TagsContainer);
