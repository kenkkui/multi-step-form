import React from 'react';

function NextBtn({ nextStep }) {
  return (
    <button className='next-btn' onClick={nextStep}>Next Step</button>
  );
}

export default NextBtn;