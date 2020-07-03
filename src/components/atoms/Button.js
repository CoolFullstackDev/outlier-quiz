import React from "react";
import styled from 'styled-components';

const StyledButton = styled.button`
  background: ${props => props.selected ? "black" : "#ddd"};
  font-size: 16px;
  border-radius: 3px;
  border: 1px solid ${props => props.disabled ? "#777" : "black"};
  color: ${props => props.disabled ? "grey" : props.selected ? "white" : "black"};
  padding: ${props => props.isLarge ? "0.5em 2em" : "0.25em 2em"};
  cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
  min-width: 190px;
`;
 
const Button = ({ title, onClick, isLarge, selected, disabled }) => { 
  return (
    <StyledButton
      onClick={onClick}
      selected={selected}
      disabled={disabled}
      isLarge={isLarge}
    >
      { title }
    </StyledButton>
  );
}
 
export default Button;