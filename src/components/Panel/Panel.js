import React, { useContext, Suspense } from 'react'
import styled from '@emotion/styled'
import {
    AlarmCard,
    DateView,
    RecallCard,
    TimeView,
    WeatherCard,
} from '../../packages/widgets-homekit-react-components/src'
import { PanelSection } from '../../packages/widgets-homekit-react-components/src'
import { ConfigurationContext } from '../../context'

const PanelContainer = styled.div`
    height: 100%;
    width: 360px;
    padding: 30px;
    box-sizing: border-box;
    background-color: #20202050;
`

export function Panel() {
    const { sidebar_panels } = useContext(ConfigurationContext)

    return (
        <PanelContainer>
            {sidebar_panels?.map((p) => {
                return (
                    <div className="mt-8">
                        <Suspense fallback={<div>Loading...</div>}>
                            <ReturnWidgets panel={p} />
                        </Suspense>
                    </div>
                )
            })}
        </PanelContainer>
    )
}

function ReturnWidgets({ panel }) {
    switch (panel.type) {
        case 'time':
            return <TimeView />
        case 'date':
            return <DateView />
        case 'weather':
            return (
                <PanelSection>
                    <WeatherCard cities={panel.cities} />
                </PanelSection>
            )
        case 'notifications':
            return (
                <PanelSection>
                    <RecallCard />
                </PanelSection>
            )
        case 'alarm':
            return (
                <PanelSection>
                    <AlarmCard
                        alarm_state={panel.alarm_state}
                        alarm_panels={panel.alarm_panels}
                        arm_away_panels={panel.arm_away_panels}
                        arm_night_panels={panel.arm_night_panels}
                        sensors={panel.sensors}
                        people={panel.people}
                    />
                </PanelSection>
            )
        default:
            console.log(`No panel available for type ${panel.type}`)
            return null
    }
}
