import React, { useEffect, useState } from 'react';
import Addon from './Addon';

function Check({ info , setStepNumber }) {
  const [addOnElems, setAddOnElems] = useState([]);

  useEffect(() => {
    if (info.step3.selectedCards.length > 0) {
      const addOn = [];

      for (let key in info.step3.cardInfos) {
        addOn.push(
          <Addon
            key={key}
            name={key}
            price={info.step3.cardInfos[key]}
            periodCheck={info.step2.period}
          />
        )
      }
      setAddOnElems(addOn)
    }
  }, [])

  return (
    <section className="check">
      <section className="main-plan">
        <div className='plan-name'>
          <h1>{info.step2.plan} ({info.step2.period === "monthly" ? "monthly" : "yearly"})</h1>
          <p className='change-plan' onClick={() => setStepNumber(2)}>
            <u>Change</u>
          </p>
        </div>

        <div className='price'>${info.step2.price}{info.step2.period === "monthly" ? "/mo" : "/yr"}</div>
      </section>

      <section className='add-on-price'>
        {addOnElems}
      </section>
    </section>
  );
}

export default Check;