import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import ScrollToTop from "./components/Scroll";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Footer/>
      <ScrollToTop/>
    </div>
  );
}

export default App;
