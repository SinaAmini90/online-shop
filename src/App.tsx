import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UserDetailsPage from "./pages/UserDetails";
import NotFound from "./pages/NotFound";
import ProductsList from "./pages/ProductsList";
import "font-awesome/css/font-awesome.min.css";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App flex flex-col justify-between min-h-screen">
        <div className="flex flex-col">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user-details" element={<UserDetailsPage />} />
            <Route path="/products-list" element={<ProductsList />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
