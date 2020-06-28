import React from 'react';
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShieldAlt, faLock, faMoon } from '@fortawesome/free-solid-svg-icons';
import { Title } from '../../../Common';
import { AlarmCard } from './AlarmCard';
import { PanelSection } from '../Common';


const Icon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 0px;
  right: 0px;
  color: ${props => props.state === 'disarmed' ?
    props.theme.colors.green :
      props.state == 'armed_night' ?
        props.theme.colors.blue :
          props.theme.colors.red
  };
`;

export function PanelAlarm(props) {
  const { state } = props.hass.states['alarm_control_panel.alarme'];
  const icon = state == 'disarmed' ?  faShieldAlt : (state == 'armed_night' ? faMoon : faLock);

  return (
    <PanelSection>
      <Title>Alarme <Icon icon={icon} state={state} /></Title>
      <AlarmCard hass={props.hass} />
    </PanelSection>
  );
};
