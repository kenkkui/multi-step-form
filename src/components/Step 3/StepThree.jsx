import React from "react";
import "./StepThree.css";
import Card from "../Card";
import BackBtn from "../BackBtn";
import NextBtn from "../NextBtn";

function StepThree({ nextStep, backStep, info, setInfo }) {

  function toggleCard(cardName) {
    if (info.step3.addOns.includes(cardName)) {
      setInfo(prev => {
        const updatedValues = {
          ...prev,
          step3: {
            addOns: prev.step3.addOns.filter(index => index !== cardName)
          }
        }

        return updatedValues
      })
    } else {
      setInfo(prev => {
        const updatedValues = {
          ...prev,
          step3: {
            addOns: [...prev.step3.addOns, cardName]
          }
        }

        return updatedValues
      })

    }
  }

  const cards = [
    {
      id: 1,
      name:"Online service",
      aside:"Access to multiplayer gamers",
      price: info.step2.period === "yearly" ? "10/yr" : "1/mo"
    },
    {
      id: 2,
      name:"Larger storage",
      aside:"Extra 1TB of cloud save",
      price: info.step2.period === "yearly" ? "20/yr" : "2/mo"
    },
    {
      id: 3,
      name:"Customizable profile",
      aside:"Custom theme on your profile",
      price: info.step2.period === "yearly" ? "20/yr" : "2/mo"
    }
  ]

  return (
    <main id="step-three">
      <section className="card-wrapper">
        {cards.map(card => {
          return (
            <Card
              key={card.id}
              name={card.name}
              aside={card.aside}
              price={card.price}
              selectCard={info.step3.addOns.includes(card.name)}
              onClick={() => toggleCard(card.name)}
            />
          )
        })}
      </section>

      <BackBtn backStep={backStep} />
      <NextBtn onClick={nextStep} />
    </main>
  );
}

export default StepThree;
