import React from 'react';
import styled from '@emotion/styled';

import { Card } from './Card';


const TemperatureLogoContainer = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${props => props.theme.colors.green};
  border-radius: 45px;
`;

const TemperatureText = styled.div`
  text-align: center;
  padding-top: 12px;
  font-size: 14px;
  color: ${props => props.theme.colors.textLight};
`;

function TemperatureLogo(props) {
  return (
    <TemperatureLogoContainer>
      <TemperatureText>{props.temperature}°</TemperatureText>
    </TemperatureLogoContainer>
  );
}


export function ThermostatCard(props) {

  return (
    <Card
      isActive={props.isActive}
      logo={<TemperatureLogo temperature={props.heatingSetpoint} />}
      name={props.name}
      state={props.state}
    />
  );
}
