import React from 'react';
import styled from '@emotion/styled'
import { Title } from '../Common';
import { DateView, TimeView, WeatherCard } from './Widgets';
 

const PanelContainer = styled.div`
  height: 100%;
  width: 380px;
  padding: 30px;
  box-sizing: border-box;
  background-color: #20202050;
  text-transform: capitalize;
`;

const PanelSection = styled.div`
  margin-top: 20px;
`

export function Panel() {
  return (
    <PanelContainer>
      <TimeView />
      <DateView />

      <PanelSection>
        <Title>Météo</Title>
        <WeatherCard />
      </PanelSection>
      {/* <PanelSection>
        <Title>Rappels</Title>
      </PanelSection>
      <PanelSection>
        <Title>Alarme</Title>
      </PanelSection> */}
    </PanelContainer>
  );
};