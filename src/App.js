import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { Home } from "./pages/home";
import { Wallet } from "./pages/wallet/wallet";
import { Route, Routes } from "react-router-dom";

const baseUrl = "https://api.currencyapi.com/v3/latest?apikey=yxwOCSE37Lu64dfvxhbaSrh8SduHenuI2FFeBArJ"



function App() {
  const [currencies, setCurrencies] = useState(null)

  useEffect(()=>{
    axios.get(baseUrl).then((response)=>{
      setCurrencies(response.data)
    });
  },[])

  console.log(currencies);








  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="wallet" element={<Wallet />} />

    </Routes>
 
  );
}

export default App;
