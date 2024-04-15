import React from 'react';

function Inputs({ type, subject, placeholder, setInfo, info }) {

  function handleChange(type, e) {
    const value =  e.target.value;

    setInfo(prev => {
      const updatedInfo = {
        ...prev,
        step1: {
          ...prev.step1,
          [type]: value
        }
      }
      return updatedInfo;
    })
  }

  return (
    <div className='input'>
      <div className="label-container">
        <label>{subject}</label>
        <p className='error-message'></p>
      </div>

      <input type={type} placeholder={placeholder} spellCheck={false} onChange={(e) => handleChange(type, e)} value={info[0].type ? info[0].type : null} />
    </div>
  );
}

export default Inputs;