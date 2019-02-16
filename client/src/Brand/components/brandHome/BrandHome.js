import React, { Component } from "react";
// import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class BrandHome extends Component {
  componentDidMount() {
    console.log(this.props.auth.isAuthenticated);
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  render() {
    // const { brand } = this.props.auth;
    return (
      <div>
        <div className="container">
          <div className="jumbotron">
            <h1>Home</h1>
            <p>Welcome</p>
          </div>
        </div>
      </div>
    );
  }
}

BrandHome.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(BrandHome);
