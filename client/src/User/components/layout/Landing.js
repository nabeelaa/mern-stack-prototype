import React, { Component } from "react";

import { BrowserRouter as Router, Route, HashRouter } from "react-router-dom";
import Login from "../auth/Login";
import Register from "../auth/Register";

class Landing extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="landing">
            <div className="dark-overlay landing-inner text-light">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 text-center">
                    <h1 className="display-3 mb-4">Hubit</h1>
                    <p className="lead">
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    {/* <hr />
                      <a
                        href="register.html"
                        className="btn btn-lg btn-info mr-2"
                      >
                        Sign Up
                      </a>
                      <a href="login.html" className="btn btn-lg btn-light">
                        Login
                      </a> */}
                  </div>
                  <div className="col-md-6">
                    <Router />
                    <HashRouter>
                      <div className="form-container">
                        <Route exact path="/" component={Register} />
                        <Route path="/login" component={Login} />
                      </div>
                    </HashRouter>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
