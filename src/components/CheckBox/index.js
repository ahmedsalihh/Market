import PropTypes from 'prop-types';
import styled from 'styled-components';

const RadioButtonContainerStyled = styled.div`
  margin-top: 0.5rem;
`;

const RadioButtonStyled = styled.input.attrs({
  type: 'checkbox',
})`
  width: 22px;
  height: 22px;
  &:checked:after {
    backgrpund-color: #1ea4ce;
  }
`;

const LabelStyled = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SpanStyled = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  word-wrap: normal;
  color: #525252;
  margin-left: 8px;
`;

const RadioButton = ({ id, label, name, onChange, ...props }) => (
  <RadioButtonContainerStyled>
    <LabelStyled htmlFor={id}>
      <RadioButtonStyled
        id={id}
        type='checkbox'
        name={name}
        value={label}
        onChange={onChange}
        {...props}
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
