import React from 'react';
import "./StepTwo.css"
import NextBtn from '../NextBtn';
import BackBtn from '../BackBtn';
import Card from '../Card';
import PlanCard from './PlanCard';

function StepTwo({ nextStep, backStep, selectCard, isSelectCard }) {
  return (
    <>
      {/* <header>
        <h1>Select your plan</h1>
        <aside>You have the option of monthly or yearly billing</aside>
      </header> */}

      <main id='step-two'>
        <div className="card-wrapper">
          <PlanCard 
            price="9"
            plan="Arcade"
          />

          <PlanCard 
            price="12"
            plan="Advanced"
          />

          <PlanCard 
            price="18"
            plan="Pro"
          />
        </div>

        <section className='billing-plan'>
          <div className="content-container">
            <p>Monthly</p>
            <div className="switch"></div>
            <p>Yearly</p>
          </div>
        </section>


          <BackBtn backStep={backStep} />
          <NextBtn nextStep={nextStep} />
      </main>
    </>
  );
}

export default StepTwo;