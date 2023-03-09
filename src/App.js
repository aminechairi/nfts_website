import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import Explore from "./Pages/Explore/Explore";

function App() {
  return (
    <BrowserRouter>
      <Routes>    
        <Route path="/" element={<HomePage />} />
        <Route path="/Explore" element={<Explore />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;