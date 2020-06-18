import React from 'react';
import styled from '@emotion/styled';


export const CardContainer = styled.div`
  position: relative;
  display: inline-block;
  width: ${props => props.theme.card.size};
  height: ${props => props.theme.card.size};
  background-color: ${props => props.state && props.state !== 'off' && props.state !== 'unavailable' ? props.theme.card.background.colorActive : props.theme.card.background.colorInactive};
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
  color: ${props => props.state && props.state !== 'off' && props.state !== 'unavailable' ? props.theme.card.name.colorActive : props.theme.card.name.colorInactive};
`;

export const CardState = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  font-size: ${props => props.theme.card.state.size};
  font-weight: ${props => props.theme.card.state.weight};
  text-transform: capitalize;
  color: ${props => props.state && props.state !== 'off' && props.state !== 'unavailable' ? props.theme.card.state.colorActive : props.theme.card.state.colorInactive};
`;

export const CardLogo = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  width: 45px;
`;

export function Card(props) {
  return (
    <CardContainer state={props.state} onClick={props.handleToggle}>
      <CardLogo>{props.logo}</CardLogo>
      <CardName state={props.state}>{props.name}</CardName>
      <CardState state={props.state}>{props.state}</CardState>
      {props.children}
    </CardContainer>
  );
}
