import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import NavigationButton from "./components/NavigationButton";
import Transactions from "./components/Transactions";

function App() {
  return (
    <Router>
      <div className="App">
        <h1 className="title"> BTC Info</h1>
        <Routes>
          <Route
            path="/"
            element={
              <div className="navigation-conatiner ">
                <NavigationButton
                  buttonText="Transaction Search"
                  link="/link"
                />
                <NavigationButton
                  buttonText="Address Search"
                  link="/transaction"
                />
              </div>
            }
          ></Route>
          <Route path="/transaction" element={<Transactions />}></Route>
          <Route path="/address" element={<div />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
