import React from 'react';
import styled from '@emotion/styled'

const TitleContainer = styled.div`
  font-size: ${props => props.theme.title.size};
  font-weight: ${props => props.theme.title.weight};
  color: ${props => props.theme.title.color};
  margin-bottom: 10px;
  position: relative;
`;


export function Title(props) {
  return (
    <TitleContainer>
      {props.children}
    </TitleContainer>
  );
}
