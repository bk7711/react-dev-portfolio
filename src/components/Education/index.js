import React from "react";
import "./Education.css";

const Education = () => {
  return (
    <section id="education" className="education components">
      <h2>Education</h2>
      <div className="alledu">
        <div className="eachSchool">
          <h3 className="school">Rutgers University, New Jersey</h3>
          <table>
            <tr className="t-row">
              <td className="grad-year">
                <h4>2022</h4>
              </td>
              <td className="grad-title">
                <h4>Certification</h4>
                <p>Full Stack Web Development</p>
              </td>
            </tr>
          </table>
        </div>
        <div className="eachSchool">
          <h3 className="school">National University, California</h3>
          <table className="school-table">
            <tr className="t-row">
              <td className="grad-year">
                <h4>2013</h4>
              </td>
              <td className="grad-title">
                <h4>Master of Education</h4>
                <p>Mathematics Education</p>
              </td>
            </tr>
          </table>
        </div>
        <div className="eachSchool">
          <h3 className="school">California State University, Long Beach</h3>
          <table>
            <tr className="t-row">
              <td className="grad-year">
                <h4>2004</h4>
              </td>
              <td className="grad-title">
                <h4>Bachelor's of Arts</h4>
                <p>Liberal Studies, Mathematics</p>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </section>
  );
};
export default Education;
