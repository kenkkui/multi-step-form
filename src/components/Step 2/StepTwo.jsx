import React, { useState } from 'react';
import "./StepTwo.css"
import NextBtn from '../NextBtn';
import BackBtn from '../BackBtn';
import PlanCard from './PlanCard';
import BillingPlan from './BillingPlan';

const PLAN_CARDS = [
  {
    id: 0,
    plan: "Arcade",
    monthlyPrice: "9",
    yearlyPrice: "90",
  },
  {
    id: 1,
    plan: "Advanced",
    monthlyPrice: "12",
    yearlyPrice: "120",
  },
  {
    id: 2,
    plan: "Pro",
    monthlyPrice: "15",
    yearlyPrice: "150",
  }
]

function StepTwo({ nextStep, backStep, info, setInfo }) {
  const [currentCardId, setCurrentCardId] = useState(0);
 
  function handleSelectPlan(plan, id) {
    setCurrentCardId(id)

    setInfo(prev => {
      let price;

      if (info.step2.period === "monthly") {
        price = PLAN_CARDS[id].monthlyPrice
      } else {
        price = PLAN_CARDS[id].yearlyPrice
      }

      const updatedValues = {
        ...prev,
        step2: {
          ...prev.step2,
          plan: plan,
          price: price
       }
      }

      return updatedValues
    })
  }

  function handleClickToggle() {
    setInfo((prev) => {
      let price;
      if (info.step2.period === "monthly") {
        price = PLAN_CARDS[currentCardId].yearlyPrice
      } else {
        price = PLAN_CARDS[currentCardId].monthlyPrice
      }

      const updatedValues = {
        ...prev,
        step2: {  
          ...prev.step2,
          period: info.step2.period === "monthly" ? "yearly" : "monthly",
          price: price
        }
      }

      return updatedValues;
    })
  }

  return (
    <main id='step-two'>
      <div className="card-wrapper">
        {PLAN_CARDS.map(card => {
          return (
            <PlanCard
              key={card.id}
              cardId={card.id}
              price={info.step2.period === "monthly" ? card.monthlyPrice : card.yearlyPrice}
              plan={card.plan}

              onClick={handleSelectPlan}
              info={info}
            />
          )
        })}
      </div>

      <BillingPlan 
        onClick={handleClickToggle}
        info={info}
      />

      <BackBtn backStep={backStep} />
      <NextBtn 
        onClick={nextStep}
      />
    </main>
  );
}

export default StepTwo;