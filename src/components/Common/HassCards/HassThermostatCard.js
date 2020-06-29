import React from 'react';

import { ThermostatCard } from '../Cards';


export function HassThermostatCard(props) {
  const entity = props.hass.states[props.entityId];
  const { friendly_name, occupied_heating_setpoint } = entity.attributes;
  const state = entity.state;
  const isActive = entity.state && entity.state !== 'off' && entity.state !== 'unavailable';

  return (
    <ThermostatCard
      name={friendly_name}
      state={state}
      isActive={isActive}
      heatingSetpoint={occupied_heating_setpoint}
    />
  );
}
