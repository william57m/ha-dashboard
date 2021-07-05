import React from 'react'
import styled from '@emotion/styled'
import { Card } from 'homekit-react-components'
import { HassContext } from '../../../../context'

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

export function HassSensorCard(props) {
    const hass = useContext(HassContext)
    const entity = hass.states[props.entityId]
    const friendly_name = props.name || entity.attributes.friendly_name
    const state = 'Capteur'
    const isActive = false
    let value = entity.attributes[props.value]
    const unit = props.unit

    value = value.toFixed(0)

    return (
        <Card
            isActive={isActive}
            name={friendly_name}
            state={state}
            icon={<TemperatureLogo temperature={value} unit={unit} />}
        />
    )
}
