import React from 'react';

function Check({ billingPeriod, setStepNumber }) {
  return (
    <section className="check">
      <section className="main-plan">
        <div className='plan-name'>
          <h1>Arcade ({billingPeriod === "monthly" ? "monthly" : "yearly"})</h1>
          <p className='change-plan' onClick={() => setStepNumber(2)}>
            <u>Change</u>
          </p>
        </div>

        <div className='price'>$9/mo</div>
      </section>

      <section className='add-on-price'>
        <div className="add-on">
          <p className='name'>Online service</p>
          <p className='price'>+$1/mo</p>
        </div>
        <div className="add-on">
          <p className='name'>Larger storage</p>
          <p className='price'>+$2/mo</p>
        </div>
      </section>
    </section>
  );
}

export default Check;