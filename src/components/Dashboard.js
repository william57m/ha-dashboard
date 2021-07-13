import React, { Component } from 'react'
import { ThemeProvider } from '@emotion/react'
import { Controls } from './Controls'
import { Panel } from './Panel'
import { theme } from '../styles/theme'

class Dashboard extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <div className="App">
                    <Panel />
                    <Controls />
                </div>
            </ThemeProvider>
        )
    }
}

export default Dashboard
