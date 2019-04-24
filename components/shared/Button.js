import React from 'react';
import styled from 'styled-components';

const Btn = styled.a`
  margin-right: 1rem;
  letter-spacing: 0.5px;
  text-align: center;
  padding: 9px 12px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
  background-color: ${props => props.theme.bg};
  cursor: pointer;

  &.current {
    background-color: ${props => props.theme.orange};
    color: ${props => props.theme.white};
    cursor: default;
  }

  &:hover {
    background-color: ${props => props.theme.orange};
    color: ${props => props.theme.white};
  }
`;

const Button = ({ children, isActive }) => (
  <Btn className={isActive && 'current'}>{children}</Btn>
);

export default Button;
