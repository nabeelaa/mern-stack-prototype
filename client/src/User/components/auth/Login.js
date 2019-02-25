import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import classnames from "classnames";
import { connect } from "react-redux";
import { loginUser } from "../../../_actions/authActions";

class Login extends Component {
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
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/home");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/home");
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
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;
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
                  </div>
                  <div className="col-md-6">
                    <div className="form-container">
                      <div className="login">
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
                                  className={classnames(
                                    "form-control form-control-sm",
                                    {
                                      "is-invalid": errors.email
                                    }
                                  )}
                                  placeholder="Email Address"
                                  name="email"
                                  value={this.state.email}
                                  onChange={this.onChange}
                                />
                                {errors.email && (
                                  <div className="invalid-feedback">
                                    {errors.email}
                                  </div>
                                )}
                              </div>
                              <div className="form-group">
                                <input
                                  type="password"
                                  className={classnames(
                                    "form-control form-control-sm",
                                    {
                                      "is-invalid": errors.password
                                    }
                                  )}
                                  placeholder="Password"
                                  name="password"
                                  value={this.state.password}
                                  onChange={this.onChange}
                                />
                                {errors.password && (
                                  <div className="invalid-feedback">
                                    {errors.password}
                                  </div>
                                )}
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
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
