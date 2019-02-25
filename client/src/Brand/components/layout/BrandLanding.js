import React, { Component } from "react";
import { BrowserRouter as Router, Route, HashRouter } from "react-router-dom";
import BrandLogin from "../auth/BrandLogin";
import BrandRegister from "../auth/BrandRegister";

class BrandLanding extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="landing">
            <div className="dark-overlay landing-inner text-light">
              <div className="container">
                <div className="row">
                  <div className="col-md-8  m-auto">
                    <h1 className="display-5 mb-4 text-center">
                      Welcome Brands!
                    </h1>
                    <p className="lead text-center">
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      tempor incididunt.
                    </p>
                    <Router />
                    <HashRouter>
                      <div className="form-container">
                        <Route exact path="/" component={BrandRegister} />
                        <Route path="/brands/login" component={BrandLogin} />
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

export default BrandLanding;
