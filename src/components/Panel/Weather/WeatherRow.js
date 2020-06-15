import React from 'react';
import styled from '@emotion/styled';

const WeatherRowContainer = styled.div`
  width: 100%;
  height: 46px;
  color: ${props => props.theme.colors.textLight};
  position: relative;
`;

const Time = styled.div`
  position: absolute;
  top: 7px;
  left: 10px;
  font-size: 14px;
  color: ${props => props.theme.colors.textMedium};
`;
const City = styled.div`
  position: absolute;
  top: 21px;
  left: 10px;
  font-size: 16px;
`;
const Temperature = styled.div`
  position: absolute;
  top: 13px;
  right: 10px;
  font-size: 18px;
`;

export function WeatherRow(props) {
  function format2Digits(number) {
    return ('0' + number).slice(-2);
  }
  const offset = props.offset ? props.offset : 0
  const date = new Date(new Date().getTime() + (offset * 60) * 60000);
  return (
    <WeatherRowContainer>
      <Time>{format2Digits(date.getHours())}:{format2Digits(date.getMinutes())}</Time>
      <City>{props.city}</City>
      {/* <div>{props.main}</div> */}
      <Temperature>{props.temp}&#176;</Temperature>
    </WeatherRowContainer>
  );
}
