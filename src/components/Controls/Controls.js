import React from 'react';
import styled from '@emotion/styled'
import { SlimCard } from '../Common/Cards';
import { CameraCard, LightCard, ThermostatCard } from '../Common/HassCards';
import { Title } from '../Common';


const ControlsContainer = styled.div`
  height: 100%;
  width: 700px;
  padding: 30px;
  box-sizing: border-box;
`;

const ControlsSection = styled.div`
  margin-bottom: 20px;
`;

export function Controls(props) {
  const { hass } = props;
  return (
    <ControlsContainer>
      <ControlsSection>
        <Title>Séjour</Title>
        <LightCard hass={hass} entityId="light.lampadaire_ikea" />
        <LightCard hass={hass} entityId="light.lumiere_salon" />
        <LightCard hass={hass} entityId="light.lumiere_cuisine" />
        <ThermostatCard hass={hass} entityId="climate.thermostat_salon_climate" />
        {/* <ThermostatCard hass={hass} entityId="climate.climatisation" /> */}
      </ControlsSection>
      <ControlsSection>
        <Title>Chambre</Title>
        <LightCard hass={hass} entityId="light.lampe_chevet_gauche" />
        <LightCard hass={hass} entityId="light.lampe_chevet_droite" />
      </ControlsSection>
      <ControlsSection>
        <Title>Caméra</Title>
        <CameraCard hass={hass} entityId="camera.camera_sejour" />
      </ControlsSection>
      <ControlsSection>
        <Title>Scènes</Title>
        <SlimCard logo={<div />} name="Tout allumer" />
      </ControlsSection>
    </ControlsContainer>
  );
};
