import React, { useContext } from 'react'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShieldAlt, faLock, faMoon } from '@fortawesome/free-solid-svg-icons'
import { CardTitle } from '../CardTitle'
import { CardContainer, SceneCard } from 'homekit-react-components'
import { DoorRow } from './DoorRow'
import { ProfilePicture } from './ProfilePicture'
import PhotoWilliam from '../../../../../resources/william.jpg'
import PhotoMaina from '../../../../../resources/maina.jpg'
import PhotoRuby from '../../../../../resources/ruby.jpg'
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

export function AlarmCard(props) {
    const hass = useContext(HassContext)
    const { t } = useTranslation('common')

    const { state } = hass.states['alarm_control_panel.texe_upstairs']
    const isMaina =
        hass.states['device_tracker.pixel_5'].state === 'home' ? true : false
    const isWilliam =
        hass.states['device_tracker.pixel_4a_5g'].state === 'home'
            ? true
            : false
    const icon =
        state == 'disarmed'
            ? faShieldAlt
            : state == 'armed_night'
            ? faMoon
            : faLock

    function handleArmAway() {
        hass.callService('alarm_control_panel', 'alarm_arm_away', {
            entity_id: 'alarm_control_panel.texe_upstairs',
        })
    }
    function handleArmNight() {
        hass.callService('alarm_control_panel', 'alarm_arm_night', {
            entity_id: 'alarm_control_panel.texe_upstairs',
        })
    }
    function handleDisarm() {
        hass.callService('alarm_control_panel', 'alarm_disarm', {
            entity_id: 'alarm_control_panel.texe_upstairs',
        })
    }

    console.log(props)

    return (
        <AlarmCardContainer>
            <CardTitle>{t('panel.alarm.title')}</CardTitle>
            <Icon icon={icon} state={state} />

            <PaddingContainer>
                <Title>{t('panel.alarm.sensors_state')}</Title>
                {props.sensors.map((sensorName) => (
                    <DoorRow
                        key={sensorName}
                        entity={hass.states[sensorName]}
                    />
                ))}

                <Title>{t('panel.alarm.people')}</Title>
                {props.people.map((person) => {
                    return (
                        <ProfilePicture
                            src={hass.states[person].attributes.entity_picture}
                            atHome={hass.states[person].state === 'home'}
                        />
                    )
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
