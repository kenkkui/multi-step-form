import React, { forwardRef } from 'react';

function Inputs({ type, subject, placeholder }) {

  return (
    <div className='input'>
      <div className="label-container">
        <label>{subject}</label>
        <p className='error-message'></p>
      </div>

      <input type={type} placeholder={placeholder} spellCheck={false} required />
    </div>
  );
}

export default Inputs;