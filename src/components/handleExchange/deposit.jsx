import React, { useContext, useState } from "react";
import { CurrencyContext } from "../../utils/context";
import { getLocalStorage, updateLocalStorage } from "../../service/tools";

export const DepositForm = () => {
  const { baseCurrency } = useContext(CurrencyContext);
  const [deposit, setDeposit] = useState(
    {
      amount: 0,
      currencyType: "USD",
    },
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDeposit((prevDeposit) => ({
      ...prevDeposit,
      [name]: value,
    }));
  };

  React.useEffect(() => {
    console.clear();
    console.log(deposit)
  }, [deposit])

  console.log(deposit)

  const handleSubmit = (e) => {
    e.preventDefault();
    const prev = getLocalStorage("amountDeposit") || [
      {
        amount: 0,
        currencyType: "USD",
      },

      {
        amount: 0,
        currencyType: "EUR",
      },

      {
        amount: 0,
        currencyType: "XAF",
      },
    ];

    prev.forEach((currency) => {
      if (currency.currencyType === deposit.currencyType) {
        currency.amount = +currency.amount + +deposit.amount;
      }
    });

    updateLocalStorage("amountDeposit", prev);
  };

  return (
    <div>
      <div className="login">
        <form action="submit" onSubmit={handleSubmit}>
          <label>
            Deposit
            <input
              type="number"
              name="amount"
              id="amount"
              required={true}
              defaultValue={deposit.amount}
              placeholder="Amount"
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            into
            <select
              name="currencyType"
              defaultValue={deposit.currencyType}
              onChange={handleChange}
            >
              {baseCurrency.map((currency) => (
                <option className="optionIterms" value={baseCurrency.code}>
                  {currency.code}
                </option>
              ))}
            </select>
          </label>

          <button>Done</button>
        </form>
      </div>
    </div>
  );
};