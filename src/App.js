import "./App.css";
import { Home } from "./pages/home";
import { Wallet } from "./pages/wallet/wallet";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="wallet" element={<Wallet />} />

    </Routes>
 
  );
}

export default App;
