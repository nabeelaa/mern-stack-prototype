import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../../_actions/authActions";
import { clearCurrentProfile } from "../../../_actions/profileActions";

class Navbar extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
    window.location.reload();
  };
  render() {
    const { isAuthenticatedUser } = this.props.auth;
    const { isAuthenticatedBrand } = this.props.auth;

    const authLinksUser = (
      <ul className="navbar-nav ml-auto">
        <Link className="nav-link" to="/user/home">
          {" "}
          Profile
        </Link>
        <li className="nav-item">
          <a href={this.href} onClick={this.onLogoutClick} className="nav-link">
            {" "}
            Logout
          </a>
        </li>
      </ul>
    );

    const authLinksBrand = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a href={this.href} onClick={this.onLogoutClick} className="nav-link">
            {" "}
            Logout
          </a>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/brands/register">
            {" "}
            Brands
          </Link>
        </li>
      </ul>
    );

    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
          <div className="container">
            <Link className="navbar-brand" to="/">
              Hubit
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#mobile-nav"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="mobile-nav">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item" />
              </ul>
              {isAuthenticatedUser
                ? authLinksUser
                : isAuthenticatedBrand
                ? authLinksBrand
                : guestLinks}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser, clearCurrentProfile }
)(Navbar);
