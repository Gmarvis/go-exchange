import React, { useContext, useState } from "react";
import "./wallet.css";
import { BsCashCoin } from "react-icons/bs";
import { GiTwoCoins } from "react-icons/gi";
import { CurrencyContext } from "../../utils/context";

export const Wallet = () => {
  const { baseCurrency } = useContext(CurrencyContext);
  console.log("this is the base currency", baseCurrency);
  const [selected, setSelected] = useState("")

  const handleSelect =(e)=>{
    setSelected(e.target.value)
    // alert(selected)
  }

  return (
    <div className="wallet">
      <div className="walletContainer">
        <div className="header">
          <button className="depositeBtn">Deposit</button>
          <h2 className="balance">BALANCE: <span>1000 {selected}</span> </h2>

          <div className="selectCurrency">
            <label htmlFor="currency">
              select currency
              <select name="selectedCurrency" value={selected} onChange={handleSelect}>
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
        <h2>My wallet</h2>

        <div className="walletCards">
          <div className="coin">
            <GiTwoCoins />
          </div>
          <div className="funds">
            <h3>USD</h3>
            <p>
              $<span>10000</span>
            </p>
            <button>convert</button>
          </div>
        </div>
      </div>
    </div>
  );
};
