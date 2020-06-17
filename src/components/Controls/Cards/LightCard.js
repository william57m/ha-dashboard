import React from 'react';
import styled from '@emotion/styled';
import { Card } from './Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';


const LightIcon = styled(FontAwesomeIcon)`
  color: ${props => props.state === 'on' ? '#ecc344' : props.theme.card.name.colorInactive};
  font-size: 38px;
`;

export function LightCard(props) {

  function handleToggle() {
    props.hass.callService('light', 'toggle', {
      entity_id: props.entity.entity_id,
    });
  }

  const state = props.entity.state === 'on' ?
    Math.round(props.entity.attributes.brightness / 2.54) + '%' :
    props.entity.state;

  return (
    <Card
      logo={<LightIcon state={props.entity.state} icon={faLightbulb} />}
      name={props.entity.attributes.friendly_name}
      state={state}
      handleToggle={handleToggle}
    />
  );
}
