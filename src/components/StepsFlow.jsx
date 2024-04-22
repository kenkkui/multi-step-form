import React from "react";
import Step from "./Step";

import mobileSvg from "../assets/images/bg-sidebar-mobile.svg"
import desktopSvg from "../assets/images/bg-sidebar-desktop.svg"

const stepHeadings = ["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"];

function StepFlow({ className, stepNumber }) {
  return (
    <section id="step-flow" className={className}>
      <section className="step-container">
        {stepHeadings.map((item, index) => {
          return (
            <Step
              key={index}
              stepState={stepNumber}
              step={index + 1}
              heading={item}
            />
          );
        })}
      </section>

      <section className="background-svg">
        <div className="mobile">
          <img src={mobileSvg} alt="bg-svg" />
        </div>
        <div className="desktop">
          <img src={desktopSvg} alt="bg-svg" />
        </div>
      </section>
      
    </section>
  );
}

export default StepFlow;
