import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";
import PropTypes from "prop-types";

class PaymentHistory extends Component {
  componentDidMount() {
    console.log(this.props.auth.isAuthenticatedUser);
    if (!this.props.auth.isAuthenticatedUser) {
      this.props.history.push("/");
    }
  }

  render() {
    const { user } = this.props.auth;
    return (
      <div>
        <div className="container">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">
              {user.firstName}'s Payment History
            </h1>
          </div>
          <table class="table table table-striped">
            <thead>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Reference</th>
                <th scope="col">Brand </th>
                <th scope="col">Time of Completion</th>
                <th scope="col">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1/26/2019</th>
                <td>1231231231</td>
                <td>Nike</td>
                <td>1/26/2019</td>
                <td>10$</td>
              </tr>
              <tr>
                <th scope="row">1/26/2019</th>
                <td>1231231231</td>
                <td>McDonalds</td>
                <td>1/26/2019</td>
                <td>7$</td>
              </tr>
              <tr>
                <th scope="row">1/26/2019</th>
                <td>1231231231</td>
                <td>Starbucks</td>
                <td>1/26/2019</td>
                <td>5$</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

// PaymentHistory.propTypes = {
//     profile: PropTypes.object.isRequired,
//     errors: PropTypes.object.isRequired
//   };
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps)(withRouter(PaymentHistory));
