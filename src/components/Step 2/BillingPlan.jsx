import React from "react";

function BillingPlan({ info, onClick }) {
  return (
    <section className="billing-plan">
      <div className="content-container">
        <p className={info.step2.period === "monthly" ? "active" : ""}>
          Monthly
        </p>
        <div
          className={`switch ${info.step2.period === "yearly" ? "active" : ""}`}
          onClick={onClick}
        ></div>
        <p className={info.step2.period === "yearly" ? "active" : ""}>Yearly</p>
      </div>
    </section>
  );
}

export default BillingPlan;
