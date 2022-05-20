import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value,setValue] = useState(0);
  // we cannon place the hooks inside conditional statements
  // however we can use condition inside a hook 
    useEffect(()=>{
      console.log('call useEffect');
      if(value>0){
        document.title = `New Messages(${value})`;
      }
    },[value]);
    // [] if we left an empty array then useEffect will only run one time during the rendering
    // [value] once we change the state or value we will run the use effect
    // you can have as many useEffect as you want
    useEffect(()=>{
      console.log('Another useEffect');
    },[]);
  console.log('render component');
  return <>
    <h1>{value}</h1>
    <button className='btn' onClick={()=>setValue(value+1)}>
      Click Me
    </button>
  </>;
};

export default UseEffectBasics;
