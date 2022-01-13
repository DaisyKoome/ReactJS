import React from 'react';
import styled from 'styled-components';

//styled component named Wrapper - wrap everything in the div
//styled components can also have props
//the props are used to modify the CSS
//template literal - grab the props sent into the component
const Wrapper = styled.div`
  position: absolute;
  left: ${props => (props.position === 'left' ? '20px' : '380px')};
  top: 20px;
  background: ${props => (props.lampOn ? 'orange' : 'lightgrey')};
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

//sending along the lampOn, position props from the Lamp component to the Wrapper styled component
//the parent object of lampOn and position is props
//props.lampOn, props.position
/*Difference between props and states:
#Prop - gets passed on into the component 
-never change the props in the component that gets the props
-change the props in the parent component that sends in the props to the other (receiving) component
-if the props are changed in the parent, it will also re-render the other (receiving) component 
so that it reflects the new values in the props
-you can change the state in the receiving component using the state setter - it will trigger a re-render
*/
const Lamp = ({ lampOn, position }) => (
  <Wrapper lampOn={lampOn} position={position}>
    <div />
  </Wrapper>
);

export default Lamp;
