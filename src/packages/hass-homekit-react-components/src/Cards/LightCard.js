import React, { useContext } from 'react'
import { LightCard } from 'homekit-react-components'
import { HassContext } from '../../../../context'

export function HassLightCard(props) {
    const hass = useContext(HassContext)
    const entity = hass.states[props.entityId]
    const { friendly_name, brightness } = entity.attributes
    const on =
        entity.state && entity.state !== 'off' && entity.state != 'unavailable'
    const brightnessPercentage = Math.floor((brightness * 100) / 255)

    function handleToggle() {
        hass.callService('light', 'toggle', {
            entity_id: entity.entity_id,
        })
    }

    function handlePercentageChange(value) {
        const brightness = Math.floor((value * 255) / 100)
        hass.callService('light', 'turn_on', {
            entity_id: props.entityId,
            brightness: brightness,
        })
    }

    return (
        <LightCard
            name={friendly_name}
            on={on}
            brightness={brightnessPercentage}
            onBrightnessChange={handlePercentageChange}
            onToggle={handleToggle}
            capabilities={{
                SUPPORT_BRIGHTNESS: true,
            }}
        />
    )
}
