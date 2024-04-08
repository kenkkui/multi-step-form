import React from 'react';

function Step({ step, heading}) {
  return (
    <div className="step">
      <div className="number">{step}</div>

      <div className="info">
        <div className="step-number">STEP {step}</div>
        <div className="heading">{heading}</div>
      </div>
    </div>
  );
}

export default Step;