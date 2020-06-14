import React from 'react';
import styled from '@emotion/styled'

const TitleContainer = styled.div`
  font-family: 'SF UI Display';
  font-size: 24px;
  font-weight: normal;
  color: #D0D0D0;
  margin-bottom: 5px;
`;


export function Title(props) {
  return (
    <TitleContainer>
      {props.children}
    </TitleContainer>
  );
};