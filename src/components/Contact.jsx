import '../styles/contact.css';

const Contact = () => {
  return (
    <div className='bgcol'>
    <div className="contact-container">
      <h2 className="contact-title">Get In Touch</h2>

      <form
        className="contact-form"
        action="mailto:sushmavaddepally84@gmail.com"
        method="POST"
        encType="text/plain"
      >
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>

      <div className="social-links">
        <a
          href="https://github.com/SushmaVaddepally04"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            alt="GitHub"
            className="social-icon"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/sushma-vaddepally-81709525a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
            alt="LinkedIn"
            className="social-icon"
          />
        </a>
        <a
          href="mailto:sushmavaddepally84@gmail.com"
          target="mailto:sushmavaddepally84@gmail.com"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/561/561127.png"
            alt="Email"
            className="social-icon"
          />
        </a>
      </div>
    </div>
    </div>
  );
};

export default Contact;
