import React, { useEffect, useState } from "react";

function NextBtn({ onClick, confirm, isError }) {
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    if (isError && Object.keys(isError).length > 0) {
      setAnimation(true);
    }
  }, [isError]);

  return (
    <button
      className={`next-btn ${animation ? "animate-error" : ""} ${
        confirm ? "confirm" : ""
      }`}
      onClick={onClick}
      onAnimationEnd={() => setAnimation(false)}
    >
      {confirm ? "Confirm" : "Next Step"}
    </button>
  );
}

export default NextBtn;
