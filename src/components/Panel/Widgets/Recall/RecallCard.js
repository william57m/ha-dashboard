import React from 'react';
import { RecallRow } from './RecallRow';


export function RecallCard(props) {
  return (
    <React.Fragment>
      {props.notifications.length ?
        props.notifications.map((key) => 
          <RecallRow key={key} hass={props.hass} entity={props.hass.states[key]} />
        ) :
        <RecallRow message={'Aucun rappel'} />
      }
    </React.Fragment>
  );
}
