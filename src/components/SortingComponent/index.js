import PropTypes from 'prop-types';
import RadioButton from '../RadioButton';

const SortingComponent = ({ items }) => (
  <div style={{ marginTop: '2rem' }}>
    <div style={{ marginBottom: '2rem' }}>
      <span>Sorting</span>
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
            <RadioButton id={item.id} label={item.label} name='sorting' />
          </li>
        ))}
      </ul>
    </div>
  </div>
);

SortingComponent.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

SortingComponent.defaultProps = {
  items: [
    { id: 'r1', label: 'Price low to high' },
    { id: 'r2', label: 'Price high to low' },
    { id: 'r3', label: 'New to old' },
    { id: 'r4', label: 'old to new' },
  ],
};

export default SortingComponent;
