import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import Explore from "./Pages/Explore/Explore";
import ItemDetails from "./Pages/ItemDetails/ItemDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>    
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/item-details" element={<ItemDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;