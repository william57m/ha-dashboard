import React, { useContext } from 'react'
import styled from '@emotion/styled'
import { Card } from 'homekit-react-components'
import { HassContext } from '../../../../context'
import { useTranslation } from 'react-i18next'

const TemperatureLogoContainer = styled.div`
    width: 26px;
    height: 26px;
    background-color: ${(props) => props.theme.colors.green};
    border-radius: 45px;
`

const TemperatureText = styled.div`
    text-align: center;
    padding-top: 8px;
    font-size: 8px;
    font-weight: bold;
    color: ${(props) => props.theme.colors.light1};
`

function TemperatureLogo(props) {
    return (
        <TemperatureLogoContainer>
            <TemperatureText>
                {props.temperature}
                {props.unit}
            </TemperatureText>
        </TemperatureLogoContainer>
    )
}

export function HassSensorCard({ entityId, config, value, unit }) {
    const hass = useContext(HassContext)
    const { t } = useTranslation('common')

    const entity = hass.states[entityId]
    const friendly_name = config?.name || entity.attributes.friendly_name
    const state = `${t('device_class.sensor')}`
    const isActive = false

    return (
        <Card
            isActive={isActive}
            name={friendly_name}
            state={state}
            icon={
                <TemperatureLogo
                    //temperature={entity.attributes[value].toFixed(0)}
                    temperature={parseInt(entity.state).toFixed(0)}
                    unit={unit}
                />
            }
        />
    )
}
