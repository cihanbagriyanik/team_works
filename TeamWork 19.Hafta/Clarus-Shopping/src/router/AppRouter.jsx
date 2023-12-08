import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import Home from "../pages/Home";
import Basket from "../pages/Basket";
import FiiledBasketTotal from "../components/FiiledBasketTotal";

const AppRouter = () => {
  return (
    <Router>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/fiiledbaskettotal" element={<FiiledBasketTotal />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
