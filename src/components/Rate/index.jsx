import React from 'react';
import './style.css';

const currencies = {
  USD: { CZK: 23.823 },
  EUR: { CZK: 24.74 },
  GBP: { CZK: 29.067 },
};

// currencies.USD;
// currencies["USD"]; toto znamená to samý to vejš
// from = "USD"
// currencies[from]

const Rate = ({ from }) => {
  return (
    <div className="rate">
      <div className="rate__currency">1 {from}</div>
      <div>=</div>
      <div className="rate__value">{currencies[from].CZK} CZK</div>
    </div>
  );
};
// Upravte komponentu Rate tak, aby zobrazila správný kurz podle připravných dat v objektu currencies. Výslední kurz zobrazte v elementu .rate__value.
export default Rate;
