import React from "react";
import PropTypes from "prop-types";
import "../../assets/stylesheets/yelpcamp.scss";

class YelpcampSlideshow extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="image-slider">
          <ul className="yelpcamp-slideshow">
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

export default YelpcampSlideshow;
