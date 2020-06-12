import React from 'react';

const CardStyle = (state) => ({
  'font-family': 'SF UI Display',
  'font-weight': 400,
  'text-rendering': 'optimizeLegibility',
  'color': 'rgba(255, 255, 255, 0.3)',
  'font-size': '12px',
  'background-color': state === 'on' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(115, 115, 115, 0.2)',
  'border-radius': '10px',
  'box-shadow': 'none',
  'transition': 'none',
  'width': '120px',
  'height': '120px',
  'position': 'relative',
  'margin': '0px 5px 5px 0px',
  'float': 'left',
  'cursor': 'pointer'
});

const NameStyle = (state) => ({
  'top': '60%',
  'left': '10%',
  'position': 'absolute',
  'line-height': '2vw',
  'font-weight': 'bold',
  'color': state === 'on' ? 'rgba(0, 0, 0, 0.6)' : 'rgba(255, 255, 255, 0.3)'
});

const StateStyle = (state) => ({
  'top': '75%',
  'left': '10%',
  'position': 'absolute',
  'line-height': '2vw',
  'color': state === 'on' ? 'rgba(0, 0, 0, 0.6)' : 'rgba(255, 255, 255, 0.3)',
  'text-transform': 'capitalize'
});

const LogoStyle = {
  'top': '10%',
  'left': '5%',
  'width': '45px',
  'position': 'absolute'
};

const PercentageStyle = {
  'top': '10%',
  'right': '5%',
  'width': '45px',
  'position': 'absolute'
};

function RoundStyle(circumference, brightness) {
  return {
    'transform': 'rotate(-90deg)',
    'transform-origin':' 50% 50%',
    'stroke-dasharray': circumference,
    'stroke-dashoffset': circumference - brightness / 100 * circumference
  }
}

export function Card(props) {
  console.log(props);

  function handleToggle() {
    console.log('Toggle');
    const entityId = props.entity.entity_id;
    console.log(entityId);
    const domain = entityId.substr(0, entityId.indexOf('.'));
    props.hass.callService(domain, 'toggle', {
      entity_id: entityId,
    })
  }

  return (
    <div style={CardStyle(props.entity.state)} onClick={handleToggle}>
      <Logo state={props.entity.state} />
      <Percentage entity={props.entity} />
      <div style={NameStyle(props.entity.state)}>{props.entity.attributes.friendly_name}</div>
      <div style={StateStyle(props.entity.state)}>{props.entity.state}</div>
    </div>
  );
}

function Logo(props) {
  const state = props.state === 'on' ? 'animate' : null;
  const color = props.state === 'on' ? 'rgb(253, 216, 53)' : '#44739e';
  return (
    <div style={LogoStyle}>
      <svg viewBox="0 0 50 50"> 
        <path fill="#9da0a2" d="M27.4 47.3h-4.9s-.7.1-.7.8.4.9.7.9h4.9c.3 0 .7-.1.7-.9s-.7-.8-.7-.8zm3.3-2.9H19.3s-.8 0-.8.8.6.9.8.9h11.5c.2 0 .8-.1.8-.9-.1-.8-.9-.8-.9-.8zm0-3H19.3s-.8 0-.8.8.6.9.8.9h11.5c.2 0 .8-.1.8-.9-.1-.8-.9-.8-.9-.8zm0-2.9H19.3s-.8 0-.8.8.6.9.8.9h11.5c.2 0 .8-.1.8-.9s-.9-.8-.9-.8zm5.2-23.2c-3.3-5.3-7-5.6-10.9-5.6-3.8 0-8.4.4-10.9 5.6-.1.1-.1.3.1.7.4.8 3.3 7.2 3.2 18.8 0 1.1-.1 1.6 0 1.7 0 .1 0 .7 1.1.7h13c1 0 1-.5 1.1-.7v-1.7c-.1-11.6 2.8-18 3.2-18.8.1-.4.1-.5.1-.7"/>
        <path className={state} fill={color} d="M14.1 15.3c3.4-.3 7-.4 10.9-.4 3.8 0 7.5.2 10.9.4.4-.4.7-.8.9-1.1C39 8.5 38.9 6.5 38.9 6c-.2-4.4-8.4-5-12.1-5h0-3.4c-3.7 0-12 .5-12.1 5 0 .5-.1 2.5 2.1 8.2 0 .3.3.8.7 1.1z"/>
      </svg>
    </div>
  );
}

function Percentage(props) {
  const entity = props.entity;
  if (entity.state === 'on' && entity.attributes.brightness) {
    const brightness = Math.round(entity.attributes.brightness / 2.54);
    const radius = 20.5;
    const circumference = radius * 2 * Math.PI; 
    return (
      <div style={PercentageStyle}>
        <svg viewBox="0 0 50 50">
          <circle cx="25" cy="25" r={radius} stroke="#b2b2b2" stroke-width="1.5" fill="none" style={RoundStyle(circumference, brightness)} />
          <text x="50%" y="54%" fill="#8d8e90" font-size="14" text-anchor="middle" alignment-baseline="middle">
            {brightness}<tspan font-size="8">%</tspan>
          </text>
        </svg>
      </div>
    );
  } else {
    return null;
  }
}