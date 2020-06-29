import React from 'react';
import { css } from '@emotion/core';

import { SlimCard } from '../Cards';


export function HassSceneCard(props) {
  const entity = props.hass.states[props.entityId];
  const { friendly_name } = entity.attributes;
  const state = entity.state;
  const isActive = entity.state && entity.state !== 'scening'

  function handlePress() {
    props.hass.callService('scene', 'turn_on', {
      entity_id: entity.entity_id,
    });
  }

  return (
    <SlimCard
      css={css`
        margin: 0px 8px 8px 0px;
        display: inline-flex;
      `}
      name={friendly_name}
      state={state}
      isActive={isActive}
      handlePress={handlePress}
    />
  );
}
