import React from "react";
import PropTypes from "prop-types";
import SkillsProgressMeter from "./SkillsProgressMeter";

class Skills extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="skills-container">
          <p className="skills-heading"></p>
          <table>
            <thead>
              <tr>
                <th colSpan="4">
                  <strong className="skills-heading">Skills</strong>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Python</th>
                <th>JavaScript</th>
                <th>Django</th>
                <th>React</th>
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
              </tr>
              <tr>
                <th>Bootstrap</th>
                <th>MongoDB</th>
                <th>PostgreSQL</th>
                <th>Jest</th>
              </tr>
              <tr>
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
