import React from "react";
import PropTypes from "prop-types";
class Welcome extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-lg-4"> </div>
            <div className="col-lg-4">
              <div className="welcome-screen">
                >> JACOB BENAIM <span className="flashing-box">||</span>
              </div>
            </div>
            <div className="col-lg-4"> </div>
          </div>
          {/* <p className="initial">{this.props.text}</p> */}
        </div>
      </React.Fragment>
    );
  }
}

Welcome.propTypes = {
  text: PropTypes.string
};
export default Welcome;
