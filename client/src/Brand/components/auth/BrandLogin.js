import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// import classnames from "classnames";
import { connect } from "react-redux";
import { loginBrandUser } from "../../../actions/authActions";

class BrandLogin extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/brands/brandHome");
    }
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const brandUserData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginBrandUser(brandUserData);
  };

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

                    <div className="form-container">
                      <div className="login">
                        <div className="container">
                          <div className="row">
                            <div className="col-md-12 m-auto">
                              <h2 className="heading text-center">Log In</h2>
                              <p className="lead text-center">
                                New to <b>Hubit</b>? <Link to="/">Sign Up</Link>
                              </p>
                              <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                  <input
                                    type="email"
                                    className="form-control form-control-sm"
                                    placeholder="Email Address"
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.onChange}
                                  />
                                </div>
                                <div className="form-group">
                                  <input
                                    type="password"
                                    className="form-control form-control-sm"
                                    placeholder="Password"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.onChange}
                                  />
                                </div>
                                <input
                                  type="submit"
                                  className="btn btn-info btn-block mt-4"
                                />
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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

BrandLogin.propTypes = {
  loginBrandUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginBrandUser }
)(BrandLogin);
