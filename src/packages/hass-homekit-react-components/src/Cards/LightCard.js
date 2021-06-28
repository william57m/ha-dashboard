import React from 'react';
import { LightCard } from 'homekit-react-components';

export function HassLightCard(props) {
  const entity = props.hass.states[props.entityId];
  const { friendly_name, brightness } = entity.attributes;
  const on = entity.state && entity.state !== 'off' && entity.state != 'unavailable';
  const brightnessPercentage = Math.floor(brightness * 100/255);

  function handleToggle() {
    props.hass.callService('light', 'toggle', {
      entity_id: entity.entity_id,
    });
  }

  function handlePercentageChange(value) {
    const brightness = Math.floor(value*255/100);
    props.hass.callService('light', 'turn_on', {
      entity_id: props.entityId,
      brightness: brightness,
    });
  }

  return (
    <LightCard
      name={friendly_name}
      on={on}
      brightness={brightnessPercentage}
      onBrightnessChange={handlePercentageChange}
      onToggle={handleToggle}
      capabilities={{
        SUPPORT_BRIGHTNESS: true
      }}
    />
  );
}
