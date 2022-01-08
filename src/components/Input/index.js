import styled from 'styled-components';

const InputStyled = styled.input`
  padding: 16px;
  border-radius: 2px;
  width: 100%;
  box-sizing: border-box;
  height: 48px;
  border: 1px solid #e0e0e0;
  color: #a8a8a8;
`;

const Input = props => <InputStyled {...props} />;

export default Input;
