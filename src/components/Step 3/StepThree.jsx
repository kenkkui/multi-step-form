import React, { useEffect, useState } from "react";
import "./StepThree.css";
import Card from "../Card";
import BackBtn from "../BackBtn";
import NextBtn from "../NextBtn";

function StepThree({ nextStep, backStep, info, setInfo }) {
  function toggleCard(cardName, id) {
    if (info.step3.cardInfos.hasOwnProperty(cardName)) {
      setInfo(prev => {
        const updatedValues = {
          ...prev,
          step3: { 
            cardInfos: {
              ...prev.step3.cardInfos,
            },
            selectedCards: info.step3.selectedCards.filter(item => item !== id)
          }
        }

        delete updatedValues.step3.cardInfos[cardName];
        return updatedValues;
      })
      

    } else {
      setInfo(prev => {
        let price;
        if (info.step2.period === "monthly") {
          price = CARDS[id].monthlyPrice
        } else {
          price = CARDS[id].yearlyPrice;
        }

        const updatedValues ={
          ...prev,
          step3: {
            selectedCards: [
              ...prev.step3.selectedCards,
              id
            ],
            cardInfos: {
              ...prev.step3.cardInfos,
              [cardName]: price
            }
          }
        }

        return updatedValues
      })
    }
  }

  useEffect(() => {
    for (let key of info.step3.selectedCards) {
      console.log(key);

      setInfo(prev => {
        let price;
  
        if (info.step2.period === "monthly") {
          price = CARDS[key].monthlyPrice
        } else {
          price = CARDS[key].yearlyPrice
        }

        const updatedValues = {
          ...prev,
          step3: {
            ...prev.step3,
            cardInfos: {
              ...prev.step3.cardInfos,
              [CARDS[key].name]: price
            }
          }
        }

        return updatedValues
      })
    }
  }, [info.step2.period])

  const CARDS = [
    {
      id: 0,
      name:"Online service",
      aside:"Access to multiplayer gamers",
      monthlyPrice: 1,
      yearlyPrice: 10
    },
    {
      id: 1,
      name:"Larger storage",
      aside:"Extra 1TB of cloud save",
      monthlyPrice: 2,
      yearlyPrice: 20
    },
    {
      id: 2,
      name:"Customizable profile",
      aside:"Custom theme on your profile",
      monthlyPrice: 2,
      yearlyPrice: 20
    }
  ]

  return (
    <main id="step-three">
      <section className="card-wrapper">
        {CARDS.map(card => {
          const periodCheck = info.step2.period === "monthly" ? card.monthlyPrice : card.yearlyPrice

          return (
            <Card
              key={card.id}

              name={card.name}
              aside={card.aside}
              price={periodCheck}

              onClick={() => toggleCard(card.name, card.id)}
              isCardSelected={info.step3.cardInfos.hasOwnProperty(card.name)}
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
