import React, { useContext } from 'react'
import { SceneCard } from 'homekit-react-components'
import { HassContext } from '../../../../context'

export function HassSceneCard(props) {
    const hass = useContext(HassContext)

    const entity = hass.states[props.entityId]
    const { friendly_name } = entity.attributes
    const isActive = entity.state && entity.state !== 'scening'

    function handlePress() {
        props.hass.callService('scene', 'turn_on', {
            entity_id: entity.entity_id,
        })
    }

    return (
        <SceneCard
            name={friendly_name}
            isActive={isActive}
            handlePress={handlePress}
            icon={props.icon}
        />
    )
}
