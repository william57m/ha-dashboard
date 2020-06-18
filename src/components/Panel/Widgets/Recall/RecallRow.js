import React from 'react';
import styled from '@emotion/styled';
import { CardContainer } from '../../../Controls/Cards/Card';

const RecallRowContainer = styled(CardContainer)`
  position: relative;
  width: 100%;
  color: ${props => props.inactive ? props.theme.colors.textMedium : props.theme.colors.textLight};
  height: initial;
`;

const Description = styled.div`
  font-size: ${props => props.theme.card.name.size};
`;

export function RecallRow(props) {
  function handleDismiss() {
    if (props.entity) {
      props.hass.callService('persistent_notification', 'dismiss', {
        notification_id: props.entity.entity_id.split('.')[1],
      });
    }
  }
  return (
    <RecallRowContainer onClick={handleDismiss} inactive={props.inactive}>
      <Description>{props.message || props.entity.attributes.message}</Description>
    </RecallRowContainer>
  );
}
