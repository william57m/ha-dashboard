import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faDoorClosed,
  faDoorOpen
} from '@fortawesome/free-solid-svg-icons';


const DoorRowContainer = styled.div`
  display: flex;
  width: 100%;
  height: 30px;
  color: ${props => props.theme.colors.textMedium};
`;

const Name = styled.div`
  font-size: ${props => props.theme.card.name.size};
  flex-grow: 1;
`;

const State = styled.div`
  font-size: ${props => props.theme.card.name.size};;
`;

export function DoorRow(props) {
  const label = props.entity.state === 'on' ? 'Ouvert' : 'Fermé';
  const icon = props.entity.state === 'on' ? faDoorOpen : faDoorClosed;
  return (
    <DoorRowContainer>
      <Name>{props.entity.attributes.friendly_name}</Name>
      <State><FontAwesomeIcon icon={icon} /></State>
    </DoorRowContainer>
  );
}
