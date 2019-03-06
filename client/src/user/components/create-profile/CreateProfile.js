import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import classnames from "classnames";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { createProfile } from "../../../_actions/profileActions";

class CreateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar: "",
      location: "",
      fullName: "",
      creditcardno: "",
      expiryDate: "",
      zip: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    console.log(this.props.auth.isAuthenticatedUser);
    if (!this.props.auth.isAuthenticatedUser) {
      this.props.history.push("/");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const profileData = {
      avatar: this.state.avatar,
      location: this.state.location,
      fullName: this.state.fullName,
      creditcardno: this.state.creditcardno,
      expiryDate: this.state.expiryDate,
      zip: this.state.zip
    };

    this.props.createProfile(profileData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="create-profile">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Create Your Profile</h1>
              <p className="lead text-center">
                Let's get some information to make your profile
              </p>
              <small className="d-block pb-3">* = required fields</small>
              <form onSubmit={this.onSubmit}>
                <div className="form-row">
                  <div className="form-group col">
                    <input
                      type="text"
                      className={classnames("form-control form-control-sm", {
                        "is-invalid": errors.location
                      })}
                      placeholder="* Location"
                      name="location"
                      value={this.state.location}
                      onChange={this.onChange}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col">
                    <input
                      className="form-control form-control-sm"
                      type="text"
                      placeholder="Avatar"
                      name="avatar"
                      value={this.state.avatar}
                      onChange={this.onChange}
                    />
                  </div>
                </div>

                <p className="lead">Please enter your payment details</p>
                <div className="form-row">
                  <div className="form-group col">
                    <input
                      className="form-control form-control-sm"
                      type="text"
                      placeholder="Full Name"
                      name="fullName"
                      value={this.state.fullName}
                      onChange={this.onChange}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col">
                    <input
                      className="form-control form-control-sm"
                      type="text"
                      placeholder="Credit Card No."
                      name="creditcardno"
                      value={this.state.creditcardno}
                      onChange={this.onChange}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col">
                    <input
                      className="form-control form-control-sm"
                      type="date"
                      placeholder="Expiry Date"
                      name="expiryDate"
                      value={this.state.expiryDate}
                      onChange={this.onChange}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col">
                    <input
                      className="form-control form-control-sm"
                      type="text"
                      placeholder="Zip"
                      name="zip"
                      value={this.state.zip}
                      onChange={this.onChange}
                    />
                  </div>
                </div>
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-info btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
CreateProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors,
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { createProfile }
)(withRouter(CreateProfile));
