import React from 'react';
import styled from '@emotion/styled';
import { CardContainer } from '../../../Controls/Cards/Card';
import { RecallRow } from './RecallRow';

const RecallCardContainer = styled(CardContainer)`
  width: 100%;
  height: initial;
  padding: 10px;
`;

export function RecallCard(props) {
  const notifications = [];
  Object.keys(props.hass.states).forEach((key) => { if(key.includes('persistent_notification')) notifications.push(key) });
  return (
    <RecallCardContainer>
      {notifications.length ?
        notifications.map((key) => 
          <RecallRow key={key} hass={props.hass} entity={props.hass.states[key]} />
        ) :
        <div>
          Aucun rappels
        </div>
      }
    </RecallCardContainer>
  );
}
