import React from "react";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./Product";
import Checkout from "./Checkout";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
function App() {
  const promise = loadStripe
  ('pk_test_51KmaSvSHpz43wWOyyVgOe2VAz3PqNv1CAxjLkbwjTw5h96ov8yvcKvzoeGg3FVaO0LGiqGRCjpF0zK84SvQGldnZ00caG80jTn');
  
  return (
    <Router>
      <div className="App">
        {/* <Header /> */}
        <UserAuthContextProvider>
          <Routes>
            <Route path="/login" exact element={<Login />} />
            <Route path="/signup" exact element={<Signup />} />
            <Route
              path="/payment"
              exact
              element={
                <>
                
                  <Header />
                  <Elements stripe={promise}>

                  <Payment />
                  </Elements>
                </>
              }
            />
            <Route
              path="/checkout"
              exact
              element={
                <>
                  <Header />
                  <Checkout />
                </>
              }
            />
            <Route
              path="/"
              exact
              element={
                <>
                  <Header />
                  <Home />
                </>
              }
            />
          </Routes>
        </UserAuthContextProvider>
      </div>
    </Router>
  );
}

export default App;
