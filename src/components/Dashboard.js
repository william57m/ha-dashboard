import React, { Component } from 'react';
import { ThemeProvider } from 'emotion-theming'
import { Controls } from './Controls';
import { Panel } from './Panel';
import { theme } from '../styles/theme';

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
    } = this.props;
    console.log(hass);
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <Panel hass={hass} />
          <Controls hass={hass} />
        </div>
      </ThemeProvider>
    );
  }
}

export default Dashboard;
