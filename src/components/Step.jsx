import React from 'react';
import "./Step.css"

function Step({ step, stepState, heading}) {
  return (
    <div className="step">
      <div className={`step-number-container ${step === stepState ? "active" : ""}`}>
          <div className="number">{step}</div>
      </div>
 

      <div className='step-infos'>
        <div className="step-number">STEP {step}</div>
        <div className="step-heading">{heading}</div>
      </div>
    </div>
  );
}

export default Step;