import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route
  // Switch
} from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./_utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./_actions/authActions";
import { setCurrentBrandUser } from "./_actions/authActions";
import { clearCurrentProfile } from "./_actions/profileActions";
import { Provider } from "react-redux";
import store from "./store";

import Navbar from "./user/components/layout/Navbar";
import Footer from "./user/components/layout/Footer";
// import Landing from "./user/components/layout/Landing";

import Login from "./user/components/auth/Login";
import Register from "./user/components/auth/Register";
import Home from "./user/components/home/Home";

// import BrandLanding from "./brand/components/layout/BrandLanding";
import BrandRegister from "./brand/components/auth/BrandRegister";
import BrandLogin from "./brand/components/auth/BrandLogin";
import BrandHome from "./brand/components/brandHome/BrandHome";

// import PrivateRoute from "./user/components/common/PrivateRoute";

import "./App.css";
import CreateProfile from "./user/components/create-profile/CreateProfile";

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
    // Clear current profile
    store.dispatch(clearCurrentProfile());
    // Redirect to login
    window.location.href = "/login";
  }
}

//Check for Brand user token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  // set user and is authenticated
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
            <Route path="/create-profile" component={CreateProfile} />

            {/* <Route path="/brands" component={BrandLanding} /> */}
            <Route path="/brands/register" component={BrandRegister} />
            <Route path="/brands/login" component={BrandLogin} />
            <Route path="/brands/brandHome" component={BrandHome} />

            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
