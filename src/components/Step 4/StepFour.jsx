import React from 'react';
import BackBtn from '../BackBtn';
import NextBtn from '../NextBtn';
import Check from './Check';
import Total from './Total';
import "./StepFour.css"

function StepFour({ backStep, nextStep, billingPeriod, setStepNumber }) {
  return (
    <main id='step-four'>
      <Check 
        billingPeriod={billingPeriod}
        setStepNumber={setStepNumber}
      />

      <Total 
        billingPeriod={billingPeriod}
      />
      
      <BackBtn backStep={backStep} />
      <NextBtn nextStep={nextStep} confirm />
    </main>
  );
}

export default StepFour;