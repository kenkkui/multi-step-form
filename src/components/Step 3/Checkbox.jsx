import React from 'react';

function Checkbox({ name, aside, price, selectCard }) {
  return (
    <>
      <section className='check-name-wrapper'>
        <div className="checkbox-wrapper">
          <input type="checkbox" checked={selectCard ? true : false} />
          <label>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="9" viewBox="0 0 12 9"><path fill="none" stroke="#FFF" stroke-width="2" d="m1 4 3.433 3.433L10.866 1"/></svg>
          </label>
        </div>
        
        <div className="name-container">
          <h1>{name}</h1>
          <aside>{aside}</aside>
        </div>
      </section>

      <div className="billing-price">+${price}</div>
    </>
  );
}

export default Checkbox;