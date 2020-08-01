import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Saved from "./pages/savedBooks/Saved";
import Books from "./pages/bookSearch/Books";


import "./App.css";

function App() {
  return (
    <Router>
      <div>
      
       
          <Route exact path="/" component={Books} />
          <React exact path="/saved" component ={Saved} />
      
       
      </div>
    </Router>
  );
}

export default App;
