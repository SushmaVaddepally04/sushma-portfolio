import '../styles/education.css';
import collegeLogo from '../assets/college.jpg';
import schoolLogo from '../assets/school.jpg';
import cert1 from '../assets/cert1.pdf';
import cert2 from '../assets/cert2.pdf';

const Education = () => {
  return (
    <div className="education-page">
      {/* Education Section */}
      <div className="education-section">
        <h2 className="section-title">Education</h2>
        <div className="education-timeline">
          <div className="timeline-line" />

          <div className="education-item left slide-up">
            <div className="education-content">
              <img src={collegeLogo} alt="College" className="edu-logo" />
              <h3>Vaagdevi College of Engineering</h3>
              <p>Warangal</p>
              <p>B.Tech in Computer Science Engineering</p>
              <p>(2021 - 2025)</p>
              <a href="https://www.vaagdevi.edu.in/" target="_blank" rel="noopener noreferrer">
                Visit Website
              </a>
            </div>
          </div>

          <div className="education-item right slide-up">
            <div className="education-content">
              <img src={schoolLogo} alt="School" className="edu-logo" />
              <h3>Jawahar Navodaya Vidyalaya</h3>
              <p>Karimnagar</p>
              <p>Intermediate (2019 - 2021)</p>
              <a href="https://navodaya.gov.in/nvs/nvs-school/KARIMNAGAR/en/home/" target="_blank" rel="noopener noreferrer">
                Visit Website
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications Section */}
      <div className="certification-section">
        <h2 className="cert-title">Certifications</h2>
        <div className="cert-grid">
          <a href="https://drive.google.com/file/d/1MT2eJ72i4XXxxAqOi--RpNIqCjwQJE-F/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="cert-card">
            <h4>AWS Cloud Fundamentals</h4>
            <p>By AWS</p>
          </a>
          <a href="https://drive.google.com/file/d/12rhsgIRtIMWDR3KbgcL42Fz_-qFTN1J_/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="cert-card">
            <h4>Responsive Web Design</h4>
            <p>By FreeCodeCamp</p>
          </a>
          <a href="https://drive.google.com/file/d/1MT2eJ72i4XXxxAqOi--RpNIqCjwQJE-F/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="cert-card">
            <h4>Object Oriented Programming in Java</h4>
            <p>By takeUForward</p>
          </a>
          <a href="https://drive.google.com/file/d/12rhsgIRtIMWDR3KbgcL42Fz_-qFTN1J_/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="cert-card">
            <h4>Azure Cloud</h4>
            <p>By Microsoft Azure</p>
          </a>
          {/* Add more certifications here */}
        </div>
      </div>
    </div>
  );
};

export default Education;
