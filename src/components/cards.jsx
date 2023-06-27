import React from "react";
import { GiTwoCoins } from "react-icons/gi";
import { getLocalStorage, updateLocalStorage } from "../service/tools";

export const FundsDeposit = () => {
  const walletFunds = getLocalStorage("amountDeposit");

  return (
    <div className="cards">
      {walletFunds?.map((funds, index) => (
        <div className="walletCards">
          <div className="coin">
            <GiTwoCoins />
          </div>
          <div className="funds">
            <h3>{funds?.currencyType}</h3>
            <p>
              $<span>{funds?.amount}</span>
            </p>
            <button>convert</button>
          </div>
        </div>
      ))}
    </div>
  );
};
