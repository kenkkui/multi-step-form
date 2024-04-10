import React, { useState } from 'react';

function NextBtn({ onClick, confirm, setAnimationError, animation }) {
 

  return (
    <button className={`next-btn ${confirm ? "confirm" : ""} ${animation ? "animate-error" : ""}`} onClick={onClick} onAnimationEnd={() => setAnimationError(false)}>
      {confirm ? "Confirm" : "Next Step"}
    </button>
  );
}

export default NextBtn;