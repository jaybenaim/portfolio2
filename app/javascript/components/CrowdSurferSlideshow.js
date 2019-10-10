import React from "react";
import PropTypes, { string } from "prop-types";
import "../../assets/stylesheets/crowdsurfer.scss";

class CrowdSurferSlideshow extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="image-slider">
          <ul className="crowdsurfer-slideshow">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default CrowdSurferSlideshow;
