import styled from 'styled-components';

const ButtonStyled = styled.button`
  background-color: #1ea4ce;
  border: 0px;
  color: #fff;
  height: 22px;
  border-radius: 2px;
`;

const Button = props => (
  <ButtonStyled {...props}>{props.children}</ButtonStyled>
);

export default Button;
