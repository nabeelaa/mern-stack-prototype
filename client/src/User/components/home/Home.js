import React, { Component } from "react";
// import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Home extends Component {
  componentDidMount() {
    console.log(this.props.auth.isAuthenticated);
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  render() {
    const { user } = this.props.auth;
    return (
      <div>
        <div className="container">
          <div class="jumbotron">
            <h1>Home</h1>
            <p>Welcome, {user.firstName}</p>
            {/* <div class="row w-150  m-auto">
              <div class="col-md-2 offset-md-1 ">
                <div class="text-info text-center">
                  <h4>Media Consumption</h4>
                </div>
              </div>
              <div class="col-md-2">
                <div class="text-danger text-center mt-3">
                  <h4>Emotion</h4>
                </div>
              </div>
              <div class="col-md-2">
                <div class="text-success text-center mt-3">
                  <h4>Personality</h4>
                </div>
              </div>
              <div class="col-md-2">
                <div class="text-warning text-center mt-3">
                  <h4>Social Media</h4>
                </div>
              </div>
              <div class="col-md-2">
                <div class="text-default text-center mt-3">
                  <h4>Culture</h4>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  // getCurrentProfile: PropTypes.func.isRequired,
  // deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
  // profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Home);
