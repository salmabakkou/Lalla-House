import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";


// Pages (tu les créeras ensuite)
import Home from "./pages/Home";
import Catalogue from "./pages/Catalogue";
import Wishlist from "./pages/Wishlist";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
