import React, { useState } from "react";
import "./index.css";

import Forms from "./components/Forms";
import StepFlow from "./components/StepsFlow";

function App() {
  const [stepNumber, setStepNumber] = useState(1);  

  return (
    <section id="content">
      <StepFlow 
        stepNumber={stepNumber}
      />

      <Forms 
        stepNumber={stepNumber}
        setStepNumber={setStepNumber}
      />
    </section>
  );
}

export default App;
