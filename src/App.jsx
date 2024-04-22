import React, { useState } from "react";
import "./index.css";

import Forms from "./components/Forms";
import StepFlow from "./components/StepsFlow";
import BackBtn from "./components/BackBtn";
import NextBtn from "./components/NextBtn";
import validation from "./components/Step 1/validate";

function App() {
  const [isError, setIsError] = useState({});
  const [stepNumber, setStepNumber] = useState(1);
  const [info, setInfo] = useState({
    step1: {
      text: "",
      email: "",
      tel: "",
    },
    step2: {
      period: "monthly",
      plan: "Arcade",
      price: "9",
    },
    step3: {
      selectedCards: [],
      cardInfos: {},
    },
    step4: "",
  });

  function handleNextStep() {
    setStepNumber((prev) => (prev += 1));
  }

  function handleBackStep() {
    setStepNumber((prev) => (prev -= 1));
  }

  function handleStep1Validate() {
    setIsError(validation(info.step1));

    if (Object.keys(validation(info.step1)).length === 0) {
      setStepNumber((prev) => (prev += 1));
    }
  }

  return (
    <>
      <StepFlow className="mobile" stepNumber={stepNumber} />

      <section id="content">
        <StepFlow className="desktop" stepNumber={stepNumber} />

        <Forms
          stepNumber={stepNumber}
          setStepNumber={setStepNumber}
          handleBackStep={handleBackStep}
          handleNextStep={handleNextStep}
          info={info}
          setInfo={setInfo}
          isError={isError}
          setIsError={setIsError}
        />
      </section>

      <div
        className="btn-wrapper-mobile"
        style={
          stepNumber !== 1
            ? { justifyContent: "space-between" }
            : { justifyContent: "flex-end" }
        }
      >
        {stepNumber !== 1 && <BackBtn backStep={handleBackStep} />}
        <NextBtn
          onClick={stepNumber === 1 ? handleStep1Validate : handleNextStep}
        />
      </div>
    </>
  );
}

export default App;
