import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import PropertyDetail from "./pages/PropertyDetail";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";

function App() {
  return (
    <Router>
      <Header />
      <Banner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/property/:id" element={<PropertyDetail />} />
        <Route path="*" element={<NotFound />} />*
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
