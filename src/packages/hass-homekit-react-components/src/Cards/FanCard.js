import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFan } from '@fortawesome/free-solid-svg-icons';
import { Card } from 'homekit-react-components';

export function HassFanCard(props) {
  const entity = props.hass.states[props.entityId];
  const { friendly_name } = entity.attributes;
  const state = entity.state === 'on' ? 'On' : 'Off';
  const isActive = entity.state && entity.state !== 'off' && entity.state != 'unavailable';

  function handlePress() {
    props.hass.callService('switch', 'toggle', {
      entity_id: entity.entity_id,
    });
  }
  return (
    <Card
      isActive={isActive}
      icon={
        <FontAwesomeIcon icon={faFan} />
      }
      name={friendly_name}
      state={state}
      handlePress={handlePress}
    />
  );
}
