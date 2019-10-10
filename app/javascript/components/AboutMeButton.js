import React from "react";
import PropTypes from "prop-types";
import AboutMe from "./AboutMe";

class AboutMeButton extends React.Component {
  state = {
    showMore: false
  };

  handleShowMore = () => {
    const { showMore } = this.state;
    this.setState({ showMore: !showMore });
  };
  render() {
    const { showMore } = this.state;

    return (
      <React.Fragment>
        <p className="my-story-button" onClick={this.handleShowMore}>
          My Story
        </p>
        {showMore && <AboutMe />}
      </React.Fragment>
    );
  }
}

export default AboutMeButton;
