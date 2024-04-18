import React from 'react';

function Inputs({ type, subject, placeholder, setInfo, info, name }) {

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

      <input autoComplete="on" name={name} type={type} placeholder={placeholder} spellCheck={false} onChange={(e) => handleChange(type, e)} value={info.step1[type]} />
    </div>
  );
}

export default Inputs;