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
          <Image src={SafranLogo} />
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
          validation and approval of KPI's before officialization and release
          for executive levels.
        </p>
      </div>
      <div>
        <div className="StandardPhoto">
          <Image src={BBRRLogo} />
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
          <Image src={SPGLogo} />
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
        <b>Milestones</b>
        <ul>
          <li>
            Implementation and On-Site management of IQMS/DELMIAWorks ERP
            System.
          </li>
          <li>
            Implementation and On-Site management of IQMS/DELMIAWorks ERP
            System.
          </li>
          <li>On-Site IT Department establishment</li>
        </ul>
      </div>
      <div className="PageBlock">
        <div className="StandardPhoto">
          <Image src={SPGLogo} />
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
          As an Business Process Analyst my main activities are related to the
          data management and analysis, development of BI Reports and
          Dashboards, automatization and improvement of current processes and
          validation and approval of KPI's before officialization and release
          for executive levels.
        </p>
      </div>
      <div className="PageBlock">
        <div className="StandardPhoto">
          <Image src={SPGLogo} />
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
          As an Business Process Analyst my main activities are related to the
          data management and analysis, development of BI Reports and
          Dashboards, automatization and improvement of current processes and
          validation and approval of KPI's before officialization and release
          for executive levels.
        </p>
      </div>
    </div>
  );
};

export default ProfessionalCareer;
