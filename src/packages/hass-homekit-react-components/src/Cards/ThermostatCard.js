import React from 'react';
import { ThermostatCard } from 'homekit-react-components';

export function HassThermostatCard(props) {
  const entity = props.hass.states[props.entityId];
  const { friendly_name, occupied_heating_setpoint } = entity.attributes;
  const isActive = entity.state && entity.state !== 'off' && entity.state !== 'unavailable';

  function handleTemperatureChange(value) {
    props.hass.callService('climate', 'set_temperature', {
      entity_id: entity.entity_id,
      temperature: value,
    });
  }

  function handleModeChange(value) {
    props.hass.callService('climate', 'set_hvac_mode', {
      entity_id: entity.entity_id,
      hvac_mode: value.toLowerCase(),
    });
  }

  return (
    <React.Fragment>
      <ThermostatCard
        name={friendly_name}
        currentMode={isActive ? 'Heat' : 'Off'}
        currentTemperature={occupied_heating_setpoint}
        targetTemperature={occupied_heating_setpoint}
        onModeChange={handleModeChange}
        onTemperatureChange={handleTemperatureChange}
      />
    </React.Fragment>
  );
}
