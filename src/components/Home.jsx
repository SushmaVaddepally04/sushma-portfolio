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
              href="https://github.com/SushmaVaddepally04"
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
              href="https://leetcode.com/u/SushmaVaddepally/"
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
          <div className="home-socials">
             <a
            href={resumePdf}
            download
            className="download-resume-btn"
          >
            Download Resume
          </a>
          </div>
        </div>
        <div>
                
            </div>
      </div>

      <div className="skills-section">
        <h3 className="skills-title">What I’m Good At</h3>
        <div className="tech-stack">
        <h4 className="tech-stack-title">Tech Stack</h4>
        <div className="tech-icons">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" />   
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="Spring Boot"/>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
        </div>
      </div>
      <div className="skill-item">
        <div className="skill-img slide-left">
        <img src={devIcon} alt="Full Stack Development Icon" />
        </div>
        <div className="skill-text slide-right">
        <h4>Full Stack Development</h4>
        <p>Building scalable frontend and backend systems using modern technologies.</p>
        </div>
      </div>

      <div className="skill-item">
        <div className="skill-img slide-left">
        <img src={dsaIcon} alt="Problem Solving Icon" />
        </div>
      <div className="skill-text slide-right">
        <h4>Problem Solving</h4>
        <p>Solving algorithmic challenges and optimizing code for performance.</p>
      </div>
    </div>
      </div>
    </div>
  );
};

export default Home;
