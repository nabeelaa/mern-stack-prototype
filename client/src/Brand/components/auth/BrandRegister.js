import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { registerBrand } from "../../../actions/authActions";

class BrandRegister extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      occupation: "",
      email: "",
      phone: "",
      password: "",
      organization: "",
      address: "",
      accomplish: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const newBrand = {
      name: this.state.name,
      occupation: this.state.occupation,
      email: this.state.email,
      password: this.state.password,
      phone: this.state.phone,
      organization: this.state.organization,
      address: this.state.address,
      accomplish: this.state.accomplish
    };

    this.props.registerBrand(newBrand, this.props.history);
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
                    {/* <p className="lead text-center">
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      tempor incididunt.
                    </p> */}

                    <div className="form-container">
                      <div className="register">
                        <div className="container">
                          <div className="row">
                            <div className="col-md-12 m-auto">
                              <h2 className="heading text-center">Sign Up</h2>
                              <p className="lead text-center">
                                Already have a <b>Hubit</b> account?{" "}
                                <Link to="/brands/login">Login</Link>
                              </p>
                              <form onSubmit={this.onSubmit}>
                                <div className="form-row">
                                  <div className="form-group col">
                                    <input
                                      type="text"
                                      className="form-control form-control-sm"
                                      placeholder="Name"
                                      name="name"
                                      value={this.state.name}
                                      onChange={this.onChange}
                                      required
                                    />
                                  </div>
                                  <div className="form-group col">
                                    <input
                                      type="text"
                                      className="form-control form-control-sm"
                                      placeholder="Occupation"
                                      name="occupation"
                                      value={this.state.occupation}
                                      onChange={this.onChange}
                                      required
                                    />
                                  </div>
                                </div>

                                <div className="form-group">
                                  <input
                                    type="email"
                                    className="form-control form-control-sm"
                                    placeholder="Email Address"
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.onChange}
                                    required
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
                                    required
                                  />
                                </div>
                                {/* <div className="form-group">
                    <input
                      type="password"
                      className="form-control form-control-sm"
                      placeholder="Confirm Password"
                      name="password2"
                    />
                  </div> */}
                                <div className="form-group">
                                  <input
                                    className="form-control form-control-sm"
                                    type="tel"
                                    placeholder="Phone: 1-(555)-555-5555"
                                    name="phone"
                                    value={this.state.phone}
                                    onChange={this.onChange}
                                    required
                                  />
                                </div>
                                <div className="form-group">
                                  {/* <label htmlFor="organization">Organization</label> */}

                                  <input
                                    className="form-control form-control-sm"
                                    type="text"
                                    name="organization"
                                    placeholder="Organization"
                                    value={this.state.organization}
                                    onChange={this.onChange}
                                    required
                                  />
                                </div>

                                <div className="form-group">
                                  {/* <label htmlFor="address">Address</label> */}

                                  <input
                                    className="form-control form-control-sm"
                                    type="text"
                                    name="address"
                                    placeholder="Address"
                                    value={this.state.address}
                                    onChange={this.onChange}
                                    required
                                  />
                                </div>

                                <div className="form-group">
                                  {/* <label htmlFor="address">
                      What would you like to accomplish?
                    </label> */}

                                  <input
                                    className="form-control form-control-sm"
                                    type="textarea"
                                    name="accomplish"
                                    placeholder="What would you like to accomplish?"
                                    value={this.state.accomplish}
                                    onChange={this.onChange}
                                    required
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

BrandRegister.propTypes = {
  registerBrand: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
  // errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { registerBrand }
)(withRouter(BrandRegister));
