import React, { useState } from 'react';

import StepOne from "./Step 1/StepOne";
import StepTwo from "./Step 2/StepTwo";
import StepThree from "./Step 3/StepThree";
import Header from "./Header";
import StepFour from "./Step 4/StepFour";
import StepFive from "./Step 5/StepFive";

function Forms({ stepNumber, setStepNumber }) {
  const [info, setInfo] = useState({
    step1: {},
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

  function renderStep() {
    if (stepNumber === 1) {
      return (
        <StepOne
          setStepNumber={setStepNumber}
          info={info}
          setInfo={setInfo}
        />
      )
    } else if (stepNumber === 2) {
      return (
        <StepTwo
          backStep={handleBackStep}
          nextStep={handleNextStep}
          info={info}
          setInfo={setInfo}
        />
      )
    } else if (stepNumber === 3) {
      return (
        <StepThree
          backStep={handleBackStep}
          nextStep={handleNextStep}
          info={info}
          setInfo={setInfo}
        />
      )
    } else if (stepNumber === 4) {
      return (
        <StepFour
          backStep={handleBackStep}
          nextStep={handleNextStep}
          setStepNumber={setStepNumber}
          info={info}
          setInfo={setInfo}
        />
      )
    } else if (stepNumber === 5) {
      return <StepFive />
    }
  }

  return (
    <section id="form-page">
      <section className='form-content'>
        {stepNumber !== 5 && <Header stepNumber={stepNumber - 1} />}
        {renderStep()}
      </section>
    </section>
  );
}

export default Forms;