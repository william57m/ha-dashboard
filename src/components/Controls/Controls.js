import React from 'react';
import styled from '@emotion/styled'
import { CameraCard, LightCard, SlimCard, ThermostatCard } from './Cards';
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
        <LightCard hass={hass} entity={hass.states['light.lampadaire_ikea']} />
        <LightCard hass={hass} entity={hass.states['light.lumiere_salon']} />
        <LightCard hass={hass} entity={hass.states['light.lumiere_cuisine']} />
        <ThermostatCard hass={hass} entity={hass.states['climate.thermostat_salon_climate']} />
      </ControlsSection>
      <ControlsSection>
        <Title>Chambre</Title>
        <LightCard hass={hass} entity={hass.states['light.lampe_chevet_gauche']} />
        <LightCard hass={hass} entity={hass.states['light.lampe_chevet_droite']} />
      </ControlsSection>
      <ControlsSection>
        <Title>Caméra</Title>
        <CameraCard hass={hass} entity={hass.states['camera.camera_sejour']} />
      </ControlsSection>
      {/* <ControlsSection>
        <Title>Scènes</Title>
        <SlimCard logo={<div />} name="Tout allumer" />
      </ControlsSection> */}
    </ControlsContainer>
  );
};
