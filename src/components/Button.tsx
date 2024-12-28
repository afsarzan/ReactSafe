import { FC } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: purple;
  color: white;
  padding: 8px 12px;
  border-radius: 5px;
  border: none;
`;

type ButtonProps = {
  text: string;
}

export const Button: FC<ButtonProps> = ({
  text
}) => {
  return <StyledButton>
    {text}
  </StyledButton>
}