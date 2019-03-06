import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  getCurrentProfile
  // deleteAccount
} from "../../../_actions/profileActions";

import Spinner from "../common/Spinner";
import Persona from "../personas/Persona";

class Home extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getCurrentProfile();

    // console.log(this.props.auth.isAuthenticatedUser);
    if (!this.props.auth.isAuthenticatedUser) {
      this.props.history.push("/");
    }
  }

  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;

    let homeContent;
    if (profile === null || loading) {
      homeContent = <Spinner />;
    } else {
      if (Object.keys(profile).length > 0) {
        homeContent = <Persona />;
      } else {
        homeContent = (
          <div>
            <p className="lead text-muted">Welcome {user.name}</p>
            <p>You have not yet setup a profile, please add some info</p>
            <Link to="/create-profile" className="btn btn-lg btn-info">
              Create Profile
            </Link>
          </div>
        );
      }
    }
    return (
      <div className="home">
        <div className="container">
          <div className="row">
            <div className="col-md-12">{homeContent}</div>
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired
  // deleteAccount: PropTypes.func.isRequired,
  // auth: PropTypes.object.isRequired
  // profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getCurrentProfile }
)(Home);
