import React, { useEffect } from 'react';

function Total({ info, setInfo }) {

  useEffect(() => {
    setInfo(prev => {
      const planPrice = info.step2.price
      const addOnsPrice = []

      for (let key in info.step3.cardInfos) {
        const value = info.step3.cardInfos[key]
        addOnsPrice.push(value)
      }

      const finalAddOnPrice = addOnsPrice.reduce((accum, value) => accum + value, 0)

      const updatedValues = {
        ...prev,
        step4: parseInt(planPrice) + finalAddOnPrice
      }

      return updatedValues
    })
  }, [])

  return (
    <section className="total-container">
      <p className='name'>Total (per {info.step2.period === "monthly" ? "month" : "year"})</p>
      <p className='total-price'>+${info.step4}{info.step2.period === "monthly" ? "/mo" : "/yr"}</p>
    </section>
  );
}

export default Total;