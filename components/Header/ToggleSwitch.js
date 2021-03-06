import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Switch = styled.a`
  margin-left: 10px;
  background-color: ${props => props.theme.grey};
  border-radius: 30px;
  border: none;
  height: 30px;
  outline: none;
  position: relative;
  width: 60px;

  &::after {
    background-color: ${props => props.theme.orange};
    border-radius: inherit;
    content: '';
    height: inherit;
    cursor: pointer;
    left: 0;
    top: 0;
    position: absolute;
    transition: left 0.6s, width 0.6s;
    width: 30px;
  }

  &:active:after {
    width: 37.5px;
  }

  &.active:active:after {
    left: calc(100% - 37.5px);
  }

  &.active:after {
    left: calc(100% - 30px);
  }

  @media (${props => props.theme.sm}) {
    height: 20px;
    width: 35px;

    &::after {
      width: 20px;
    }

    &:active:after {
      width: 27.5px;
    }

    &.active:active:after {
      left: calc(100% - 27.5px);
    }

    &.active:after {
      left: calc(100% - 20px);
    }
  }
`;

const ToggleSwitch = ({ isActive, changeTheme }) => (
  <>
    Dark Theme <Switch className={isActive && 'active'} onClick={changeTheme} />
  </>
);

ToggleSwitch.propTypes = {
  isActive: PropTypes.bool.isRequired,
  changeTheme: PropTypes.func.isRequired
};

export default ToggleSwitch;
