import profileImg from '../assets/sush.jpg';
import resumePdf from '../assets/Sushma-Vaddepally.pdf';
import devIcon from '../assets/development.jpg';
import dsaIcon from '../assets/dsa.jpg';
import '../styles/home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="profile-pic-wrapper">
          <img
            src={profileImg}
            alt="Profile"
            className="profile-pic"
          />
        </div>

        <div className="home-text">
          <h2 className="home-title">Hi, I'm Sushma Vaddepally</h2>
          <p className="home-description">
            A passionate Full Stack Developer who loves building modern web applications with clean UI, efficient backend, and real-world impact.
          </p>
          {/* Social Links Section */}
          <div className="home-socials">
            <a
              href="https://github.com/SushmaVaddepally"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                alt="GitHub"
              />
            </a>
            <a
              href="https://leetcode.com/sushma_v/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
                alt="LeetCode"
              />
            </a>
          </div>
            <div>
                <a
            href={resumePdf}
            download
            className="download-resume-btn"
          >
            Download Resume
          </a>
            </div>
          
        </div>
      </div>

      <div className="skills-section">
        <h3 className="skills-title">What I’m Good At</h3>
        <div className="skills-timeline">
          <div className="skill-item left">
            <div className="skill-img slide-left">
              <img src={devIcon} alt="Development" />
            </div>
            <div className="skill-text slide-right">
              <h4>Full Stack Development</h4>
              <p>Building scalable frontend and backend systems using modern technologies.</p>
            </div>
          </div>

          <div className="skill-item right">
            <div className="skill-img slide-left">
              <img src={dsaIcon} alt="DSA" />
            </div>
            <div className="skill-text slide-right">
              <h4>Problem Solving</h4>
              <p>Solving algorithmic challenges and optimizing code for performance.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
