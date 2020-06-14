import React from 'react';
import styled from '@emotion/styled';


export const CardContainer = styled.div`
  position: relative;
  background-color: ${props => props.state === 'on' ? props.theme.card.colors.backgroundActive : props.theme.card.colors.backgroundInactive};
  font-weight: 400;
  color: rgba(255, 255, 255, 0.3);
  font-size: 12px;
  border-radius: 10px;
  box-shadow: none;
  transition: none;
  margin: 0px 12px 12px 0px;
  float: left;
  cursor: pointer;
  width: ${props => props.theme.card.size};
  height: ${props => props.theme.card.size};
  overflow: hidden;
`;

export const CardName = styled.div`
  bottom: 18px;
  left: 10px;
  position: absolute;
  line-height: 2vw;
  font-weight: normal;
  color: ${props => props.state === 'on' ? props.theme.card.colors.textActive : props.theme.card.colors.textInactive};
`;

export const CardState = styled.div`
  bottom: 10px;
  left: 10px;
  position: absolute;
  font-weight: 200;
  text-transform: capitalize;
  color: ${props => props.state === 'on' ? props.theme.card.colors.textActive : props.theme.card.colors.textInactive};
`;

export const CardLogo = styled.div`
  top: 10px;
  left: 5px;
  width: 45px;
  position: absolute;
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
