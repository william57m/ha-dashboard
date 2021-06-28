import React from 'react';
import styled from '@emotion/styled'

const TimeContainer = styled.div`
  color: ${props => props.theme.colors.textLight};
  font-size: 70px;
`;

export function TimeView() {
  function format2Digits(number) {
    return ('0' + number).slice(-2);
  }
  return (
    <TimeContainer>
      {format2Digits(new Date().getHours())}:{format2Digits(new Date().getMinutes())}
    </TimeContainer>
  );
};
