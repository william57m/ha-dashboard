import React, { useContext } from 'react'
import { ThermostatCard } from 'homekit-react-components'
import { HassContext } from '../../../../context'

export function HassThermostatCard({ entityId, config }) {
    const hass = useContext(HassContext)

    const entity = hass.states[entityId]
    const { friendly_name } = entity.attributes

    const current_temperature =
        entity.attributes[config.current_temperature] || 0
    const target_temperature = entity.attributes[config.target_temperature] || 0

    console.log(entity)

    const isActive =
        entity.state && entity.state !== 'off' && entity.state !== 'unavailable'

    function handleTemperatureChange(value) {
        hass.callService('climate', 'set_temperature', {
            entity_id,
            temperature: value,
        })
    }

    function handleModeChange(value) {
        hass.callService('climate', 'set_hvac_mode', {
            entity_id,
            hvac_mode: value.toLowerCase(),
        })
    }

    return (
        <React.Fragment>
            <ThermostatCard
                name={friendly_name}
                currentMode={isActive ? 'Heat' : 'Off'}
                currentTemperature={current_temperature}
                targetTemperature={target_temperature}
                onModeChange={handleModeChange}
                onTemperatureChange={handleTemperatureChange}
            />
        </React.Fragment>
    )
}
