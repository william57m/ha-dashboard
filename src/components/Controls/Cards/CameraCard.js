import React from 'react';
import styled from '@emotion/styled'
import { CardContainer } from './Card';


const CameraCardContainer = styled(CardContainer)`
  width: 396px;
  height: 240px;
`;

const Title = styled.div`
  width: 100%;
  height: 30px;
  line-height: 30px;
  background-color: #D0D0D0;
  color: #404040;
  padding-left: 10px;
  box-sizing: border-box;
  font-size: ${props => props.theme.card.text.nameSize};
`;

const Image = styled.img`
  width: 100%;
`;

export function CameraCard(props) {
  return (
    <CameraCardContainer>
      <Title>{props.entity.attributes.friendly_name}</Title>
      <Image src={props.entity.attributes.entity_picture} />
    </CameraCardContainer>
  );
}
