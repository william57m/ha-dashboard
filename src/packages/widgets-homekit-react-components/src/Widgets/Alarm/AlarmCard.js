import React, { useContext } from 'react'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShieldAlt, faLock, faMoon } from '@fortawesome/free-solid-svg-icons'
import { CardTitle } from '../CardTitle'
import { CardContainer, SceneCard } from 'homekit-react-components'
import { DoorRow } from './DoorRow'
import { ProfilePicture } from './ProfilePicture'

import { HassContext } from '../../../../../context'
import { useTranslation } from 'react-i18next'

const AlarmCardContainer = styled(CardContainer)`
    width: 100%;
    height: initial;
    padding: 0px;
    cursor: unset;
`

const Title = styled.div`
    color: ${(props) => props.theme.colors.textLight};
    font-size: ${(props) => props.theme.card.name.size};
    margin-bottom: 10px;
`

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const PaddingContainer = styled.div`
    padding: 10px;
`

const Icon = styled(FontAwesomeIcon)`
    position: absolute;
    top: 8px;
    right: 10px;
    color: ${(props) =>
        props.state === 'disarmed'
            ? props.theme.colors.green
            : props.state == 'armed_night'
            ? props.theme.colors.blue
            : props.theme.colors.red};
`

export function AlarmCard({
    sensors,
    people,
    alarm_panels,
    alarm_state,
    arm_away_panels,
    arm_night_panels,
}) {
    const hass = useContext(HassContext)
    const { t } = useTranslation('common')

    const { state } = hass.states[alarm_state]

    const icon =
        state == 'disarmed'
            ? faShieldAlt
            : state == 'armed_night'
            ? faMoon
            : faLock

    function handleArmAway() {
        arm_away_panels.forEach((entity_id) => {
            hass.callService('alarm_control_panel', 'alarm_arm_away', {
                entity_id,
            })
        })
    }
    function handleArmNight() {
        arm_night_panels.forEach((entity_id) => {
            hass.callService('alarm_control_panel', 'alarm_arm_night', {
                entity_id,
            })
        })
    }
    function handleDisarm() {
        alarm_panels.forEach((entity_id) => {
            hass.callService('alarm_control_panel', 'alarm_disarm', {
                entity_id,
            })
        })
    }

    return (
        <AlarmCardContainer>
            <CardTitle>{t('panel.alarm.title')}</CardTitle>
            <Icon icon={icon} state={state} />

            <PaddingContainer>
                <Title>{t('panel.alarm.sensors_state')}</Title>
                {sensors.map((sensorName) => (
                    <DoorRow
                        key={sensorName}
                        entity={hass.states[sensorName]}
                    />
                ))}

                <Title>{t('panel.alarm.people')}</Title>
                {Object.values(hass.states).map((entity) => {
                    if (entity.entity_id.startsWith('person')) {
                        return (
                            <ProfilePicture
                                src={
                                    hass.states[entity.entity_id].attributes
                                        .entity_picture
                                }
                                atHome={
                                    hass.states[entity.entity_id].state ===
                                    'home'
                                }
                            />
                        )
                    }
                })}

                <Title>{t('panel.alarm.title')}</Title>
                <ButtonsContainer>
                    {state === 'disarmed' ? (
                        <React.Fragment>
                            <SceneCard
                                icon={<FontAwesomeIcon icon={faShieldAlt} />}
                                name={t('panel.alarm.arm_away')}
                                handlePress={handleArmAway}
                                height="40px"
                                width="49%"
                                marginRight="6px"
                                isActive={false}
                            />
                            <SceneCard
                                icon={<FontAwesomeIcon icon={faMoon} />}
                                name={t('panel.alarm.arm_night')}
                                handlePress={handleArmNight}
                                height="40px"
                                width="49%"
                                isActive={false}
                            />
                        </React.Fragment>
                    ) : (
                        <SceneCard
                            icon={<FontAwesomeIcon icon={faShieldAlt} />}
                            name={t('panel.alarm.disarm')}
                            handlePress={handleDisarm}
                            height="40px"
                            width="100%"
                            margin="0px"
                            isActive={false}
                        />
                    )}
                </ButtonsContainer>
            </PaddingContainer>
        </AlarmCardContainer>
    )
}
