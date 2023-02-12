import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Address from "./components/Address";
import NavigationButton from "./components/NavigationButton";
import Transactions from "./components/Transactions";

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/">
          <h1 className="title"> BTC Info</h1>
        </Link>
        <Routes>
          <Route
            path="/"
            element={
              <div className="navigation-conatiner ">
                <NavigationButton
                  buttonText="Transaction Search"
                  link="/transaction"
                />
                <NavigationButton
                  buttonText="Address Search"
                  link="/address"
                />
              </div>
            }
          ></Route>
          <Route path="/transaction" element={<Transactions />}></Route>
          <Route path="/address" element={<Address />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
