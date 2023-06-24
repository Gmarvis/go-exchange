import React from "react";
import "./wallet.css";
import { BsCashCoin } from "react-icons/bs";
import { GiTwoCoins } from "react-icons/gi";



export const Wallet = () => {
  const selectCurency = [
    {
      label: "USD",
      name: "USD",
    },
    {
      label: "EUR",
      name: "EUR",
    },
    {
      label: "XAF",
      name: "XAF",
    },
  ];

  return (
    <div className="wallet">
      <div className="walletContainer">
        <div className="header">
          <button className="depositeBtn">Deposit</button>
          <h2 className="balance">BALANCE: $</h2>

          <div className="selectCurrency">
            <label htmlFor="currency">select currency</label>
            <select>
              {selectCurency.map((currency) => (
                <option className="optionIterms" value={selectCurency.name}>
                  {currency.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>


      <div className="exchangeSection">
        <h2>My wallet</h2>

<div className="walletCards">
  <div className="coin">
    <GiTwoCoins />
  </div>
  <div className="funds">
    <h3>USD</h3>
    <p>$<span>10000</span></p>
    <button>convert</button>
  </div>
</div>

      </div>
    </div>
  );
};
