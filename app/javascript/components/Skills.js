import React from "react";
import PropTypes from "prop-types";
import SkillsProgressMeter from "./SkillsProgressMeter";

class Skills extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="skills-container">
          <p className="skills-heading">
            <strong>Skills</strong>
          </p>
          <table>
            <tbody>
              <tr>
                <td>Python</td>
                <td>JavaScript</td>
                <td>Django</td>
                <td>React</td>
                <td>Bootstrap</td>
                <td>MongoDB</td>
                <td>PostgreSQL</td>
                <td>Jest</td>
              </tr>
              <tr>
                <td>
                  <SkillsProgressMeter text="Python" number="80" />
                </td>
                <td>
                  <SkillsProgressMeter text="JavaScript" number="80" />
                </td>
                <td>
                  <SkillsProgressMeter text="Django" number="70" />
                </td>
                <td>
                  <SkillsProgressMeter text="React" number="80" />
                </td>
                <td>
                  <SkillsProgressMeter text="Bootstrap" number="90" />
                </td>
                <td>
                  <SkillsProgressMeter text="MongoDB" number="70" />
                </td>
                <td>
                  <SkillsProgressMeter text="PostgreSQL" number="80" />
                </td>
                <td>
                  <SkillsProgressMeter text="Jest" number="70" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default Skills;
