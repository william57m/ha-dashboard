import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFan } from '@fortawesome/free-solid-svg-icons'
import { GridCard } from 'homekit-react-components'
import { HassContext } from '../../../../context'

export function HassSwitchCard(props) {
    const hass = useContext(HassContext)

    const entity = hass.states[props.entityId]
    const { friendly_name } = entity.attributes
    const state = entity.state === 'on' ? 'On' : 'Off'
    const isActive =
        entity.state && entity.state !== 'off' && entity.state != 'unavailable'

    function handlePress() {
        hass.callService('switch', 'toggle', {
            entity_id: entity.entity_id,
        })
    }
    return (
        <GridCard
            isActive={isActive}
            icon={
                props.config.icon ? (
                    <img
                        src={`data:image/svg+xml;utf8,${props.config.icon}`}
                        alt=""
                    />
                ) : (
                    <FontAwesomeIcon icon={faFan} />
                )
            }
            name={friendly_name}
            state={state}
            handlePress={handlePress}
        />
    )
}
