import React, { useEffect, useState } from 'react';
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
  const [rate, setRate] = useState('');
  useEffect(() => {
    fetch(`https://api.frankfurter.app/latest?from=${from}&to=CZK`)
      .then((response) => response.json())
      .then((data) => {
        setRate(data.rates.CZK);
      });
  }, [from]);

  return (
    <div className="rate">
      <div className="rate__currency">1 {from}</div>
      <div>=</div>
      <div className="rate__value">{rate} CZK</div>
    </div>
  );
};
// Upravte komponentu Rate tak, aby si z API stáhla správný kurz pro měnu, kterou dostane v prop from.
export default Rate;
