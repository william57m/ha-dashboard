import React from 'react';
import styled from '@emotion/styled'
import { Title } from '../Common';
import { CameraCard, LightCard, SceneCard, ThermostatCard } from '../Common/HassCards';


const ControlsContainer = styled.div`
  height: 100%;
  width: 1200px;
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
`

export function Controls(props) {
  const { hass } = props;
  return (
    <ControlsContainer>
      <ControlsLeft>
        <ControlsSection>
          <Title>Séjour</Title>
          <LightCard hass={hass} entityId="light.lampadaire_ikea" />
          <LightCard hass={hass} entityId="light.lumiere_salon" />
          <LightCard hass={hass} entityId="light.lumiere_cuisine" />
          <ThermostatCard hass={hass} entityId="climate.thermostat_salon_climate" />
        </ControlsSection>
        <ControlsSection>
          <Title>Chambre</Title>
          <LightCard hass={hass} entityId="light.lampe_chevet_gauche" />
          <LightCard hass={hass} entityId="light.lampe_chevet_droite" />
        </ControlsSection>
      </ControlsLeft>
      <ControlsRight>
        <ControlsSection>
          <Title>Scènes</Title>
          <CardContainers>
            <SceneCard hass={hass} entityId="scene.cozy" />
            <SceneCard hass={hass} entityId="scene.tout_eteindre" />
          </CardContainers>
        </ControlsSection>
        <ControlsSection>
          <Title>Caméra</Title>
          <CameraCard hass={hass} entityId="camera.camera_sejour" />
        </ControlsSection>
      </ControlsRight>
    </ControlsContainer>
  );
};
