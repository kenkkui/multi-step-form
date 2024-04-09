import React from "react";
import "./StepThree.css";
import Card from "../Card";
import Checkbox from "./Checkbox";
import BackBtn from "../BackBtn";
import NextBtn from "../NextBtn";

function StepThree({ nextStep, backStep }) {
  return (
    <>
      <header>
        <h1>Pick add-ons</h1>
        <aside>Add-ons help enhance your gaming experience.</aside>
      </header>

      <main id="step-three">
        <section className="card-wrapper">
          <Card
            step={3}
            name="Online service"
            aside="Access to multiplayer gamers"
            price="1"
          />

          <Card
            step={3}
            name="Larger storage"
            aside="Extra 1TB of cloud save"
            price="2"
          />

          <Card
            step={3}
            name="Customizable profile"
            aside="Custom theme on your profile"
            price="2"
          />
        </section>

        <BackBtn 
          backStep={backStep}
        />
        <NextBtn 
          nextStep={nextStep}
        />
      </main>
    </>
  );
}

export default StepThree;
