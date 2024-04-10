import React from 'react';

function Total({ billingPeriod }) {
  return (
    <section className="total-container">
      <p className='name'>Total (per {billingPeriod === "monthly" ? "month" : "year"})</p>
      <p className='total-price'>+$12/{billingPeriod === "monthly" ? "mo" : "yr"}</p>
    </section>
  );
}

export default Total;