import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <section className="components experience" id="experience">
      <h2 id="left-title">
        Experience
        <br />
        <button className="btn">
          <a href="./assets/images/resume.pdf">Resume</a>
        </button>
      </h2>
      <div className="career">
        <ul>
          <li className="job">National Math Consultant</li>
          <li>
            Create and deliver SaaS pre-sales, value-selling presentations
          </li>
          <li>
            Consult and demonstrate software for potential clients with a focus
            on solution selling
          </li>
          <li>
            Create and lead professional development to train partners on the
            software
          </li>
          <li>
            Partner with cross-functional team to meet pre-sales revenue goals
          </li>
          <li>
            Support regional consultants and efforts to build capacity and
            expertise within the company
          </li>
          <li>
            Participate as Keynote Speaker for conventions and conferences
          </li>
          <li>
            Partner with Account Executives and various departments to customize
            sales presentations and solutions resulting in meeting and exceeding
            $100 million sales team goal for two consecutive years
          </li>
        </ul>
        <ul id="center-job">
          <li className="job">Professional Development Manager</li>
          <li>
            Support successful implementation of software for best return on
            investment
          </li>
          <li>Manage a team of regional consultants</li>
          <li>
            Consult and support CEO, Superintendents, and leaders in planning
            roll out of new software
          </li>
          <li>
            Monitor and assess services provided by regional consultants to
            ensure customer satisfaction
          </li>
          <li>
            Support regional consultants with professional growth and goal
            setting
          </li>
          <li>
            Partner with cross-functional team to meet post-sales revenue goals
          </li>
          <li>
            Develop and lead SAAS product and practice based professional
            development in in-person and virtual settings
          </li>
        </ul>
        <ul>
          <li className="job">Account Executive</li>
          <li>Sale SaaS product and curriculum</li>
          <li>Prospect and penetrate white space and new accounts</li>
          <li>Manage accounts, pipeline, and data on Salesforce CRM</li>
          <li>Manage territory and monitor progress towards goal</li>
          <li>
            Post-sales management of current accounts and provide quarterly
            reports showing ROI
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
