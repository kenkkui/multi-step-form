import React, { forwardRef } from 'react';
import Inputs from "./Inputs"
import "./StepOne.css"
import NextBtn from '../NextBtn';

function StepOne({ nextStep }) {
  return (
    <>
      <form>
        <Inputs 
          type="text"
          subject="Name"
          placeholder="e.g. Stephen King"
        />

        <Inputs 
          type="email"
          subject="Email Address"
          placeholder="e.g. stephenking@lorem.com"
        />

        <Inputs 
          type="tel"
          subject="Phone number"
          placeholder="e.g. +1 234 567 890"
        />
      </form>

      <NextBtn 
        nextStep={nextStep}
      />
    </>
  );
}

export default StepOne;