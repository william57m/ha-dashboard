import React from 'react';
import styled from '@emotion/styled'

const TitleContainer = styled.div`
  font-size: ${props => props.theme.title.text.size};
  font-weight: ${props => props.theme.title.text.weight};
  color: ${props => props.theme.colors.text2};
  margin-bottom: 10px;
`;


export function Title(props) {
  return (
    <TitleContainer>
      {props.children}
    </TitleContainer>
  );
};