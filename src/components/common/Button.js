import styled, { css } from "styled-components";
import palette from "../../lib/styles/palette";
import { useNavigate } from "react-router-dom";

const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 1rem 7.5rem;
  color: ${palette.colors.secondary};
  outline: none;
  cursor: pointer;
  font-family: "MaruBuri", sans-serif;

  background: ${({ bgcolor, theme }) => bgcolor || palette.colors.primary};
  color: ${({ textcolor }) => textcolor || palette.colors.secondary};

  &:hover {
    background: ${({ hoverbgcolor }) =>
      hoverbgcolor || palette.colors.secondary};
    color: ${({ hovertextcolor }) => hovertextcolor || palette.colors.primary};
  }

  &:disabled {
    background: ${palette.gray[3]};
    color: ${palette.gray[5]};
    cursor: not-allowed;
  }
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 12px 24px;
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    padding: 10px 20px;
    font-size: 0.9rem;
  }
`;

const Button = ({ to = null, children, ...rest }) => {
  const navigate = useNavigate();
  const onClick = (e) => {
    if (to) {
      navigate(to);
      return;
    }
    if (rest.onClick) {
      rest.onClick(e);
    }
  };
  return (
    <StyledButton onClick={onClick} {...rest}>
      {children}
    </StyledButton>
  );
};
export default Button;
