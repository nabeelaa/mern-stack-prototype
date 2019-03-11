import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import classnames from "classnames";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import isEmpty from "../../../_validation/is-empty";

import {
  createProfile,
  getCurrentProfile
} from "../../../_actions/profileActions";

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar: null,
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

    this.props.getCurrentProfile();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }

    if (nextProps.profile.profile) {
      const profile = nextProps.profile.profile;
      profile.location = !isEmpty(profile.location) ? profile.location : "";
      profile.avatar = !isEmpty(profile.avatar) ? profile.avatar : "";
      profile.fullName = !isEmpty(profile.fullName) ? profile.fullName : "";
      profile.creditcardno = !isEmpty(profile.creditcardno)
        ? profile.creditcardno
        : "";
      profile.expiryDate = !isEmpty(profile.expiryDate)
        ? profile.expiryDate
        : "";
      profile.zip = !isEmpty(profile.zip) ? profile.zip : "";

      // Set component fields state
      this.setState({
        location: profile.location,
        avatar: profile.avatar,
        fullName: profile.fullName,
        creditcardno: profile.creditcardno,
        expiryDate: profile.expiryDate,
        zip: profile.zip
      });
    }
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state.location);
    console.log(this.state.avatar);

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
  onChangeFile(e) {
    this.setState({
      [e.target.name]: e.target.files[0]
    });
  }

  render() {
    const { user } = this.props.auth;
    const { errors } = this.state;
    console.log(user);

    return (
      <div className="create-profile">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">
                {user.firstName}'s Profile
              </h1>
              <div className="form-row">
                <div className="form-group col">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    placeholder="First Name"
                    name="firstName"
                    value={user.firstName}
                    disabled
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    placeholder="Last Name"
                    name="lastName"
                    value={user.lastName}
                    disabled
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col">
                  <label htmlFor="firstName">Email</label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    placeholder="Email"
                    name="email"
                    value={user.email}
                    disabled
                  />
                </div>
              </div>

              <form onSubmit={this.onSubmit} encType="multipart/form-data">
                <div className="form-row">
                  <div className="form-group col">
                    <label htmlFor="location">Location</label>
                    <input
                      type="text"
                      className={classnames("form-control form-control-sm", {
                        "is-invalid": errors.location
                      })}
                      placeholder="Location"
                      name="location"
                      value={this.state.location}
                      onChange={this.onChange}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col">
                    <label htmlfor="avatar">Upload your avatar</label>
                    <input
                      className="form-control-file"
                      type="file"
                      placeholder="Avatar"
                      name="avatar"
                      onChange={this.onChange}
                    />
                  </div>
                </div>

                <p className="lead">Please enter your payment details</p>
                <div className="form-row">
                  <div className="form-group col">
                    <label htmlFor="fullName">Full Name</label>
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
                    <label htmlFor="creditcardno">Credit Card No.</label>
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
                    <label htmlFor="creditcardno">Credit Card No.</label>
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
                    <label htmlFor="zip">Zip</label>
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
EditProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: state.profile,
  errors: state.errors,
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { createProfile, getCurrentProfile }
)(withRouter(EditProfile));
