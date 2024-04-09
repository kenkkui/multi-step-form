import React from "react";
import "./StepThree.css";
import Card from "../Card";
import Checkbox from "./Checkbox";
import BackBtn from "../BackBtn";
import NextBtn from "../NextBtn";

function StepThree({ nextStep, backStep, selectCard, isSelectCard }) {
  return (
    <>
      <main id="step-three">
        <section className="card-wrapper">
          <Card
            step={3}
            name="Online service"
            aside="Access to multiplayer gamers"
            price="1"
            selectCard={selectCard}
            isSelectCard={isSelectCard}
          />

          <Card
            step={3}
            name="Larger storage"
            aside="Extra 1TB of cloud save"
            price="2"
            selectCard={selectCard}
            isSelectCard={isSelectCard}
          />

          <Card
            step={3}
            name="Customizable profile"
            aside="Custom theme on your profile"
            price="2"
            selectCard={selectCard}
            isSelectCard={isSelectCard}
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
