import React, { useState} from "react";
import "./StepThree.css";
import Card from "../Card";
import Checkbox from "./Checkbox";
import BackBtn from "../BackBtn";
import NextBtn from "../NextBtn";

function StepThree({ nextStep, backStep, billingPeriod }) {
  const [selectCard, setSelectCard] = useState([]);

  function toggleCard(cardIndex) {
    if (selectCard.includes(cardIndex)) {
      setSelectCard(selectCard.filter(index => index !== cardIndex))
    } else {
      setSelectCard([...selectCard, cardIndex])
    }
  }

  const CARDS = [
    {
      id: 1,
      name:"Online service",
      aside:"Access to multiplayer gamers",
      price: billingPeriod === "yearly" ? "10/yr" : "1/mo"
    },
    {
      id: 2,
      name:"Larger storage",
      aside:"Extra 1TB of cloud save",
      price: billingPeriod === "yearly" ? "20/yr" : "2/mo"
    },
    {
      id: 3,
      name:"Customizable profile",
      aside:"Custom theme on your profile",
      price: billingPeriod === "yearly" ? "20/yr" : "2/mo"
    }
  ]

  return (
    <>
      <main id="step-three">
        <section className="card-wrapper">
          {CARDS.map(card => {
            return (
              <Card
                key={card.id}
                name={card.name}
                aside={card.aside}
                price={card.price}
                selectCard={selectCard.includes(card.id)}
                onClick={() => toggleCard(card.id)}
              />
            )
          })}
        </section>

        <BackBtn backStep={backStep} />
        <NextBtn nextStep={nextStep} />
      </main>
    </>
  );
}

export default StepThree;
