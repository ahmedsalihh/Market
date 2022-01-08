import PropTypes from 'prop-types';
import CheckBox from '../CheckBox';

const TagsComponent = ({ items }) => (
  <div style={{ marginTop: '2rem' }}>
    <div style={{ marginBottom: '2rem' }}>
      <span>Brands</span>
    </div>
    <div
      style={{
        display: 'flex',
        flexDiretion: 'column',
        backgroundColor: '#fff',
        borderRadius: '5px',
      }}
    >
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <CheckBox id={item.id} label={item.label} name='brand' />
          </li>
        ))}
      </ul>
    </div>
  </div>
);

TagsComponent.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

TagsComponent.defaultProps = {
  items: [
    { id: 'c1', label: 'Price low to high' },
    { id: 'c2', label: 'Price high to low' },
    { id: 'c3', label: 'New to old' },
    { id: 'c4', label: 'old to new' },
  ],
};

export default TagsComponent;
