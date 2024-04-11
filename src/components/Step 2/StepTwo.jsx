import React, { useState } from 'react';
import "./StepTwo.css"
import NextBtn from '../NextBtn';
import BackBtn from '../BackBtn';
import PlanCard from './PlanCard';
import BillingPlan from './BillingPlan';



function StepTwo({ onClick, backStep, info, setInfo }) {
  const [selectCard, setSelectCard] = useState(0);
  const PLAN_CARDS = [
    {
      id: 0,
      price: info.step2.period === "monthly" ? "9/mo" : "90/yr",
      plan: "Arcade"
    },
    {
      id: 1,
      price: info.step2.period === "monthly" ? "12/mo" : "120/yr",
      plan: "Advanced"
    },
    {
      id: 2,
      price: info.step2.period === "monthly" ? "15/mo" : "150/yr",
      plan: "Pro"
    }
  ]

  return (
    <main id='step-two'>
      <div className="card-wrapper">
        {PLAN_CARDS.map(card => {
          return (
            <PlanCard
              key={card.id}
              price={card.price}
              plan={card.plan}

              selectCard={() => setSelectCard(card.id)}
              isSelectCard={selectCard === card.id}

              info={info}
            />
          )
        })}
      </div>

      <BillingPlan 
        setInfo={setInfo}
        info={info}
      />

      <BackBtn backStep={backStep} />
      <NextBtn 
        onClick={() => onClick("2")}
      />
    </main>
  );
}

export default StepTwo;