import React from "react";

function Checkbox({
  name,
  aside,
  price,
  isCardSelected,
  onClick,
  amountPeriod,
}) {
  return (
    <div
      className={`card ${isCardSelected ? "active" : ""}`}
      onClick={() => onClick((prev) => !prev)}
    >
      <section className="check-name-wrapper">
        <div className="checkbox-wrapper">
          <label>
            <input
              type="checkbox"
              checked={isCardSelected ? true : false}
              readOnly
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="9"
              viewBox="0 0 12 9"
            >
              <path
                fill="none"
                stroke="#FFF"
                strokeWidth="2"
                d="m1 4 3.433 3.433L10.866 1"
              />
            </svg>
          </label>
        </div>

        <div className="name-container">
          <h1>{name}</h1>
          <aside>{aside}</aside>
        </div>
      </section>

      <div className="billing-price">
        +${price}
        {amountPeriod}
      </div>
    </div>
  );
}

export default Checkbox;
