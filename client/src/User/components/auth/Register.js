import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import classnames from "classnames";
import { connect } from "react-redux";
import { registerUser } from "../../../actions/authActions";

class Register extends Component {
  constructor() {
    super();

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      birthDate: "",
      gender: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const newUser = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      phone: this.state.phone,
      birthDate: this.state.birthDate,
      gender: this.state.gender
    };

    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;

    return (
      <div>
        <div className="register">
          <div className="container">
            <div className="row">
              <div className="col-md-12 m-auto">
                <h2 className="heading text-center">Sign Up</h2>
                <p className="lead text-center">
                  Already have a <b>Hubit</b> account?{" "}
                  <Link to="/login">Login</Link>
                </p>
                <form onSubmit={this.onSubmit}>
                  <div className="form-row">
                    <div className="form-group col">
                      <input
                        type="text"
                        className={classnames("form-control form-control-sm", {
                          "is-invalid": errors.firstName
                        })}
                        placeholder="First Name"
                        name="firstName"
                        value={this.state.firstName}
                        onChange={this.onChange}
                      />
                      {errors.firstName && (
                        <div className="invalid-feedback">
                          {errors.firstName}
                        </div>
                      )}
                    </div>

                    <div className="form-group col">
                      <input
                        type="text"
                        className={classnames("form-control form-control-sm", {
                          "is-invalid": errors.lastName
                        })}
                        placeholder="Last Name"
                        name="lastName"
                        value={this.state.lastName}
                        onChange={this.onChange}
                      />
                      {errors.lastName && (
                        <div className="invalid-feedback">
                          {errors.lastName}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="form-group">
                    <input
                      type="email"
                      className={classnames("form-control form-control-sm", {
                        "is-invalid": errors.email
                      })}
                      placeholder="Email Address"
                      name="email"
                      value={this.state.email}
                      onChange={this.onChange}
                    />
                    {errors.email && (
                      <div className="invalid-feedback">{errors.email}</div>
                    )}
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className={classnames("form-control form-control-sm", {
                        "is-invalid": errors.password
                      })}
                      placeholder="Password"
                      name="password"
                      value={this.state.password}
                      onChange={this.onChange}
                    />
                    {errors.password && (
                      <div className="invalid-feedback">{errors.password}</div>
                    )}
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
                    <label htmlFor="phone">Phone</label>
                    <input
                      className={classnames("form-control form-control-sm", {
                        "is-invalid": errors.phone
                      })}
                      type="tel"
                      placeholder="1-(555)-555-5555"
                      name="phone"
                      value={this.state.phone}
                      onChange={this.onChange}
                    />
                    {errors.phone && (
                      <div className="invalid-feedback">{errors.phone}</div>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="birthDate">Birth Date</label>

                    <input
                      className={classnames("form-control form-control-sm", {
                        "is-invalid": errors.birthDate
                      })}
                      type="date"
                      placeholder="2011-08-19"
                      name="birthDate"
                      value={this.state.birthDate}
                      onChange={this.onChange}
                    />
                    {errors.birthDate && (
                      <div className="invalid-feedback">{errors.birthDate}</div>
                    )}
                  </div>
                  <label htmlFor="">Gender</label>
                  <div className="form-group">
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        value="male"
                        onChange={this.onChange}
                      />
                      <label className="form-check-label" htmlFor="male">
                        Male
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        value="female"
                        onChange={this.onChange}
                      />
                      <label className="form-check-label" htmlFor="female">
                        Female
                      </label>
                    </div>
                    {errors.gender && (
                      <div className="invalid-feedback">{errors.gender}</div>
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
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
