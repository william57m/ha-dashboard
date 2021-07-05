import React from 'react'
import { LightCard } from '../../packages/hass-homekit-react-components/src'

export function CardReturner({ entity, type }) {
    if (entity.startsWith('light')) return <LightCard entityId={entity} />
}
