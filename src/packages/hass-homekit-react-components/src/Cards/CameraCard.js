import React, { useContext } from 'react'

import { CameraCard } from 'homekit-react-components'
import { HassContext } from '../../../../context'

export function HassCameraCard(props) {
    const hass = useContext(HassContext)

    const entity = hass.states[props.entityId]
    const { friendly_name, entity_picture } = entity.attributes

    return <CameraCard name={friendly_name} imageSrc={entity_picture} />
}
