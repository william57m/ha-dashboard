import React from 'react';
import styled from '@emotion/styled'
import { Title } from '../../../Common';
import { RecallCard } from './RecallCard';
import { PanelSection } from '../Common';


const BadgeCount = styled.div`
  width: 22px;
  height: 22px;
  background-color: ${props => props.theme.badgeCount.color};
  border-radius: 50%;
  text-align: center;
  font-size: 14px;
  line-height: 22px;
  position: absolute;
  top: 0px;
  right: 0px;
`;

export function PanelRecall(props) {
  const notifications = Object.keys(props.hass.states).filter(key => key.includes('persistent_notification'));

  return (
    <PanelSection>
      <Title>
        Rappels
        {notifications.length ?
          <BadgeCount>{notifications.length}</BadgeCount> : null
        }
      </Title>
      <RecallCard hass={props.hass} notifications={notifications} />
    </PanelSection>
  );
};
