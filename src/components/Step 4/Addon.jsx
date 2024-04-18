import React from 'react';

function Addon({ name, price, periodCheck }) {
  const periodUnit = periodCheck === "monthly" ? "/mo" : "/yr"

  return (
    <div className="add-on">
      <p className='name'>{name}</p>
      <p className='price'>+${price}{periodUnit}</p>
    </div>
  );
}

export default Addon;