import React from 'react';
import BackBtn from '../BackBtn';
import NextBtn from '../NextBtn';
import Check from './Check';
import Total from './Total';
import "./StepFour.css"

function StepFour({ backStep, nextStep, info, setInfo, setStepNumber }) {
  return (
    <main id='step-four'>
      <Check 
        info={info}
        setInfo={setInfo}
      />

      <Total 
        info={info}
        setStepNumber={setStepNumber}
      />
      
      <BackBtn backStep={backStep} />
      <NextBtn onClick={nextStep} confirm />
    </main>
  );
}

export default StepFour;