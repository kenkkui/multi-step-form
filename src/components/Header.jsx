import React from 'react';

const HEADERS = [
  {
    id:"1",
    h1: "Personal info",
    aside: "Please Provide your name, email address, and phone number."
  },
  {
    id:"2",
    h1: "Select your plan",
    aside: "You have the option of monthly or yearly billing."
  },
  {
    id:"3",
    h1: "Pick add-ons",
    aside: "Add-ons help enhance your gaming experience."
  },
  {
    id:"4",
    h1: "Finishing up",
    aside: "Double-check everything looks OK before confirming."
  },
]


function Header({ stepNumber }) {
  return (
    <header>
      <h1>{HEADERS[stepNumber].h1}</h1>
      <aside>{HEADERS[stepNumber].aside}</aside>
    </header>
  );
}

export default Header;