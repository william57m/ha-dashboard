import React from 'react';

import { CameraCard } from 'homekit-react-components';


export function HassCameraCard(props) {
  const entity = props.hass.states[props.entityId];
  const { friendly_name, entity_picture } = entity.attributes;

  return (
    <CameraCard
      name={friendly_name}
      imageSrc={entity_picture}
    />
  );
}
