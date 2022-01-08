import PropTypes from 'prop-types';
import styled from 'styled-components';

const RadioButtonContainerStyled = styled.div`
  margin-top: 0.5rem;
`;

const RadioButtonStyled = styled.input.attrs({
  type: 'checkbox',
})`
  width: 1.5em;
  height: 1.5em;
`;

const LabelStyled = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SpanStyled = styled.span`
  margin-left: 1rem;
  word-wrap: normal;
`;

const RadioButton = ({ id, label, name, onChange }) => (
  <RadioButtonContainerStyled>
    <LabelStyled htmlFor={id}>
      <RadioButtonStyled
        id={id}
        type='checkbox'
        name={name}
        value={label}
        onChange={onChange}
      />
      <SpanStyled>{label}</SpanStyled>
    </LabelStyled>
  </RadioButtonContainerStyled>
);

RadioButton.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

export default RadioButton;
