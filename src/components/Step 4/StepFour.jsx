import React from 'react';
import BackBtn from '../BackBtn';
import NextBtn from '../NextBtn';
import Check from './Check';
import Total from './Total';
import "./StepFour.css"

function StepFour({ backStep, nextStep, info, setInfo, setStepNumber }) {
  return (
    <main id='step-four'>
      <div className="step-four-content">
        <Check 
          info={info}
          setStepNumber={setStepNumber}
        />

        <Total 
          info={info}
          setInfo={setInfo}
        />
      </div>

      <div className="btn-wrapper">
        <BackBtn backStep={backStep} />
        <NextBtn onClick={nextStep} confirm />
      </div>
    </main>
  );
}

export default StepFour;