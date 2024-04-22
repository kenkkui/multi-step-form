import React from "react";

import StepOne from "./Step 1/StepOne";
import StepTwo from "./Step 2/StepTwo";
import StepThree from "./Step 3/StepThree";
import Header from "./Header";
import StepFour from "./Step 4/StepFour";
import StepFive from "./Step 5/StepFive";

function Forms({
  stepNumber,
  setStepNumber,
  handleBackStep,
  handleNextStep,
  info,
  setInfo,
  isError,
  setIsError,
}) {
  function renderStep() {
    if (stepNumber === 1) {
      return (
        <StepOne
          setStepNumber={setStepNumber}
          info={info}
          setInfo={setInfo}
          isError={isError}
          setIsError={setIsError}
        />
      );
    } else if (stepNumber === 2) {
      return (
        <StepTwo
          backStep={handleBackStep}
          nextStep={handleNextStep}
          info={info}
          setInfo={setInfo}
        />
      );
    } else if (stepNumber === 3) {
      return (
        <StepThree
          backStep={handleBackStep}
          nextStep={handleNextStep}
          info={info}
          setInfo={setInfo}
        />
      );
    } else if (stepNumber === 4) {
      return (
        <StepFour
          backStep={handleBackStep}
          nextStep={handleNextStep}
          setStepNumber={setStepNumber}
          info={info}
          setInfo={setInfo}
        />
      );
    } else if (stepNumber === 5) {
      return <StepFive />;
    }
  }

  return (
    <section id="form-page">
      <section className="form-content">
        {stepNumber !== 5 && <Header stepNumber={stepNumber - 1} />}
        {renderStep()}
      </section>
    </section>
  );
}

export default Forms;
