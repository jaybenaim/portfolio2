import React from "react";
import PropTypes from "prop-types";
class Welcome extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid-welcome">
          <p className="initial">{this.props.text}</p>
        </div>
      </React.Fragment>
    );
  }
}

Welcome.propTypes = {
  text: PropTypes.string
};
export default Welcome;
