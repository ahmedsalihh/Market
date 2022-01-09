import styled from 'styled-components';

const ButtonStyled = styled.button`
  background-color: ${props =>
    props.type === 'primary' ? '#1ea4ce' : '#F2F0FD'};
  border: 0px;
  color: ${props => (props.type === 'primary' ? '#fff' : '#1ea4ce')};
  height: 22px;
  border-radius: 2px;
`;

const Button = props => (
  <ButtonStyled {...props}>{props.children}</ButtonStyled>
);

Button.defaultProps = {
  type: 'primary',
};

export default Button;
