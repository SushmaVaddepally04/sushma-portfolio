import '../styles/projects.css';

const Projects = () => {
  const projectList = [
    {
      title: 'Online Banking Application',
      description:
        'A secure web-based platform that allows users to manage their bank accounts, transactions debit, credit functionalities.',
      tech: ['React', 'Java','SpringBoot', 'MySQL'],
      github: 'https://github.com/SushmaVaddepally04/Banking-Application',
      demo: '',
    },
    {
      title: 'Expenses Tracker Application',
      description:
        'A responsive CRUD app to manage and track expenses.',
      tech: ['React', 'Java','SpringBoot', 'MySQL'],
      github: 'https://github.com/SushmaVaddepally04/Expenses-Tracker-Application',
      demo: '',
    },
    {
      title: 'SQL Injection Attack Detection',
      description:
        'Detecting the malicious SQL codes using Artificial Neural Network',
      tech: ['MySQL','Python','NLP','AI'],
      github: 'https://github.com/SushmaVaddepally04/SQl-Injection-Attack-Detection',
      demo: '',
    },
  ];

  return (
    <div className="projects-container">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-timeline">
        {projectList.map((proj, idx) => (
          <div
            key={idx}
            className={`project-item ${idx % 2 === 0 ? 'left' : 'right'} slide-up`}
          >
            <div className="project-card">
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
              <p className="tech-stack">
                <strong>Tech:</strong> {proj.tech.join(', ')}
              </p>
              <div className="project-links">
                {proj.github && (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                )}
                {proj.demo && (
                  <a
                    href={proj.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
