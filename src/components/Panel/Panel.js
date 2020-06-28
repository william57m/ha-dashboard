import React from 'react';
import styled from '@emotion/styled'
import {
  DateView,
  PanelAlarm,
  PanelRecall,
  PanelWeather,
  TimeView,
} from '../Common/Widgets';


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
      <PanelWeather hass={props.hass} />
      <PanelRecall hass={props.hass} />
      <PanelAlarm hass={props.hass} />
    </PanelContainer>
  );
};
