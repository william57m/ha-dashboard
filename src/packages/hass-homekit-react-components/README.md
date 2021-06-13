# Hass HomeKit React Components

List of ready to use HomeKit style react components build on top of [homekit-react-components](https://raw.githubusercontent.com/william57m/homekit-react-components) to build dashboard into HomeAssistant

## Installation

```
npm install hass-homekit-react-components
```


## Usage

You just need to provide the hass instance and the entity id to the component

```js
<LightCard
  hass={hass}
  entityId="light.lampadaire_ikea"
/>
```
