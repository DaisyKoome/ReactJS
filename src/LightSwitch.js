import React from 'react';
import styled from 'styled-components';

//Button styled component
const Button = styled.button`
  position: absolute;
  left: ${props => (props.position === 'left' ? '20px' : '380px')};
  bottom: 20px;
  background: white;
  color: black;
  border: 1px solid black;
  border-radius: 10px;
  width: 100px;
  height: 50px;
  cursor: pointer;
`;

/*The callback prop here is sent into the LightSwitch component 
to 'call back' the handleLightSwitchOne function from the app component in App.js 
*/
const LightSwitch = ({ callback, position, switchOn }) => (
//The button has an onClick handler which will trigger the callback function
/*
Props make a component to be dynamic and reusable so that it can be used 
in different situations (adapt the logic to suit the use case you want)
*/
  <Button onClick={callback} position={position}>
    {switchOn ? 'On' : 'Off'}
  </Button>
);

export default LightSwitch;
