import React from 'react';
import styled from '@emotion/styled'

import { CardContainer, CardTitle } from './Card';


const CameraCardContainer = styled(CardContainer)`
  width: 396px;
  height: 240px;
  padding: 0px;
`;

const Image = styled.img`
  width: 100%;
`;

export function CameraCard(props) {
  return (
    <CameraCardContainer>
      <CardTitle>{props.name}</CardTitle>
      <Image src={props.imageSrc} />
    </CameraCardContainer>
  );
}
