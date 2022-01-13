import React, { useState } from 'react';
import styled from 'styled-components';
// Components
import Lamp from './Lamp';
import LightSwitch from './LightSwitch';

//style component
//styling on the room component
const Room = styled.div`
  position: relative;
  width: 500px;
  height: 500px;
  border: 10px solid black;
  margin: 0 auto;
`;

function App() {
  // Lamp one
  //isLampOneOn is the state name
  //setIsLampOneOn is the setter of the state
  //useState is the function used to set the state
  //A state in React is immutable - cannot be modified after creation 
  //So always use the setter to set the state 
  const [isLampOneOn, setIsLampOneOn] = useState(false);
  // Lamp two
  const [isLampTwoOn, setIsLampTwoOn] = useState(true);

  //handleLightSwitchOne and handleLightSwitchTwo are functions
  //handleLightSwitchOne changes the state of the lamp to true (on) through the setter setIsLampOneOn
  const handleLightSwitchOne = () => setIsLampOneOn(prev => !prev);
  //handleLightSwitchTwo changes the state of the lamp to false (off) through the setter setIsLampTwoOn
  const handleLightSwitchTwo = () => setIsLampTwoOn(prev => !prev);

  return (
    //Room component in JSX
    //Lamp component has 2 props - lampOn and position
    //lampOn prop, position prop - a prop is an object
    // A prop gets sent along in the component 
    //lampOn is a boolean object
    //position determines whether the lamp is to the left or to the right in Room
    //LightSwitch component
    <Room>
      <Lamp lampOn={isLampOneOn} position='left' />
      <Lamp lampOn={isLampTwoOn} position='right' />
      <LightSwitch //a child of the Lamp
        name='one'
        //callback prop
        callback={handleLightSwitchOne}
        //holds the state of the lamp
        switchOn={isLampOneOn}
        position='left'
      />
      <LightSwitch
        name='two'
        callback={handleLightSwitchTwo}
        switchOn={isLampTwoOn}
        position='right'
      />
    </Room>
  );
}

export default App;
