import React, { useState } from "react";
import "./StepThree.css";
import Card from "../Card";
import BackBtn from "../BackBtn";
import NextBtn from "../NextBtn";

function StepThree({ nextStep, backStep, info, setInfo }) {
  const [selectCards, setSelectCards] = useState([]);

  function toggleCard(cardName) {
    if (selectCards.includes(cardName)) {
      setSelectCards(selectCards.filter(name => name !== cardName))
    } else {
      setSelectCards(prev => {
        const updatedValues = [...prev, cardName]
        return updatedValues;
      })
    }

    if (info,step3.addOns.includes(cardName)) {
      setInfo(info.step3.addOns.filter(item => item !== cardName))
    } else {
      setInfo(prev => {
        const updatedValues = {
          ...prev,
          step3: {
            addOns: [ ...p]
          }
        }
      })
    }
  }

  function handleNextStep() {
    for (let card of selectCards) {
      for (let item of cards) {
        if (item.name === card) {
          const object = {
            name: item.name,
            price: item.price,
          }

          setInfo(prev => {
            const updatedValues = {
              ...prev,
              step3: {
                addOns: [
                  ...prev.step3.addOns,
                  object
                ]
              }
            }

            return updatedValues
          })
        } 
      }
    }
  }

  const cards = [
    {
      id: 1,
      name:"Online service",
      aside:"Access to multiplayer gamers",
      price: info.step2.period === "yearly" ? "10" : "1"
    },
    {
      id: 2,
      name:"Larger storage",
      aside:"Extra 1TB of cloud save",
      price: info.step2.period === "yearly" ? "20" : "2"
    },
    {
      id: 3,
      name:"Customizable profile",
      aside:"Custom theme on your profile",
      price: info.step2.period === "yearly" ? "20" : "2"
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
              selectCard={selectCards.includes(card.name)}
              onClick={() => toggleCard(card.name)}
            />
          )
        })}
      </section>

      <BackBtn backStep={backStep} />
      <NextBtn onClick={handleNextStep} />
    </main>
  );
}

export default StepThree;
