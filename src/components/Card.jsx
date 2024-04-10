import React, { Children, useState } from 'react';
import Checkbox from './Step 3/Checkbox';

function Card({ name, aside, price, selectCard, onClick }) {

  return (
    <div className={`card ${selectCard ? "active" : ""}`} onClick={() => onClick(prev => !prev)}>
      <Checkbox 
        name={name}
        aside={aside}
        price={price}
        selectCard={selectCard}
      /> 
    </div>
  );
}

export default Card;