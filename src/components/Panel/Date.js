import React from 'react';
import styled from '@emotion/styled'

const DateContainer = styled.div`
  color: ${props => props.theme.colors.textMedium};
  font-size: 20px;
`;

export function DateView() {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date().toLocaleDateString('fr-FR', options);
  return (
    <DateContainer>
      {date}
    </DateContainer>
  );
};