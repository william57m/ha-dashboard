import React, { useContext } from 'react'
import styled from '@emotion/styled'
import { HassContext } from '../../../../context'

const DateContainer = styled.div`
    color: ${(props) => props.theme.colors.textMedium};
    font-size: 20px;
    text-transform: capitalize;
`

export function DateView() {
    const hass = useContext(HassContext)
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }
    const date = new Date().toLocaleDateString(hass.locale.language, options)
    return <DateContainer>{date}</DateContainer>
}
