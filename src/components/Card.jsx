import React, { Children, useState } from 'react';
import Checkbox from './Step 3/Checkbox';

function Card({ name, aside, price, selectCard, isSelectCard }) {
  return (
    <div className={`card ${isSelectCard ? "active" : ""}`} onClick={() => selectCard(prev => !prev)}>
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