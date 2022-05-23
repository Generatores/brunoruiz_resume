import Image from "next/image";

import SafranLogo from "assets/safran_logo.png";
import BBRRLogo from "assets/bbrr_logo.png";
import SPGLogo from "assets/Spectrum_Plastics_Group_Logo.png";

const ProfessionalCareer = () => {
  return (
    <div className="Body">
      <h2>My Professional Career</h2>
      <a href="/Bruno-Ruiz-Resume.pdf" download>
        {" "}
        Get Resume
      </a>
      <div className="PageBlock">
        <div className="StandardPhoto">
          <Image src={SafranLogo} alt="Safran Logo" />
        </div>
        <h3>Safran Electronics and Defense - Business Process Analyst</h3>
        <p>
          <b>Company: </b>Safran Electronics and Defense
        </p>
        <p>
          <b>From</b> November 2022 - <b>To</b> Present
        </p>
        <b>Main Activities</b>
        <p>
          As a <b>Business Process Analyst</b> my main activities are related to
          the data management and analysis, development of BI Reports and
          Dashboards, automatization and improvement of current processes and
          validation and approval of KPI&apos;s before officialization and
          release for executive levels.
        </p>
      </div>
      <div>
        <div className="StandardPhoto">
          <Image src={BBRRLogo} alt="BBRR Solutions Logo" />
        </div>
        <h3>BBRR Solutions - CEO/Owner</h3>
        <p>
          <b>Company: </b>BBRR Solutions
        </p>
        <p>
          <b>From</b> December 2020 - <b>To</b> Present
        </p>
        <b>Main Activities</b>
        <p>
          BBRR Solutions is the professional name for my projects and activities
          related to the Business Development, Data Analysis and Business
          Intelligence services to the world. For additional information of BBRR
          Solutions please visit us at{" "}
          <a href="https://www.bbrr.solutions">www.bbrr.solutions</a>
        </p>
      </div>
      <div className="PageBlock">
        <div className="StandardPhoto">
          <Image src={SPGLogo} alt="SPG Logo" />
        </div>
        <h3>Spectrum Plastics Group - Business Systems Analyst</h3>
        <p>
          <b>Company: </b>Spectrum Plastics Group
        </p>
        <p>
          <b>From</b> November 2019 - <b>To</b> November 2022
        </p>
        <b>Main Activities</b>
        <p>
          As a Business Systems Analyst were related to the implementation,
          management and troubleshooting of all softwares used by the Mexicali
          Site.
        </p>
        <p>
          During my time as a Business Systems Analyst I was in charge of the
          On-Site tracking and implementation of the IQMS/DELMIAWorks ERP
          System, taking the lead on on the transition from the old
          software/files, data migration and business process definition.
        </p>
        <p>
          From the ERP Implementation, I gather the business needs from each
          department and based on the functional specs provided I plan the
          safest way to implement each system module and new procedure.
        </p>
        <p>
          In addition, as part of the knowledge of the ERP features and
          workflows I took part on the evaluation of massive updates with a main
          focus on financial or operational impact outside the IT scope. Such as
          projections on inventory devaluation, supply chain and financial
          projections.
        </p>
        <b>Milestones</b>
        <ul>
          <li>
            Implementation and On-Site management of IQMS/DELMIAWorks ERP
            System.
          </li>
          <li>On-Site IT Department establishment</li>
          <li>Integration of ERP System with Tax Software.</li>
          <li>
            Implementation of SPC software and Real Time Laser Measuring
            Equipment (Zumbach).
          </li>
        </ul>
      </div>
      <div className="PageBlock">
        <div className="StandardPhoto">
          <Image src={SPGLogo} alt="SPG Logo" />
        </div>
        <h3>Spectrum Plastics Group - Jr. Extrusion Engineer</h3>
        <p>
          <b>Company: </b>Spectrum Plastics Group
        </p>
        <p>
          <b>From</b> April 2019 - <b>To</b> November 2019
        </p>
        <b>Main Activities</b>
        <p>
          As a Jr. Extrusion Engineer my main activities were related to the
          analysis and definition of process parameters for the Extrusion
          Process. Design of staging procedures and packing instructions,
          validation of new products, materials and process parameters took
          place on my day-to-day activities.
        </p>
      </div>
      <div className="PageBlock">
        <div className="StandardPhoto">
          <Image src={SPGLogo} alt="SPG Logo" />
        </div>
        <h3>Spectrum Plastics Group - Engineering Intern</h3>
        <p>
          <b>Company: </b>Spectrum Plastics Group
        </p>
        <p>
          <b>From</b> October 2018 - <b>To</b> April 2019
        </p>
        <b>Main Activities</b>
        <p>
          As an Engineering Inter my main activities were the correction of
          Setup Sheets based on the feedback of process owners and data
          recovered from historical data.
        </p>
      </div>
    </div>
  );
};

export default ProfessionalCareer;
