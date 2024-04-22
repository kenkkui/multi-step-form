import React, { useState } from "react";
import "./index.css";

import Forms from "./components/Forms";
import StepFlow from "./components/StepsFlow";
import BackBtn from "./components/BackBtn";
import NextBtn from "./components/NextBtn";

function App() {
  const [stepNumber, setStepNumber] = useState(1);  

  function handleNextStep() {
    setStepNumber((prev) => (prev += 1));
  }

  function handleBackStep() {
    setStepNumber((prev) => (prev -= 1));
  }

  return (
    <>
      <StepFlow 
        className="mobile"
        stepNumber={stepNumber}
      />

      <section id="content">
        <StepFlow
          className="desktop"
          stepNumber={stepNumber}
        />

        <Forms 
          stepNumber={stepNumber}
          setStepNumber={setStepNumber}
          handleBackStep={handleBackStep}
          handleNextStep={handleNextStep}
        />
      </section>

      <div className="btn-wrapper-mobile" style={stepNumber !== 1 ? {justifyContent: "space-between"} : {justifyContent: "flex-end"}}>
        {stepNumber !== 1 && <BackBtn backStep={handleBackStep} /> }
        <NextBtn onClick={handleNextStep} />
      </div>
    </>

  );
}

export default App;
