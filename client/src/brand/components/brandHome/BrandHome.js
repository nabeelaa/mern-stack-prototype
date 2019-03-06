import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class BrandHome extends Component {
  componentDidMount() {
    console.log(this.props.auth.isAuthenticatedBrand);
    if (!this.props.auth.isAuthenticatedBrand) {
      this.props.history.push("/");
    }
  }

  render() {
    // const { brand } = this.props.auth;
    return (
      <div>
        <div className="container">
          <div className="jumbotron">
            <p className="lead text-center">
              {" "}
              <b>
                Welcome to the place where you can upload your content for your
                content marketing campaign!
              </b>
              <br />
              <br />
              Upload your images and allow your users to swipe away. Content
              uploads are broken down into 5 sections with 5 slots for content
              in the form of A/B testing. Data will be collected through these
              categories
            </p>
            <div className="row">
              <div class="col text-center">
                <button class="btn btn-success ml-auto">Create Campaign</button>
              </div>
            </div>
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
