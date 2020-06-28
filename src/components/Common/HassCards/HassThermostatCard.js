import React from 'react';

import { ThermostatCard } from '../Cards';


export function HassThermostatCard(props) {
  const entity = props.hass.states[props.entityId];
  const isActive = entity.state && entity.state !== 'off' && entity.state !== 'unavailable';

  return (
    <ThermostatCard
      name={entity.attributes.friendly_name}
      state={entity.state}
      isActive={isActive}
      heatingSetpoint={entity.attributes.occupied_heating_setpoint}
    />
  );
}
