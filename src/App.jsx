import React, { useState } from "react";
import "./index.css";

import Forms from "./components/Forms";
import StepFlow from "./components/StepsFlow";

function App() {
  const [stepNumber, setStepNumber] = useState(1);  

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
        />
      </section>
    </>

  );
}

export default App;
