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
          <div className="jumbotron">
            <h1 className="mb-4 text-center">
              Welcome to our Brand Evaluator Page!
            </h1>
            <p className="lead text-center">
              {" "}
              Please fill up your profile to get matched to more brands
            </p>

            <div className="row">
              <div className="col-sm-1" />
              <div className="box col-lg-2 col-md-2  col-sm-12 col-xs-12 ">
                <div className="box-part text-center">
                  <i class="fa fa-film" />

                  <div className="text">
                    <p>Media</p>
                  </div>
                  <a href="#">
                    <span />
                  </a>
                </div>
              </div>

              <div className="box col-lg-2 col-md-2 col-sm-12 col-xs-12">
                <div className="box-part text-center">
                  <i class="fa fa-heart" />
                  <div className="text">
                    <p>Emotion</p>
                  </div>
                  <a href="#">
                    <span />
                  </a>
                </div>
              </div>

              <div className="box col-lg-2 col-md-2 col-sm-12 col-xs-12">
                <div className="box-part text-center">
                  <i class="fa fa-user" />
                  <div className="text">
                    <p>Personality</p>
                  </div>
                  <a href="#">
                    <span />
                  </a>
                </div>
              </div>

              <div className="box col-lg-2 col-md-2 col-sm-12 col-xs-12">
                <div className="box-part text-center">
                  <i class="fa fa-comments" />
                  <div className="text">
                    <p>Messaging</p>
                  </div>
                  <a href="#">
                    <span />
                  </a>
                </div>
              </div>

              <div className="box col-lg-2 col-md-2 col-sm-12 col-xs-12">
                <div className="box-part text-center">
                  <i class="fa fa-theater-masks" />
                  <div className="text">
                    <p>Influence</p>
                  </div>
                  <a href="#">
                    <span />
                  </a>
                </div>
              </div>
            </div>
            <hr />

            <p className="lead text-center">
              {" "}
              Select which brand’s content marketing campaign you’d like to
              Hubit! <br />
              You have 1 hour to complete but can exit at anytime, your work
              will be saved.
            </p>

            <div class="row">
              <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                <div class="box-part text-center">
                  <div class="title">
                    <h4>Nike</h4>
                  </div>

                  <div class="text">
                    <span>
                      Lorem ipsum dolor sit amet, id quo eruditi eloquentiam.
                      Assum decore te sed. Elitr scripta ocurreret qui ad.
                    </span>
                  </div>

                  <a href="#">Evaluate for 10$</a>
                </div>
              </div>

              <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                <div class="box-part text-center">
                  <div class="title">
                    <h4>Starbucks</h4>
                  </div>
                  <div class="text">
                    <span>
                      Lorem ipsum dolor sit amet, id quo eruditi eloquentiam.
                      Assum decore te sed. Elitr scripta ocurreret qui ad.
                    </span>
                  </div>

                  <a href="#">Evaluate for 10$</a>
                </div>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                <div class="box-part text-center">
                  <div class="title">
                    <h4>El Pollo Loco</h4>
                  </div>
                  <div class="text">
                    <span>
                      Lorem ipsum dolor sit amet, id quo eruditi eloquentiam.
                      Assum decore te sed. Elitr scripta ocurreret qui ad.
                    </span>
                  </div>
                  <a href="#">Evaluate for 10$</a>
                </div>
              </div>
            </div>
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
