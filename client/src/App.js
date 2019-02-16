import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { setCurrentBrandUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";

import Navbar from "./User/components/layout/Navbar";
import Footer from "./User/components/layout/Footer";
import Landing from "./User/components/layout/Landing";
import Login from "./User/components/auth/Login";
import Register from "./User/components/auth/Register";
import Home from "./User/components/home/Home";

import BrandLanding from "./Brand/components/layout/BrandLanding";
import BrandRegister from "./Brand/components/auth/BrandRegister";
import BrandLogin from "./Brand/components/auth/BrandLogin";

import "./App.css";

//Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  // set user and is authenticates
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Clear current Profile
    // store.dispatch(clearCurrentProfile());
    // Redirect to login
    window.location.href = "/login";
  }
}

//Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  // set user and is authenticates
  store.dispatch(setCurrentBrandUser(decoded));
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Register} />

            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/home" component={Home} />

            <Route path="/brands/register" component={BrandRegister} />
            <Route path="/brands/login" component={BrandLogin} />
            <Route path="/brands" component={BrandLanding} />

            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
