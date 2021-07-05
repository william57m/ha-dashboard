import React, { useContext } from 'react'
import { ThermostatCard } from 'homekit-react-components'
import { HassContext } from '../../../../context'

export function HassThermostatCard(props) {
    const hass = useContext(HassContext)

    const entity = hass.states[props.entityId]
    console.log(entity)

    //const { friendly_name, occupied_heating_setpoint } = entity.attributes
    const { friendly_name, current_temperature, temperature } =
        entity.attributes
    const isActive =
        entity.state && entity.state !== 'off' && entity.state !== 'unavailable'

    function handleTemperatureChange(value) {
        hass.callService('climate', 'set_temperature', {
            entity_id: entity.entity_id,
            temperature: value,
        })
    }

    function handleModeChange(value) {
        hass.callService('climate', 'set_hvac_mode', {
            entity_id: entity.entity_id,
            hvac_mode: value.toLowerCase(),
        })
    }

    return (
        <React.Fragment>
            <ThermostatCard
                name={friendly_name}
                currentMode={isActive ? 'Heat' : 'Off'}
                currentTemperature={current_temperature}
                targetTemperature={temperature}
                onModeChange={handleModeChange}
                onTemperatureChange={handleTemperatureChange}
            />
        </React.Fragment>
    )
}
