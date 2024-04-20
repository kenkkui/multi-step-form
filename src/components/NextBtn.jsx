import React from 'react';

function NextBtn({ onClick, confirm, setIsError, animation }) {
  return (
    <button className={`next-btn ${confirm ? "confirm" : ""} ${animation ? "animate-error" : ""}`} onClick={onClick} onAnimationEnd={() => setIsError(false)}>
      {confirm ? "Confirm" : "Next Step"}
    </button>
  );
}

export default NextBtn;