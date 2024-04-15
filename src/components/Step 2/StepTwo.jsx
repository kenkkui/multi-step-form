import React from 'react';
import "./StepTwo.css"
import NextBtn from '../NextBtn';
import BackBtn from '../BackBtn';
import PlanCard from './PlanCard';
import BillingPlan from './BillingPlan';

function StepTwo({ nextStep, backStep, info, setInfo }) {
  const plan_cards = [
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

  function handleClick(plan, price) {
    setInfo(prev => {
      return {
        ...prev,
        step2: {
          ...prev.step2,
          plan: plan,
          price: price
       }
      }
    })
  }

  return (
    <main id='step-two'>
      <div className="card-wrapper">
        {plan_cards.map(card => {
          return (
            <PlanCard
              key={card.id}
              price={card.price}
              plan={card.plan}

              onClick={handleClick}
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
        onClick={nextStep}
      />
    </main>
  );
}

export default StepTwo;