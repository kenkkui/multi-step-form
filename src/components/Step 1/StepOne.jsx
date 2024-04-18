import React from 'react';
import Inputs from "./Inputs"
import "./StepOne.css"
import NextBtn from '../NextBtn';

const INPUTS = [
  {
    id: 1,
    type: "text",
    subject: "Name",
    placeholder: "e.g. Stephen King"
  },
  {
    id: 2,
    type: "email",
    subject: "Email",
    placeholder: "e.g. stephenking@lorem.com"
  },
  {
    id: 3,
    type: "tel",
    subject: "Phone number",
    placeholder: "e.g. +1 234 567 890"
  },
]

function StepOne({ info, setInfo, animationError, setAnimationError, setStepNumber }) {
  function handleClick(step) {
    if (step === "1") {
      let error = [];

      for (let key in info.step1) {
        if (info.step1[key] === "" && !error.includes(key)) {
          error.push(key); 
        }
      }

      if (error.length > 0) {
        setAnimationError(true)
      } else {
        setStepNumber((prev) => (prev += 1))
      }
    } else if (step === "2") {
      setStepNumber((prev) => (prev += 1))
    }
  }

  return (
    <>
      <main id='step-one'>
        {INPUTS.map(input => {
          return (
            <Inputs 
              key={input.id}
              type={input.type}
              subject={input.subject}
              placeholder={input.placeholder}
              name={input.subject}

              info={info}
              setInfo={setInfo}
            />
          )
        })}

        <NextBtn
          onClick={() => handleClick("1")}
          animation={animationError}
          setAnimationError={setAnimationError}
        />
      </main>
    </>
  );
}

export default StepOne;