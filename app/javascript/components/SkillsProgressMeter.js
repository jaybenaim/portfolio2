import React from "react";
import PropTypes from "prop-types";
import SkillsProgressMeterFiller from "./SkillsProgressMeterFiller";

class SkillsProgressMeter extends React.Component {
  state = {
    percentage: this.props.number
  };
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="progress-bar">
            <SkillsProgressMeterFiller percentage={this.state.percentage} />{" "}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

SkillsProgressMeter.propTypes = {
  text: PropTypes.string,
  number: PropTypes.node
};
export default SkillsProgressMeter;
