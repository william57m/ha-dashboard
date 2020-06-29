import React from 'react';

import { LightCard } from '../Cards';


export function HassLightCard(props) {
  const entity = props.hass.states[props.entityId];
  const { friendly_name, brightness } = entity.attributes;
  const state = entity.state === 'on' ? Math.floor(brightness / 2.55) + '%' : entity.state;
  const isActive = entity.state && entity.state !== 'off' && entity.state != 'unavailable';

  function handlePress() {
    props.hass.callService('light', 'toggle', {
      entity_id: entity.entity_id,
    });
  }

  return (
    <LightCard
      name={friendly_name}
      state={state}
      isActive={isActive}
      brightness={brightness}
      handlePress={handlePress}
      logo={props.logo}
    />
  );
}
