import React, { Children, useState } from 'react';
import Checkbox from './Step 3/Checkbox';

function Card({ name, aside, price, isCardSelected, onClick }) {

  return (
    <div className={`card ${isCardSelected ? "active" : ""}`} onClick={() => onClick(prev => !prev)}>
      <Checkbox 
        name={name}
        aside={aside}
        price={price}
        isCardSelected={isCardSelected}
      /> 
    </div>
  );
}

export default Card;