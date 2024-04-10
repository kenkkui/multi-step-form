import React, { useState } from 'react';
import "./StepTwo.css"
import NextBtn from '../NextBtn';
import BackBtn from '../BackBtn';
import PlanCard from './PlanCard';
import BillingPlan from './BillingPlan';



function StepTwo({ nextStep, backStep, billingPeriod, setBillingPeriod }) {
  const [selectCard, setSelectCard] = useState();
  const PLAN_CARDS = [
    {
      id: 0,
      price: billingPeriod === "monthly" ? "9/mo" : "90/yr",
      plan: "Arcade"
    },
    {
      id: 1,
      price: billingPeriod === "monthly" ? "12/mo" : "120/yr",
      plan: "Advanced"
    },
    {
      id: 2,
      price: billingPeriod === "monthly" ? "15/mo" : "150/yr",
      plan: "Pro"
    }
  ]

  return (
    <main id='step-two'>
      <div className="card-wrapper">
        {PLAN_CARDS.map(card => {
          return (
            <PlanCard 
              price={card.price}
              plan={card.plan}
              selectCard={() => setSelectCard(card.id)}
              isSelectCard={selectCard === card.id}
              billingPeriod={billingPeriod}
            />
          )
        })}
      </div>

      <BillingPlan 
        setBillingPeriod={setBillingPeriod}
        billingPeriod={billingPeriod}
      />

      <BackBtn backStep={backStep} />
      <NextBtn nextStep={nextStep} />
    </main>
  );
}

export default StepTwo;