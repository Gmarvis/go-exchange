import React, { useContext, useState } from "react";
import "./wallet.css";
import { CurrencyContext } from "../../utils/context";
import { DepositForm } from "../../components/handleExchange/deposit";
import { PopUp } from "../../components/popups/popUp";
import { FundsDeposit } from "../../components/cards";
import { SiMoneygram } from "react-icons/si";

export const Wallet = () => {
  const { baseCurrency } = useContext(CurrencyContext);
  const [selected, setSelected] = useState("");
  const [showPopUp, setShowPopUp] = useState(false);

  console.log(baseCurrency)

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

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
          <h2 className="balance">
            BALANCE: <span>1000 {selected}</span>{" "}
          </h2>

          <div className="selectCurrency">
            <label htmlFor="currency">
              select currency
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
        <h2 className="text-center">My wallet</h2>

        <FundsDeposit />
      </div>
    </div>
  );
};
