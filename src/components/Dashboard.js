import React, { Component } from 'react'
import { ThemeProvider } from '@emotion/react'
import { Controls } from './Controls'
import { Panel } from './Panel'
import { theme } from '../styles/theme'

class Dashboard extends Component {
    render() {
        /* eslint-disable no-unused-vars */
        const {
            // Object containing all the state and methods to control Home Assistant
            hass,
            // Boolean if the sidebar is currently shown.
            showMenu,
            // Boolean if the UI should render in narrow mode.
            narrow,
            // Panel information that Home Assistant has (including config at panel.config)
            panel,
        } = this.props

        return (
            <ThemeProvider theme={theme}>
                <div className="App">
                    <Panel />
                    {/*<Controls hass={hass} />*/}
                </div>
                {/* <div className="App-bg" /> */}
            </ThemeProvider>
        )
    }
}

export default Dashboard
