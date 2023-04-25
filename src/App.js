import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePages } from "./pages/home-pages/home-pages";
import { Header } from "./components/header/header/header";
import { ProductPage } from "./pages/product-page/product-page";
import { OrderPage } from "./pages/order/order-page";


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePages />} />
          <Route path="/app/${product.title}" element={<ProductPage />} />
          <Route path="/order" element={<OrderPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

