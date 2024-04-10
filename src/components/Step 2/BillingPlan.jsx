import React from 'react';

function BillingPlan({ billingPeriod, setBillingPeriod }) {

  return (
    <section className='billing-plan'>
      <div className="content-container">
        <p className={billingPeriod === "monthly" ? "active" : ""}>Monthly</p>
        <div className={`switch ${billingPeriod === "yearly" ? "active" : ""}`} onClick={() => setBillingPeriod(prev => prev === "monthly" ? "yearly" : "monthly")}></div>
        <p className={billingPeriod === "yearly" ? "active" : ""}>Yearly</p>
      </div>
  </section>
  );
}

export default BillingPlan;