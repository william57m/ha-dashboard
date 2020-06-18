import React from 'react';
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShieldAlt, faLock } from '@fortawesome/free-solid-svg-icons';
import { Title } from '../../../Common';
import { AlarmCard } from './AlarmCard';
import { PanelSection } from '../Common';


const Icon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 0px;
  right: 0px;
  color: ${props => props.theme.colors.green};
`;

export function PanelAlarm(props) {
  const { state } = props.hass.states['alarm_control_panel.alarme'];
  const icon = state == 'disarmed' ? faShieldAlt : faLock;

  return (
    <PanelSection>
      <Title>Alarme <Icon icon={icon} /></Title>
      <AlarmCard hass={props.hass} />
    </PanelSection>
  );
};
