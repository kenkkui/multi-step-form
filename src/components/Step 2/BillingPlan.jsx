import React from "react";

function BillingPlan({ info, setInfo }) {
  return (
    <section className="billing-plan">
      <div className="content-container">
        <p className={info.step2.period === "monthly" ? "active" : ""}>
          Monthly
        </p>
        <div
          className={`switch ${info.step2.period === "yearly" ? "active" : ""}`}
          onClick={() =>
            setInfo((prev) => {
              const updatedValues = {
                ...prev,
                step2: {
                  ...prev.step2,
                  period: info.step2.period === "monthly" ? "yearly" : "monthly"
                }
              }
              return updatedValues;
            })
          }
        ></div>
        <p className={info.step2.period === "yearly" ? "active" : ""}>Yearly</p>
      </div>
    </section>
  );
}

export default BillingPlan;
