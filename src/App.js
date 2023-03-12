import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import Explore from "./Pages/Explore/Explore";
import ItemDetails from "./Pages/ItemDetails/ItemDetails";
import CreateItem from "./Pages/CreateItem/CreateItem";
import ConnectWallet from "./Pages/ConnectWallet.js/ConnectWallet";
import Support from "./Pages/Support/Support";
import Signin from "./Pages/Signin/Signin";

function App() {
  return (
    <BrowserRouter>
      <Routes>    
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/item-details" element={<ItemDetails />} />
        <Route path="/create-item" element={<CreateItem />} />
        <Route path="/connect-wallet" element={<ConnectWallet />} />
        <Route path="/support" element={<Support />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;