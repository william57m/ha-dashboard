import React from 'react';
import styled from '@emotion/styled';

import { CardContainer } from './Card';


const SlimCardContainer = styled(CardContainer)`
  width: ${props => props.width || '192px'};
  height: ${props => props.height || '58px'};
  margin: 0px;
  line-height: ${props => props.height || '58px'};
  display: flex;
  align-items: center;
`;

const SlimCardLogo = styled.div`
  vertical-align: middle;
  color: ${props => props.theme.card.name.colorInactive};
  margin-right: 5px;
`;

const SlimCardName = styled.div`
  font-size: ${props => props.theme.card.name.size};
  color: ${props => props.theme.card.name.colorInactive};
`;

export function SlimCard(props) {
  return (
    <SlimCardContainer onClick={props.onClick} height={props.height} width={props.width}>
      <SlimCardLogo>{props.logo}</SlimCardLogo>
      <SlimCardName>{props.name}</SlimCardName>
    </SlimCardContainer>
  );
}
