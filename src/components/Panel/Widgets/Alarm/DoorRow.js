import React from 'react';
import styled from '@emotion/styled';


const WeatherRowContainer = styled.div`
  position: relative;
  width: 100%;
  height: 46px;
  color: ${props => props.theme.colors.textLight};
`;

const Name = styled.div`
  position: absolute;
  top: 21px;
  left: 10px;
  font-size: ${props => props.theme.card.name.size};
`;

const State = styled.div`
  position: absolute;
  top: 13px;
  right: 10px;
  font-size: 18px;
`;

export function DoorRow(props) {
  return (
    <WeatherRowContainer>
      <Name>{props.entity.attributes.friendly_name}</Name>
      <State>{props.entity.state}</State>
    </WeatherRowContainer>
  );
}
