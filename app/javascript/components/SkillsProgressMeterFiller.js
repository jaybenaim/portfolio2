import React from "react";
import PropTypes from "prop-types";
class SkillsProgressMeterFiller extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div
          className="progress-bar-filler"
          style={{ width: `${this.props.percentage}%` }}
        ></div>
      </React.Fragment>
    );
  }
}

export default SkillsProgressMeterFiller;
