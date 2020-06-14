import React from 'react';
import styled from '@emotion/styled'
import { CameraCard, LightCard, SlimCard } from './Cards';
import { Title } from '../Common';

const ControlsContainer = styled.div`
  height: 100%;
  width: 600px;
  padding: 30px;
  box-sizing: border-box;
`;

const ControlsSection = styled.div`
  margin-bottom: 20px;
  display: inline-block;
`

function HueLogo(props) {
  const state = props.state === 'on' ? 'animate' : null;
  const color = props.state === 'on' ? 'rgb(253, 216, 53)' : '#44739e';
  return (
    <svg viewBox="0 0 50 50"> 
      <path fill="#9da0a2" d="M27.4 47.3h-4.9s-.7.1-.7.8.4.9.7.9h4.9c.3 0 .7-.1.7-.9s-.7-.8-.7-.8zm3.3-2.9H19.3s-.8 0-.8.8.6.9.8.9h11.5c.2 0 .8-.1.8-.9-.1-.8-.9-.8-.9-.8zm0-3H19.3s-.8 0-.8.8.6.9.8.9h11.5c.2 0 .8-.1.8-.9-.1-.8-.9-.8-.9-.8zm0-2.9H19.3s-.8 0-.8.8.6.9.8.9h11.5c.2 0 .8-.1.8-.9s-.9-.8-.9-.8zm5.2-23.2c-3.3-5.3-7-5.6-10.9-5.6-3.8 0-8.4.4-10.9 5.6-.1.1-.1.3.1.7.4.8 3.3 7.2 3.2 18.8 0 1.1-.1 1.6 0 1.7 0 .1 0 .7 1.1.7h13c1 0 1-.5 1.1-.7v-1.7c-.1-11.6 2.8-18 3.2-18.8.1-.4.1-.5.1-.7"/>
      <path className={state} fill={color} d="M14.1 15.3c3.4-.3 7-.4 10.9-.4 3.8 0 7.5.2 10.9.4.4-.4.7-.8.9-1.1C39 8.5 38.9 6.5 38.9 6c-.2-4.4-8.4-5-12.1-5h0-3.4c-3.7 0-12 .5-12.1 5 0 .5-.1 2.5 2.1 8.2 0 .3.3.8.7 1.1z"/>
    </svg>
  );
}

export function Controls(props) {
  const { hass } = props;
  return (
    <ControlsContainer>
      <ControlsSection>
        <Title>Séjour</Title>
        <LightCard hass={hass} entity={hass.states['light.lampadaire_ikea']} />
        <LightCard hass={hass} entity={hass.states['light.lumiere_salon']} />
        <LightCard hass={hass} entity={hass.states['light.lumiere_cuisine']} />
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
      <ControlsSection>
        <Title>Scènes</Title>
        <SlimCard logo={<HueLogo />} name="Tout allumer" />
      </ControlsSection>
    </ControlsContainer>
  );
};