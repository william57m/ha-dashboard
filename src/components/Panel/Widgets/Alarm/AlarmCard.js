import React from 'react';
import styled from '@emotion/styled';
import { CardContainer } from '../../../Controls/Cards/Card';
import { DoorRow } from './DoorRow';


const Title = styled.div`
  color: ${props => props.theme.colors.textLight};
`;

const AlarmCardContainer = styled(CardContainer)`
  width: 100%;
  height: initial;
  padding: 10px;
`;

export function AlarmCard(props) {
  return (
    <AlarmCardContainer>
      <Title>Etat des ouvertures</Title>
      <DoorRow entity={props.hass.states['binary_sensor.porte_entree_contact']} />
      <DoorRow entity={props.hass.states['binary_sensor.porte_balcon_contact']} />
    </AlarmCardContainer>
  );
}
