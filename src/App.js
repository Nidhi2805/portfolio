import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: false
  });

  const projects = [
    {
      id: 1,
      title: "Resume AI",
      description: "NLP-powered resume analyzer that evaluates ATS compatibility with 89% accuracy using custom BERT fine-tuning",
      technologies: ["Python", "BERT", "spaCy", "Streamlit"],
      category: "ai",
      link: "https://github.com/Nidhi2805/resume-ai",
      results: [
        "22% better match rates than standard parsers",
        "Processed 100+ resume templates"
      ],
      featured: true
    },
    {
      id: 2,
      title: "DeepFake Detection",
      description: "CNN model detecting manipulated media with 92% accuracy using temporal frame analysis",
      technologies: ["Python", "TensorFlow", "OpenCV"],
      category: "ai",
      link: "https://github.com/Nidhi2805/DeepFake-Detector",
      featured: true
    },
    {
      id: 3,
      title: "E-Commerce Platform",
      description: "Full-stack online store with payment gateway and inventory management",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      category: "web",
      link: "https://github.com/Nidhi2805/ecommerce-store"
    },
    {
      id: 4,
      title: "Admin Dashboard",
      description: "Role-based analytics dashboard with real-time data visualization",
      technologies: ["TypeScript", "React", "Express", "Chart.js"],
      category: "web",
      link: "https://github.com/Nidhi2805/admin-dashboard"
    },
    {
      id: 5,
      title: "GenAI Text Generator",
      description: "Fine-tuned GPT-2 model for domain-specific content generation",
      technologies: ["Python", "HuggingFace", "PyTorch"],
      category: "ai",
      link: "https://github.com/Nidhi2805/GenAI"
    },
    {
      id: 6,
      title: "Spotify Clone",
      description: "Music streaming PWA with audio visualization and playlist management",
      technologies: ["React", "Firebase", "Howler.js"],
      category: "web",
      link: "https://github.com/Nidhi2805/spotify-clone"
    }
  ];

  const skills = [
    { name: "JavaScript", level: 85 },
    { name: "TypeScript", level: 75 },
    { name: "Python", level: 80 },
    { name: "HTML/CSS", level: 90 },
  
    { name: "React", level: 80 },
    { name: "Next.js", level: 65 },
    { name: "Material UI", level: 70 },
    { name: "Chart.js", level: 60 },
  
    { name: "Node.js", level: 75 },
    { name: "Express", level: 70 },
    { name: "Firebase", level: 65 },
  
    { name: "TensorFlow", level: 75 },
    { name: "PyTorch", level: 70 },
    { name: "OpenCV", level: 65 },
    { name: "NLP", level: 70 },
    { name: "HuggingFace", level: 60 },
  
    { name: "MongoDB", level: 70 },
    { name: "Firestore", level: 65 },
  
    { name: "Git/GitHub", level: 85 },
    { name: "Docker", level: 50 },
    { name: "Vercel", level: 75 },
    { name: "Netlify", level: 70 },
  
    { name: "REST APIs", level: 80 },
    { name: "Stripe API", level: 60 }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, success: false, error: false });

    try {
      const response = await fetch('https://formsubmit.co/ajax/nidhikarva2005@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: 'New message from your portfolio'
        })
      });

      const result = await response.json();
      
      if (result.success) {
        setFormStatus({ submitting: false, success: true, error: false });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      setFormStatus({ submitting: false, success: false, error: true });
    }
  };

  return (
    <div className="portfolio">
      <nav className="navbar">
        <ul>
          <li onClick={() => setActiveSection('home')}>Home</li>
          <li onClick={() => setActiveSection('projects')}>Projects</li>
          <li onClick={() => setActiveSection('skills')}>Skills</li>
          <li onClick={() => setActiveSection('about')}>About</li>
          <li onClick={() => setActiveSection('contact')}>Contact</li>
        </ul>
      </nav>

      <main className="content">
        {activeSection === 'home' && (
          <section className="hero">
            <h1>Hi, I'm Nidhi Anand Karva</h1>
            <p>Computer Science Engineering student with a specialization in Data Science | Passionate about Artificial Intelligence, Machine Learning, and Full-Stack Web Development</p>
            <button onClick={() => setActiveSection('projects')}>View My Work</button>
          </section>
        )}

        {activeSection === 'projects' && (
          <section className="projects">
            <h2>My Projects</h2>
            <div className="projects-grid">
              {projects.map(project => (
                <div key={project.id} className="project-card">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tech-tags">
                    {project.technologies.map(tech => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeSection === 'skills' && (
          <section className="skills">
            <h2>My Skills</h2>
            <div className="skills-container">
              {skills.map(skill => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-info">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeSection === 'about' && (
          <section className="about">
          <h2>About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a third-year Computer Science and Engineering student specializing in Data Science, 
                with a strong passion for Artificial Intelligence, Machine Learning, and Web Development. 
                I enjoy solving real-world problems through technology and continuously strive to enhance 
                my technical and analytical skills.
              </p>
              <p>
                I'm actively looking for internship opportunities where I can contribute, grow, 
                and gain hands-on experience by working alongside experienced professionals in the tech industry.
              </p>
              <a href="/Nidhi_Resume_new.pdf" download>Download Resume</a>
            </div>
            <div className="about-image">
              <img src="/Nidhi_photo.jpg" alt="Nidhi" className="placeholder-image" />
            </div>
          </div>
        </section>
        
        )}

{activeSection === 'contact' && (
          {activeSection === 'contact' && (
            <section className="contact">
              <h2>Get In Touch</h2>
              
              {formStatus.success ? (
                <div className="form-success">
                  <h3>Thank You!</h3>
                  <p>Your message has been sent successfully. I'll get back to you soon.</p>
                  <button 
                    onClick={() => setFormStatus({ submitting: false, success: false, error: false })}
                    className="success-btn"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <input 
                    type="hidden" 
                    name="_next" 
                    value="https://portfolio-inky-three-76.vercel.app/" 
                  />
                  <input 
                    type="hidden" 
                    name="_autoresponse" 
                    value="Thank you for contacting me! I've received your message and will get back to you soon." 
                  />
                  
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={formStatus.submitting}
                    className={formStatus.submitting ? 'submitting' : ''}
                  >
                    {formStatus.submitting ? 'Sending...' : 'Send Message'}
                  </button>
                  
                  {formStatus.error && (
                    <p className="form-error">
                      Oops! Something went wrong. Please try again or contact me directly at nidhikarva2005@gmail.com
                    </p>
                  )}
                </form>
              )}
              
              <div className="social-links">
                <a href="https://www.linkedin.com/in/nidhikarva" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
                <a href="https://github.com/Nidhi2805" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <a href="mailto:nidhikarva2005@gmail.com">
                  Email
                </a>
              </div>
            </section>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} Nidhi Anand Karva. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;