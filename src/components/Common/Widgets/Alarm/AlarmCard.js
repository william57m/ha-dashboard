import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShieldAlt, faMoon } from '@fortawesome/free-solid-svg-icons';
import { CardContainer, SlimCard } from '../../Cards';
import { DoorRow } from './DoorRow';
import { ProfilePicture } from './ProfilePicture';
import PhotoWilliam from '../../../../resources/william.jpg'
import PhotoMaina from '../../../../resources/maina.jpg'
import PhotoRuby from '../../../../resources/ruby.jpg'


const AlarmCardContainer = styled(CardContainer)`
  width: 100%;
  height: initial;
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

export function AlarmCard(props) {
  const { state } = props.hass.states['alarm_control_panel.alarme'];
  const isMaina = parseInt(props.hass.states['sensor.iphone_de_maina_occupancy_confidence'].state) == 100;
  const isWilliam = parseInt(props.hass.states['sensor.iphone_de_william_occupancy_confidence'].state) == 100;

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
      <Title>Etat des ouvertures</Title>
      <DoorRow entity={props.hass.states['binary_sensor.porte_entree_contact']} />
      <DoorRow entity={props.hass.states['binary_sensor.porte_balcon_contact']} />

      <Title>Personnes à la maison</Title>
      {isWilliam ? <ProfilePicture src={PhotoWilliam} /> : null}
      {isMaina ? <ProfilePicture src={PhotoMaina} /> : null}
      <ProfilePicture src={PhotoRuby} />

      <Title>Alarme</Title>
      <ButtonsContainer>
        {state === 'disarmed' ?
          <React.Fragment>
            <SlimCard
              logo={<FontAwesomeIcon icon={faShieldAlt} />}
              name="Armer absent"
              onClick={handleArmAway}
              height="40px"
              width="49%"
            />
            <SlimCard
              logo={<FontAwesomeIcon icon={faMoon} />}
              name="Armer nuit"
              onClick={handleArmNight}
              height="40px"
              width="49%"
            />
          </React.Fragment> :
          <SlimCard
            logo={<FontAwesomeIcon icon={faShieldAlt} />}
            name="Désarmer"
            onClick={handleDisarm}
            height="40px"
            width="100%"
            margin="0px"
          />
        }
      </ButtonsContainer>
    </AlarmCardContainer>
  );
}
