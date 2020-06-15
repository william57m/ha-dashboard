import React from 'react';
import styled from '@emotion/styled';


const RecallRowContainer = styled.div`
  position: relative;
  width: 100%;
  height: 46px;
  color: ${props => props.theme.colors.textLight};
`;

const Description = styled.div`
  position: absolute;
  top: 21px;
  left: 10px;
  font-size: ${props => props.theme.card.name.size};
`;


export function RecallRow(props) {
  function handleDismiss() {
    props.hass.callService('persistent_notification', 'dismiss', {
      notification_id: props.entity.entity_id.split('.')[1],
    });
  }
  return (
    <RecallRowContainer>
      <Description>{props.entity.attributes.message}</Description>
      <div onClick={handleDismiss}>Dismiss</div>
    </RecallRowContainer>
  );
}
