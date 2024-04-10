import React from 'react';

function NextBtn({ nextStep, confirm }) {
  return (
    <button className={`next-btn ${confirm ? "confirm" : ""}`} onClick={nextStep}>
      {confirm ? "Confirm" : "Next Step"}
    </button>
  );
}

export default NextBtn;