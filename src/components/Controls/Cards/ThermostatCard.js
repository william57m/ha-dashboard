import React from 'react';
import styled from '@emotion/styled';
import { Card } from './Card';


const TemperatureLogoContainer = styled.div`
  width: 45px;
  height: 45px;
  background-color: #57AA00;
  border-radius: 45px;
`;

const TemperatureText = styled.div`
  text-align: center;
  padding-top: 13px;
  color: ${props => props.theme.colors.text2};
`;

function TemperatureLogo(props) {
  return (
    <TemperatureLogoContainer>
      <TemperatureText>{props.temperature}°</TemperatureText>
    </TemperatureLogoContainer>
  )
}
export function ThermostatCard(props) {
  return (
    <Card
      logo={<TemperatureLogo temperature={props.entity.attributes.occupied_heating_setpoint} />}
      name={props.entity.attributes.friendly_name}
      state={props.entity.state}
    />
  );
}
