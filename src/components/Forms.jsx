import React from 'react';
import "./Forms.css"


function Forms({ children }) {
  return (
    <section id="form-page">
      <section className='form-content'>
        {children}
      </section>
    </section>
  );
}

export default Forms;