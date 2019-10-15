import React from "react";
import PropTypes from "prop-types";
import { sendAWSEmail } from "./AWS";
import Radium from "radium";

class ContactMe extends React.Component {
  constructor() {
    super();
    this.state = {
      senderEmail: "benaimjacob@gmail.com",
      message: "Test"
    };
  }

  handleChange(attr, event) {
    this.setState({
      [attr]: event.target.value
    });
  }

  sendEmail() {
    const { senderEmail, message } = this.state;

    sendAWSEmail(senderEmail, message);
  }

  render() {
    return (
      <React.Fragment>
        <div style={comStyles().mainview}>
          <form style={comStyles().form}>
            <div className="form-group" style={comStyles().section}>
              <label style={comStyles().formText}>Message</label>
              <input
                value={this.state.message}
                onChange={this.handleChange.bind(this, "message")}
                type="text"
                className="form-control"
                style={comStyles().formInput}
              />
            </div>
            <div style={comStyles().section}>
              <div style={comStyles().senderEmail}>
                Sending message to: {this.state.senderEmail}
              </div>
              <button onClick={this.sendEmail.bind(this)}>Send Email</button>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
export default ContactMe;

const comStyles = () => {
  return {
    mainview: {
      textAlign: "center",
      padding: "20px"
    },
    form: {
      width: "500px",
      margin: "auto",
      "@media (maxWidth: 600px)": {
        width: "90%"
      }
    },
    formText: {
      color: "black",
      fontSize: "1.2rem",
      fontWeight: "bold"
    },
    formInput: {
      fontSize: "1.2rem",
      textAlign: "center",
      backgroundColor: "rgba(0,0,0,0.05)"
    },
    section: {},
    senderEmail: {}
  };
};
