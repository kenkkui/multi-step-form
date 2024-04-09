import React from 'react';

function BackBtn({ backStep }) {
  return (
    <button className='back-btn' onClick={backStep}>Go Back</button>
  );
}

export default BackBtn;