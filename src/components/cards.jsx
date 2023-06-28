import React, { useContext, useState } from "react";
import { GiTwoCoins } from "react-icons/gi";
import { getLocalStorage, updateLocalStorage } from "../service/tools";
import { PopUp } from "./popups/popUp";
import { CurrencyContext } from "../utils/context";

export const FundsDeposit = () => {
  const walletFunds = getLocalStorage("amountDeposit");
  const { baseCurrency } = useContext(CurrencyContext);
  const [showPopUp, setShowPopUp] = useState(false);
  const [popupdata, setPopupData] = useState();

  const [convert, setConvert] = useState({
    amount: 0,
    currencyType: "",
  });

  const handleClick = (funds) => {
    setShowPopUp(true);
    setPopupData(funds);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setConvert((prevConvert) => ({
      ...prevConvert,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.clear();
    console.log(convert);
  };

  return (
    <div>
      <div className="cards">
        {walletFunds?.map((funds, index) => (
          <div className="walletCards">
            <div className="coin">
              <GiTwoCoins />
            </div>
            <div className="funds">
              <h3>
                {funds?.amount} {funds?.currencyType}
              </h3>

              <button onClick={() => handleClick(funds)}>convert</button>
            </div>
          </div>
        ))}
      </div>
      <div>
        <PopUp
          trigger={showPopUp}
          popupdata={popupdata}
          setTrigger={setShowPopUp}
        >
          <div>
            <div className="login">
              <form action="submit" onSubmit={handleSubmit}>
                <label>
                  Convert {popupdata?.currencyType}
                  <input
                    type="number"
                    name="amount"
                    id="amount"
                    required={true}
                    defaultValue={convert.amount}
                    placeholder="Amount"
                    onChange={handleChange}
                  />
                </label>
                <br />
                <label>
                  into
                  <select
                    name="currencyType"
                    defaultValue={convert.currencyType}
                    onChange={handleChange}
                  >
                    {baseCurrency.map((currency) => (
                      <option
                        className="optionIterms"
                        value={baseCurrency.code}
                      >
                        {currency.code}
                      </option>
                    ))}
                  </select>
                </label>

                <button>Done</button>
              </form>
            </div>
          </div>
        </PopUp>
      </div>
    </div>
  );
};
