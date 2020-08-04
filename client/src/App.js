import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import Navi from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Navi />
        <Route exact path="/" component={Search} />
        <Route exact path="/saved" component={Saved} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
