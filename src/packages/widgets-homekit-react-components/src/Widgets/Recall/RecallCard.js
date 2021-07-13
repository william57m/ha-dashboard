import React, { useContext } from 'react'
import styled from '@emotion/styled'
import { CardContainer } from 'homekit-react-components'
import { RecallRow } from './RecallRow'
import { CardTitle } from '../CardTitle'
import { HassContext, StateContext } from '../../../../../context'
import { useTranslation } from 'react-i18next'

const RecallCardContainer = styled(CardContainer)`
    width: 100%;
    height: initial;
    padding: 0px;
    cursor: unset;
`

const BadgeCount = styled.div`
    width: 20px;
    height: 20px;
    background-color: ${(props) => props.theme.badgeCount.color};
    color: ${(props) => props.theme.colors.textLight};
    border-radius: 50%;
    text-align: center;
    font-size: 12px;
    line-height: 20px;
    position: absolute;
    top: 5px;
    right: 10px;
`

export function RecallCard() {
    const hass = useContext(HassContext)
    const { t } = useTranslation('common')

    const notifications = Object.keys(hass.states).filter((key) =>
        key.includes('persistent_notification')
    )

    return (
        <RecallCardContainer>
            <CardTitle>{t('panel.notifications.title')}</CardTitle>
            {notifications.length ? (
                <BadgeCount>{notifications.length}</BadgeCount>
            ) : null}
            {notifications.length ? (
                notifications.map((key) => (
                    <RecallRow
                        key={key}
                        hass={hass}
                        entity={hass.states[key]}
                    />
                ))
            ) : (
                <RecallRow
                    inactive
                    message={t('panel.notifications.inactive')}
                />
            )}
        </RecallCardContainer>
    )
}
