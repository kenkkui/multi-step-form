import React, { useState } from "react";
import Inputs from "./Inputs";
import "./StepOne.css";
import NextBtn from "../NextBtn";
import validation from "./validate";

const INPUTS = [
  {
    id: 1,
    type: "text",
    subject: "Name",
    placeholder: "e.g. Stephen King",
  },
  {
    id: 2,
    type: "email",
    subject: "Email",
    placeholder: "e.g. stephenking@lorem.com",
  },
  {
    id: 3,
    type: "tel",
    subject: "Phone number",
    placeholder: "e.g. +1 234 567 890",
  },
];

function StepOne({ info, setInfo, setStepNumber, isError, setIsError }) {
  function handleStep1Validate() {
    setIsError(validation(info.step1));

    if (Object.keys(validation(info.step1)).length === 0) {
      setStepNumber((prev) => (prev += 1));
    }
  }

  return (
    <main id="step-one">
      <section className="inputs-section">
        {INPUTS.map((input) => {
          return (
            <Inputs
              key={input.id}
              type={input.type}
              subject={input.subject}
              placeholder={input.placeholder}
              isError={isError}
              info={info}
              setInfo={setInfo}
            />
          );
        })}
      </section>

      <div className="btn-wrapper desktop">
        <NextBtn onClick={handleStep1Validate} isError={isError} />
      </div>
    </main>
  );
}

export default StepOne;
