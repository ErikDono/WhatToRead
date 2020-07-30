import React, { useState, useEffect } from "react";
import API from "./api/api";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [user, setUser] = useState({});

  useEffect(async () => {
    API.getAll().then((res) => {
      console.log(res);
      setUser(res.data);
    });
  }, []);

  const submit = async () => {
    return await API.postAll();
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
