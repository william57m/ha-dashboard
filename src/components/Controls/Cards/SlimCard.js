import React from 'react';
import styled from '@emotion/styled';
import { CardContainer, CardLogo, CardName } from './Card';


const SlimCardContainer = styled(CardContainer)`
  width: 192px;
  height: 58px;
`;

const SlimCardLogo = styled(CardLogo)`
  left: 10px;
  top: 16px;
  width: 26px;
`;

const SlimCardName = styled(CardName)`
  left: 40px;
  top: 20px;
  bottom: initial;
`;

export function SlimCard(props) {
  return (
    <SlimCardContainer onClick={props.handleToggle}>
      <SlimCardLogo>{props.logo}</SlimCardLogo>
      <SlimCardName>{props.name}</SlimCardName>
    </SlimCardContainer>
  );
}
