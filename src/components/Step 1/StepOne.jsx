import React, { useState } from 'react';
import Inputs from "./Inputs"
import "./StepOne.css"
import NextBtn from '../NextBtn';

function StepOne({ handleClick, info, setInfo }) {
  const [animationError, setAnimationError] = useState(false);


  return (
    <>
      <form>
        <Inputs 
          type="text"
          subject="Name"
          placeholder="e.g. Stephen King"
          setInfo={setInfo}
          info={info}
        />

        <Inputs 
          type="email"
          subject="Email Address"
          placeholder="e.g. stephenking@lorem.com"
          setInfo={setInfo}
          info={info}
        />

        <Inputs 
          type="tel"
          subject="Phone number"
          placeholder="e.g. +1 234 567 890"
          setInfo={setInfo}
          info={info}
        />
      </form>

      <NextBtn
        onClick={() => handleClick("1")}
        animation={animationError}
        setAnimationError={setAnimationError}
      />
    </>
  );
}

export default StepOne;