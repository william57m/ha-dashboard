import React, { useContext } from 'react'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { Title } from './Title'
import {
    CameraCard,
    FanCard,
    LightCard,
    SceneCard,
    SensorCard,
    ThermostatCard,
} from '../../packages/hass-homekit-react-components/src'
import { ConfigurationContext, HassContext } from '../../context'
import { CardReturner } from './CardReturner'
import { useTranslation } from 'react-i18next'

const ControlsContainer = styled.div`
    height: 100%;
    max-width: calc(100vw - 360px);
    padding: 30px;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 2rem;
`

const ControlsSection = styled.div`
    margin-bottom: 20px;
`

const Components = styled.div`
    display: flex;
    flex-wrap: wrap;
    & > div {
        margin: 10px 10px 0px 0px;
    }
`

export function Controls(props) {
    const hass = useContext(HassContext)
    const { main_panels } = useContext(ConfigurationContext)

    return (
        <ControlsContainer>
            <div>
                {main_panels.map((panel) => {
                    if (panel.side === 'left') {
                        return (
                            <ControlsSection>
                                <Title>{panel.title}</Title>
                                <Components>
                                    {panel.cards.map((entity) => {
                                        return <CardReturner entity={entity} />
                                    })}
                                </Components>
                            </ControlsSection>
                        )
                    }
                })}
            </div>
            <div>
                {main_panels.map((panel) => {
                    if (panel.side === 'right') {
                        return (
                            <ControlsSection>
                                <Title>{panel.title}</Title>
                                <Components>
                                    {panel.cards.map((entity) => {
                                        return <CardReturner entity={entity} />
                                    })}
                                </Components>
                            </ControlsSection>
                        )
                    }
                })}
            </div>
        </ControlsContainer>
    )
}
