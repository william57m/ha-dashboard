import React, { useMemo } from 'react'
import Dashboard from './Dashboard'
import { ConfigurationContext, HassContext } from '../context'
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'

import en from '../resources/translations/en.json'
import fr from '../resources/translations/fr.json'

export function Provider({ hass, showMenu, narrow, panel }) {
    i18next.init({
        interpolation: { escapeValue: false },
        lng: hass.locale.language,
        resources: {
            en: { common: en },
            fr: { common: fr },
        },
    })

    return (
        <ConfigurationContext.Provider value={panel.config}>
            <HassContext.Provider value={hass}>
                <I18nextProvider i18n={i18next}>
                    <Dashboard />
                </I18nextProvider>
            </HassContext.Provider>
        </ConfigurationContext.Provider>
    )
}
