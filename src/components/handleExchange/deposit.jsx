import React, { useContext, useState } from "react";
import { CurrencyContext } from "../../utils/context";

export const DepositForm = () => {
  const { baseCurrency } = useContext(CurrencyContext);
  const [deposit, setDeposit] = useState({
    amount: 0,
    currencyType: "",
  });

  const handleChange = () => {};

  const handleSubmit = () => {};

  return (
    <div>
      <div className="login">
        {/* <h1>Enter Name</h1> */}

        <form action="submit" onSubmit={handleSubmit}>
          <label>
            Deposit
            <input
              type="number"
              name="amount"
              id="amount"
              required
              defaultValue={deposit.amount}
              placeholder="Amount"
              onChange={handleChange}
            />
          </label>
<br />
          <label>
            into
            <select
              name="selectedCurrency"
              // value={selected}
              // onChange={handleSelect}
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
