import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';

import { Card } from './Card';


const LightIcon = styled(FontAwesomeIcon)`
  color: ${props => props.active ? props.theme.card.light.colorActive : props.theme.card.light.colorInactive};
  font-size: 38px;
`;

export function LightCard(props) {
  return (
    <Card
      logo={
        // TO FIX: https://github.com/styled-components/styled-components/issues/1198
        <LightIcon active={props.isActive ? 1 : 0} icon={faLightbulb} />
      }
      name={props.name}
      state={props.state}
      isActive={props.isActive}
      handlePress={props.handlePress}
      handleLongPress={props.handleLongPress}
    />
  );
}
