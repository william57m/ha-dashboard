import React from 'react';
import styled from '@emotion/styled'

import { CardContainer } from 'homekit-react-components';
import { CardTitle } from './CardTitle';


const CameraCardContainer = styled(CardContainer)`
  display: block;
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
