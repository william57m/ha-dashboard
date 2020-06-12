# HomeAssistant React Dashboard

This project will help you get started with building a custom panel for Home Assistant using the React framework.


## Getting started

Install

```bash
npm run install
```

Run a development server

```
npm run start
```

Add the following entry to your `configuration.yaml` file:

```yaml
panel_custom:
  - name: react-panel
    sidebar_title: React Panel
    sidebar_icon: mdi:react
    url_path: react-panel-dev
    js_url: http://host:port/main.js
    embed_iframe: true
    config:
      name: World
```

Restart Home Assistant.

## Deploy

To deploy it, you need to make a build

```bash
npm run build
```

This will generate a new build of the panel in the `dist` folder. Copy the content of this folder and place it in `<home assistant config>/www/react-panel`.

This will make it available from Home Assistant via the url `/local/react-panel/main.js`.

We then have to configure Home Assitant to use it:

```yaml
panel_custom:
  - name: react-panel
    sidebar_title: React Panel
    sidebar_icon: mdi:react
    url_path: react-panel-prod
    js_url: /local/react-panel/main.js
    embed_iframe: true
    config:
      name: World
```
