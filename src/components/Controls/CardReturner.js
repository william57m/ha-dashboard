import React from 'react'
import {
    LightCard,
    SceneCard,
    CameraCard,
    SensorCard,
    ThermostatCard,
    SwitchCard,
} from '../../packages/hass-homekit-react-components/src'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'

export function CardReturner({ entity }) {
    const id = entity.entity

    if (id.startsWith('light')) return <LightCard entityId={id} />
    if (id.startsWith('camera')) return <CameraCard entityId={id} />
    if (id.startsWith('climate'))
        return <ThermostatCard entityId={id} config={entity.config} />
    if (id.startsWith('sensor') || id.startsWith('binary_sensor'))
        return (
            <SensorCard
                config={entity.config}
                entityId={id}
                value="temperature"
                unit="°"
            />
        )
    if (id.startsWith('scene'))
        return (
            <SceneCard entityId={id} icon={<FontAwesomeIcon icon={faMoon} />} />
        )
    if (id.startsWith('switch')) {
        return <SwitchCard entityId={id} config={entity.config} />
    }
    return null
}
