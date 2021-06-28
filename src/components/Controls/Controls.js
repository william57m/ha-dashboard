import React from 'react';
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { Title } from './Title';
import { CameraCard, FanCard, LightCard, SceneCard, SensorCard, ThermostatCard } from '../../packages/hass-homekit-react-components/src';


const ControlsContainer = styled.div`
  height: 100%;
  width: 1300px;
  padding: 30px;
  box-sizing: border-box;
`;

const ControlsSection = styled.div`
  margin-bottom: 20px;
`;

const ControlsLeft = styled.div`
  margin-right: 20px;
  float: left;
`;

const ControlsRight = styled.div`
  float: left;
`;

const CardContainers = styled.div`
  width: 400px;
`;

const Components = styled.div`
  /* display: flex; */

  & > div {
    margin: 5px 5px 5px 0px;
  }
`;

export function Controls(props) {
  const { hass } = props;
  return (
    <ControlsContainer>
      <ControlsLeft>
        <ControlsSection>
          <Title>Séjour</Title>
          <Components>
            <LightCard hass={hass} entityId="light.lampadaire_ikea" />
            <LightCard hass={hass} entityId="light.lumiere_salon" />
            <LightCard hass={hass} entityId="light.lumiere_cuisine" />
            <ThermostatCard hass={hass} entityId="climate.thermostat_salon_climate" />
          </Components>
        </ControlsSection>
        <ControlsSection>
          <Title>Chambre</Title>
          <Components>
            <LightCard hass={hass} entityId="light.lumiere_chambre" />
            <LightCard hass={hass} entityId="light.lampe_chevet_gauche" />
            <LightCard hass={hass} entityId="light.lampe_chevet_droite" />
          </Components>
        </ControlsSection>
        <ControlsSection>
          <Title>Bureau</Title>
          <Components>
            <LightCard hass={hass} entityId="light.lumiere_bureau" />
          </Components>
        </ControlsSection>
        <ControlsSection>
          <Title>Salle de bain</Title>
          <Components>
            <LightCard hass={hass} entityId="light.lumiere_salledebain" />
            <SensorCard hass={hass} name="Temperature" entityId="sensor.capteur_temp_sdb_temperature" value="temperature" unit="°" />
            <SensorCard hass={hass} name="Humidité" entityId="sensor.capteur_temp_sdb_temperature" value="humidity" unit="%" />
            <FanCard hass={hass} entityId="switch.ventilation_salle_de_bain" />
          </Components>
        </ControlsSection>
      </ControlsLeft>
      <ControlsRight>
        <ControlsSection>
          <Title>Scènes</Title>
          <CardContainers>
            <SceneCard hass={hass} entityId="scene.cozy" icon={<FontAwesomeIcon icon={faMoon} />} />
          </CardContainers>
        </ControlsSection>
        <ControlsSection>
          <Title>Caméra</Title>
          <Components>
            <CameraCard hass={hass} entityId="camera.camera_sejour" />
            <CameraCard hass={hass} entityId="camera.camera_balcon" />
          </Components>
        </ControlsSection>
      </ControlsRight>
    </ControlsContainer>
  );
};
