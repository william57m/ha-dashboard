import React from 'react'
import {
    LightCard,
    SceneCard,
    CameraCard,
    SensorCard,
    ThermostatCard,
} from '../../packages/hass-homekit-react-components/src'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'

export function CardReturner({ entity, type, name }) {
    if (entity.startsWith('light')) return <LightCard entityId={entity} />
    if (entity.startsWith('camera')) return <CameraCard entityId={entity} />
    if (entity.startsWith('climate'))
        return <ThermostatCard entityId={entity} />
    // if (entity.startsWith('sensor'))
    //     return (
    //         <SensorCard
    //             name={name}
    //             entityId={entity}
    //             value="temperature"
    //             unit="°"
    //         />
    //     )
    if (entity.startsWith('scene'))
        return (
            <SceneCard
                entityId={entity}
                icon={<FontAwesomeIcon icon={faMoon} />}
            />
        )
    return null
}
