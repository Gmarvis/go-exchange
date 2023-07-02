import React, { useContext, useState } from "react";
import "./wallet.css";
import { CurrencyContext } from "../../utils/context";
import { DepositForm } from "../../components/handleExchange/deposit";
import { PopUp } from "../../components/popups/popUp";
import { FundsDeposit } from "../../components/cards";
import { getLocalStorage, updateLocalStorage } from "../../service/tools";
// import { SiMoneygram } from "react-icons/si";

export const Wallet = () => {
  const { baseCurrency } = useContext(CurrencyContext);
  const [selected, setSelected] = useState("USD");
  const [showPopUp, setShowPopUp] = useState(false);
  const walletName = localStorage.getItem("user");
  const walletFunds = getLocalStorage("amountDeposit");

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  // handle wallet's total balance
  const balance = () => {
    // find base currency
    let valTo = baseCurrency?.find((cur) => {
      if (cur.code === selected) {
        return cur?.value;
      }
    });
    valTo = valTo?.value;
    console.log("value to", valTo);

    // values to be converted from
    let valFrom = baseCurrency?.filter((curren) => curren.code !== selected);

    // amoount to be converted to
    let amountTo = walletFunds?.find((fund) => {
      if (fund.currencyType === selected) {
        return fund.amount;
      }
    });
    amountTo = amountTo?.amount;

    console.log("amountTO", amountTo);

    // amount to be converted from
    let amountsFrom = walletFunds.filter(
      (currency) => currency.currencyType !== selected
    );

    console.log("amounts from", amountsFrom);

    // sum currency logic
    console.clear();
    console.log("value to=", valTo);
    console.log("value from=", valFrom);
    console.log("amount to=", amountTo);
    console.log("amount from=", amountsFrom);
  };
  balance();

  return (
    <div className="wallet">
      <div className="walletContainer">
        <div className="header">
          <button onClick={() => setShowPopUp(true)} className="depositeBtn">
            Deposit
          </button>

          <PopUp trigger={showPopUp} setTrigger={setShowPopUp}>
            <DepositForm />
          </PopUp>
          <div className="balance">
            <span>10000 {selected}</span>
          </div>

          <div className="selectCurrency">
            <label htmlFor="currency">
              {/* select currency */}
              <select
                name="selectedCurrency"
                value={selected}
                onChange={handleSelect}
              >
                {baseCurrency.map((currency) => (
                  <option className="optionIterms" value={baseCurrency.code}>
                    {currency.code}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>
      </div>

      <div className="exchangeSection">
        <h2 className="text-center">wallet Name: {walletName}</h2>
        <FundsDeposit />
      </div>
    </div>
  );
};
