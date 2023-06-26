import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { Home } from "./pages/home";
import { Wallet } from "./pages/wallet/wallet";
import { Route, Routes } from "react-router-dom";
import { CurrencyContext } from "./utils/context";

const baseUrl =
  "https://api.currencyapi.com/v3/latest?apikey=yxwOCSE37Lu64dfvxhbaSrh8SduHenuI2FFeBArJ";

function App() {
  const [currencies, setCurrencies] = useState(null);
  const [baseCurrency, setBaseCurrency] = useState([]);

  const updateBaseCurrency = (data) => {
    ["USD", "EUR", "XAF"].forEach((cur) => {
      setBaseCurrency((prev) => [...prev, data[`${cur}`]]);
    });
  };

  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setCurrencies(response.data);
      updateBaseCurrency(response.data.data);
    });
  }, []);

  console.log(baseCurrency);

  return (
    <CurrencyContext.Provider value={{ baseCurrency }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="wallet" element={<Wallet />} />
      </Routes>
    </CurrencyContext.Provider>
  );
}

export default App;
