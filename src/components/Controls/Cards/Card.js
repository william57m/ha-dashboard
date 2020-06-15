import React from 'react';
import styled from '@emotion/styled';


export const CardContainer = styled.div`
  position: relative;
  display: inline-block;
  width: ${props => props.theme.card.size};
  height: ${props => props.theme.card.size};
  background-color: ${props => props.state && props.state !== 'off' ? props.theme.card.colors.backgroundActive : props.theme.card.colors.backgroundInactive};
  border-radius: 10px;
  margin: 0px 12px 12px 0px;
  cursor: pointer;
  overflow: hidden;
`;

export const CardName = styled.div`
  position: absolute;
  bottom: 26px;
  left: 10px;
  width: calc(100% - 20px);
  font-size: ${props => props.theme.card.text.nameSize};
  font-weight: ${props => props.theme.card.text.nameWeight};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${props => props.state && props.state !== 'off' ? props.theme.card.colors.textActive : props.theme.card.colors.textInactive};
`;

export const CardState = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  font-size: ${props => props.theme.card.text.stateSize};
  font-weight: ${props => props.theme.card.text.stateWeight};
  text-transform: capitalize;
  color: ${props => props.state && props.state !== 'off' ? props.theme.card.colors.textActive : props.theme.card.colors.textInactive};
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
    </CardContainer>
  );
}
