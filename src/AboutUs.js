// AboutUs.js
import React from 'react';
import './AboutUs.css';  // Make sure to have your CSS styles imported

const AboutUs = () => {
  // Array of team members
  const teamMembers = [
    // Faculty Coordinator
    { name: 'Dr. Chandra J', role: 'Faculty Coordinator', imgSrc: './img/CM.jpg', linkedIn: 'https://www.linkedin.com/in/dr-chandra-j-98685334/' },
    { name: 'Dr. Tejil J John', role: 'Faculty Coordinator', imgSrc: './img/TS.jpeg', linkedIn: 'https://www.linkedin.com/in/dr-tegil-j-john-1b7a34150/' },

    // Core Team
    { name: 'Himanshu Gulecha', role: 'Core Team', imgSrc: './img/HG.png', linkedIn: 'https://www.linkedin.com/in/himanshugulechha?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' },
    { name: 'Priyansha Upadayay', role: 'Core Team', imgSrc: './img/PU.png', linkedIn: 'https://www.linkedin.com/in/priyansha1306/' },
    { name: 'Satyam Kumar', role: 'Core Team', imgSrc: './img/SK.png', linkedIn: 'https://www.linkedin.com/in/satyamkumar09/' },

    // Frontend Team
    { name: 'Steffi Angel C', role: 'Frontend Developer', imgSrc: './img/steffi.jpg', linkedIn: '#' },
    { name: 'Alex Thompson', role: 'Frontend Developer', imgSrc: './img/alex.jpg', linkedIn: '#' },
    { name: 'Emily Davis', role: 'Frontend Developer', imgSrc: './img/emily.jpg', linkedIn: '#' },

    // Backend Team
    { name: 'Daniel Wilson', role: 'Backend Developer', imgSrc: './img/daniel.jpg', linkedIn: '#' },
    { name: 'Sophia Brown', role: 'Backend Developer', imgSrc: './img/sophia.jpg', linkedIn: '#' },
    { name: 'Ethan White', role: 'Backend Developer', imgSrc: './img/ethan.jpg', linkedIn: '#' },

    // Preprocessing Team
    { name: 'John Smith', role: 'Preprocessing', imgSrc: './img/john_smith.jpg', linkedIn: '#' },
    { name: 'Lily Evans', role: 'Preprocessing', imgSrc: './img/lily.jpg', linkedIn: '#' },
    { name: 'Olivia Martin', role: 'Preprocessing', imgSrc: './img/olivia.jpg', linkedIn: '#' },
    { name: 'Jacob Green', role: 'Preprocessing', imgSrc: './img/jacob.jpg', linkedIn: '#' },
    { name: 'Mia Clark', role: 'Preprocessing', imgSrc: './img/mia.jpg', linkedIn: '#' },
    { name: 'Lucas Carter', role: 'Preprocessing', imgSrc: './img/lucas.jpg', linkedIn: '#' },
    { name: 'John Smith', role: 'Preprocessing', imgSrc: './img/john_smith.jpg', linkedIn: '#' },
    { name: 'Lily Evans', role: 'Preprocessing', imgSrc: './img/lily.jpg', linkedIn: '#' },
    { name: 'Olivia Martin', role: 'Preprocessing', imgSrc: './img/olivia.jpg', linkedIn: '#' },
    { name: 'Jacob Green', role: 'Preprocessing', imgSrc: './img/jacob.jpg', linkedIn: '#' },
    { name: 'Mia Clark', role: 'Preprocessing', imgSrc: './img/mia.jpg', linkedIn: '#' },
    { name: 'Lucas Carter', role: 'Preprocessing', imgSrc: './img/lucas.jpg', linkedIn: '#' },
    // Add more members as needed for Preprocessing

    // Model Implementation Team
    { name: 'Chris Martin', role: 'Model Implementation', imgSrc: './img/chris.jpg', linkedIn: '#' },
    { name: 'Ava Taylor', role: 'Model Implementation', imgSrc: './img/ava.jpg', linkedIn: '#' },
    { name: 'James Wilson', role: 'Model Implementation', imgSrc: './img/james.jpg', linkedIn: '#' },
    { name: 'Chris Martin', role: 'Model Implementation', imgSrc: './img/chris.jpg', linkedIn: '#' },
    { name: 'Ava Taylor', role: 'Model Implementation', imgSrc: './img/ava.jpg', linkedIn: '#' },
    { name: 'James Wilson', role: 'Model Implementation', imgSrc: './img/james.jpg', linkedIn: '#' },
    // Add more members as needed for Model Implementation
  ];

  return (
    <div className="about-page">
      {/* Header Section */}
      <section className="about-header">
        <h1>We are Team ZeROCodeML</h1>
        <p>
          For our ZeROCodeML Website, our team brings together a
          diverse set of skills and expertise, creating a dynamic and effective
          collaboration.
        </p>
      </section>

      <section className="project-overview">
  <div className="image-container">
    <img
      src="./img/PA.jpg"
      alt="Data Protection"
      className="overview-image"
    />
  </div>
  <div className="text-content">
    <p>
      We are students of the M.Sc. in Artificial Intelligence and
      Machine Learning program at Christ University, Bangalore. As part
      of our final year project, we have developed <strong>ZeROCodeML</strong>, a
      smart email classifier designed to enhance email security by
      effectively detecting and filtering spam, phishing, and other
      unwanted emails.
    </p>
    <p>
      Our project is driven by a shared passion for leveraging AI and
      machine learning to solve real-world problems. With the rise of
      cyber threats and the increasing volume of unwanted emails, we
      recognized the need for a solution that could help users maintain
      a safer and more organized inbox.
    </p>
    <p>
      Thank you for taking the time to learn about our project. We look
      forward to contributing further to the field of Artificial
      Intelligence and Machine Learning.
    </p>
  </div>
</section>


      {/* Team Section */}
      <section className="team-section">
        <h2>Our Team</h2>
        
        {/* Faculty Coordinator */}
        <h3>Faculty Coordinator</h3>
        <div className="team-grid">
          {teamMembers.filter(member => member.role.includes('Coordinator')).map((member, index) => (
            <div className="team-member" key={index}>
              <img
                src={member.imgSrc}
                alt={member.name}
                className="member-image"
              />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <a href={member.linkedIn} target="_blank" rel="noopener noreferrer">
                <img src="./img/link.png" alt="LinkedIn" className="linkedin-icon" />
              </a>
            </div>
          ))}
        </div>

        {/* Core Team */}
        <h3>Core Team</h3>
        <div className="team-grid">
          {teamMembers.filter(member => member.role.includes('Core Team')).map((member, index) => (
            <div className="team-member" key={index}>
              <img
                src={member.imgSrc}
                alt={member.name}
                className="member-image"
              />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <a href={member.linkedIn} target="_blank" rel="noopener noreferrer">
                <img src="./img/link.png" alt="LinkedIn" className="linkedin-icon" />
              </a>
            </div>
          ))}
        </div>

        {/* Frontend Team */}
        <h3>Frontend Team</h3>
        <div className="team-grid">
          {teamMembers.filter(member => member.role.includes('Frontend')).map((member, index) => (
            <div className="team-member" key={index}>
              <img
                src={member.imgSrc}
                alt={member.name}
                className="member-image"
              />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <a href={member.linkedIn} target="_blank" rel="noopener noreferrer">
                <img src="./img/link.png" alt="LinkedIn" className="linkedin-icon" />
              </a>
            </div>
          ))}
        </div>

        {/* Backend Team */}
        <h3>Backend Team</h3>
        <div className="team-grid">
          {teamMembers.filter(member => member.role.includes('Backend')).map((member, index) => (
            <div className="team-member" key={index}>
              <img
                src={member.imgSrc}
                alt={member.name}
                className="member-image"
              />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <a href={member.linkedIn} target="_blank" rel="noopener noreferrer">
                <img src="./img/link.png" alt="LinkedIn" className="linkedin-icon" />
              </a>
            </div>
          ))}
        </div>

        {/* Preprocessing Team */}
        <h3>Preprocessing Team</h3>
        <div className="team-grid">
          {teamMembers.filter(member => member.role.includes('Preprocessing')).map((member, index) => (
            <div className="team-member" key={index}>
              <img
                src={member.imgSrc}
                alt={member.name}
                className="member-image"
              />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <a href={member.linkedIn} target="_blank" rel="noopener noreferrer">
                <img src="./img/link.png" alt="LinkedIn" className="linkedin-icon" />
              </a>
            </div>
          ))}
        </div>

        {/* Model Implementation Team */}
        <h3>Model Implementation Team</h3>
        <div className="team-grid">
          {teamMembers.filter(member => member.role.includes('Model Implementation')).map((member, index) => (
            <div className="team-member" key={index}>
              <img
                src={member.imgSrc}
                alt={member.name}
                className="member-image"
              />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <a href={member.linkedIn} target="_blank" rel="noopener noreferrer">
                <img src="./img/link.png" alt="LinkedIn" className="linkedin-icon" />
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
