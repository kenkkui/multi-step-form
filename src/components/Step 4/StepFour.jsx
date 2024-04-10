import React from 'react';
import BackBtn from '../BackBtn';
import NextBtn from '../NextBtn';

function StepFour({ backStep, nextStep}) {
  return (
    <main>
      <section className="check">
        
      </section>
      
      <BackBtn backStep={backStep} />
      <NextBtn nextStep={nextStep} confirm />
    </main>
  );
}

export default StepFour;