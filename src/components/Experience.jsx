import '../styles/experience.css';

const Experience = () => {
  return (
    <div className="experience-container">
      <h2 className="experience-title">My Experience</h2>
      <div className="experience-timeline">

        <div className="experience-item left">
          <div className="experience-content slide-left">
            <h3>Full Stack Developer Intern</h3>
            <h4>Edvedha</h4>
            <p className="duration">Jun 2024 - Nov 2024</p>
            <p>
              Built and maintained full-stack applications using React, SpringBoot.
              Improved UI performance by 25% and collaborated with backend teams to develop scalable APIs.
            </p>
          </div>
        </div>

        {/* <div className="experience-item right">
          <div className="experience-content slide-right">
            <h3>Frontend Developer Intern</h3>
            <h4>XYZ Innovations</h4>
            <p className="duration">Jul 2023 - Dec 2023</p>
            <p>
              Developed responsive interfaces using HTML, CSS, and JavaScript.
              Focused on accessibility and cross-browser compatibility for a better user experience.
            </p>
          </div>
        </div> */}

        {/* Add more experiences here */}
      </div>
    </div>
  );
};

export default Experience;
