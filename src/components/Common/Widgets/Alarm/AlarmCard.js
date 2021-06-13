import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShieldAlt, faLock, faMoon } from '@fortawesome/free-solid-svg-icons';
import { CardTitle } from '../../Cards';
import { CardContainer, SceneCard } from 'homekit-react-components';
import { DoorRow } from './DoorRow';
import { ProfilePicture } from './ProfilePicture';
import PhotoWilliam from '../../../../resources/william.jpg'
import PhotoMaina from '../../../../resources/maina.jpg'
import PhotoRuby from '../../../../resources/ruby.jpg'


const AlarmCardContainer = styled(CardContainer)`
  width: 100%;
  height: initial;
  padding: 0px;
  cursor: unset;
`;

const Title = styled.div`
  color: ${props => props.theme.colors.textLight};
  font-size: ${props => props.theme.card.name.size};
  margin-bottom: 10px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const PaddingContainer = styled.div`
  padding: 10px;
`

const Icon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 8px;
  right: 10px;
  color: ${props => props.state === 'disarmed' ?
    props.theme.colors.green :
      props.state == 'armed_night' ?
        props.theme.colors.blue :
          props.theme.colors.red
  };
`;

export function AlarmCard(props) {
  const { state } = props.hass.states['alarm_control_panel.alarme'];
  const isMaina = parseInt(props.hass.states['sensor.iphone_de_maina_occupancy_confidence'].state) == 100;
  const isWilliam = parseInt(props.hass.states['sensor.iphone_de_william_occupancy_confidence'].state) == 100;
  const icon = state == 'disarmed' ?  faShieldAlt : (state == 'armed_night' ? faMoon : faLock);

  function handleArmAway() {
    props.hass.callService('alarm_control_panel', 'alarm_arm_away', {
      entity_id: 'alarm_control_panel.alarme',
    });
  }
  function handleArmNight() {
    props.hass.callService('alarm_control_panel', 'alarm_arm_night', {
      entity_id: 'alarm_control_panel.alarme',
    });
  }
  function handleDisarm() {
    props.hass.callService('alarm_control_panel', 'alarm_disarm', {
      entity_id: 'alarm_control_panel.alarme',
    });
  }

  return (
    <AlarmCardContainer>
      <CardTitle>Alarme</CardTitle>
      <Icon icon={icon} state={state} />

      <PaddingContainer>
      <Title>Etat des ouvertures</Title>
      <DoorRow entity={props.hass.states['binary_sensor.porte_entree_contact']} />
      <DoorRow entity={props.hass.states['binary_sensor.porte_balcon_contact']} />
      <DoorRow entity={props.hass.states['binary_sensor.fenetre_chambre_contact']} />

      <Title>Personnes à la maison</Title>
      {isWilliam ? <ProfilePicture src={PhotoWilliam} /> : null}
      {isMaina ? <ProfilePicture src={PhotoMaina} /> : null}
      <ProfilePicture src={PhotoRuby} />

      <Title>Alarme</Title>
      <ButtonsContainer>
        {state === 'disarmed' ?
          <React.Fragment>
            <SceneCard
              icon={<FontAwesomeIcon icon={faShieldAlt} />}
              name="Armer absent"
              handlePress={handleArmAway}
              height="40px"
              width="49%"
              marginRight="6px"
            />
            <SceneCard
              icon={<FontAwesomeIcon icon={faMoon} />}
              name="Armer nuit"
              handlePress={handleArmNight}
              height="40px"
              width="49%"
            />
          </React.Fragment> :
          <SceneCard
            icon={<FontAwesomeIcon icon={faShieldAlt} />}
            name="Désarmer"
            handlePress={handleDisarm}
            height="40px"
            width="100%"
            margin="0px"
          />
        }
      </ButtonsContainer>
      </PaddingContainer>
    </AlarmCardContainer>
  );
}
