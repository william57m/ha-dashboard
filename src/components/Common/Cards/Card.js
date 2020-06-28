import React from 'react';
import styled from '@emotion/styled';


export const CardContainer = styled.div`
  position: relative;
  display: inline-block;
  width: ${props => props.theme.card.size};
  height: ${props => props.theme.card.size};
  background-color: ${props => props.isActive ? props.theme.card.background.colorActive : props.theme.card.background.colorInactive};
  border-radius:  ${props => props.theme.card.borderRadius};
  margin: 0px 12px 12px 0px;
  box-sizing: border-box;
  cursor: pointer;
  overflow: hidden;
  padding: 10px;
`;

export const CardName = styled.div`
  position: absolute;
  bottom: 26px;
  left: 10px;
  width: calc(100% - 20px);
  font-size: ${props => props.theme.card.name.size};
  font-weight: ${props => props.theme.card.name.weight};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${props => props.isActive ? props.theme.card.name.colorActive : props.theme.card.name.colorInactive};
`;

export const CardState = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  font-size: ${props => props.theme.card.state.size};
  font-weight: ${props => props.theme.card.state.weight};
  text-transform: capitalize;
  color: ${props => props.isActive ? props.theme.card.state.colorActive : props.theme.card.state.colorInactive};
`;

export const CardLogo = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  width: 45px;
`;

var buttonPressTimer;

export function Card(props) {

  function handlePress() {
    if (props.handlePress) {
      props.handlePress();
    }
  }

  function handleButtonPress () {
    if (props.handleLongPress) {
      buttonPressTimer = setTimeout(() => props.handleLongPress(), 1000);
    }
  }

  function handleButtonRelease () {
    clearTimeout(buttonPressTimer);
  }

  return (
    <CardContainer
      isActive={props.isActive}
      onClick={handlePress}
      onTouchStart={handleButtonPress} 
      onTouchEnd={handleButtonRelease} 
      onMouseDown={handleButtonPress} 
      onMouseUp={handleButtonRelease} 
      onMouseLeave={handleButtonRelease}
    >
      <CardLogo>{props.logo}</CardLogo>
      <CardName isActive={props.isActive}>{props.name}</CardName>
      <CardState isActive={props.isActive}>{props.state}</CardState>
      {props.children}
    </CardContainer>
  );
}
