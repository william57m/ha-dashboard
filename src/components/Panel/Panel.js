import React from 'react';
import styled from '@emotion/styled'
import {
  AlarmCard,
  DateView,
  RecallCard,
  TimeView,
  WeatherCard,
} from '../Common/Widgets';
import { PanelSection } from '../Common/Widgets/Common/PanelSection';

const PanelContainer = styled.div`
  height: 100%;
  width: 360px;
  padding: 30px;
  box-sizing: border-box;
  background-color: #20202050;
`;


export function Panel(props) {
  return (
    <PanelContainer>
      <TimeView />
      <DateView />
      <PanelSection>
        <WeatherCard hass={props.hass} />
      </PanelSection>
      <PanelSection>
        <RecallCard hass={props.hass} />
      </PanelSection>
      <PanelSection>
        <AlarmCard hass={props.hass} />
      </PanelSection>
    </PanelContainer>
  );
};
