import React from 'react';

import { CameraCard } from '../Cards';


export function HassCameraCard(props) {
  const entity = props.hass.states[props.entityId];

  return (
    <CameraCard
      name={entity.attributes.friendly_name}
      state={entity.state}
      imageSrc={entity.attributes.entity_picture}
    />
  );
}
