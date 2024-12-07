import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  const teamMembers = [
    {
      name: 'Samson Sabu',
      role: 'Developer',
      imgSrc: './img/samson.jpg',
      linkedIn: '#',
    },
    {
      name: 'Aleena Varghese',
      role: 'Developer',
      imgSrc: './img/aleena.jpg',
      linkedIn: '#',
    },
    {
      name: 'Steffi Angel C',
      role: 'Developer',
      imgSrc: './img/steffi.jpg',
      linkedIn: '#',
    },
    {
      name: 'Dr. Gobi Ramasamy',
      role: 'Project Guide',
      imgSrc: './img/gobi.jpg',
      linkedIn: '#',
    },
  ];

  return (
    <div className="about-page">
      {/* Header Section */}
      <section className="about-header">
        <h1>We are Team SAS</h1>
        <p>
          For our Smart Email Classifier project, our team brings together a
          diverse set of skills and expertise, creating a dynamic and effective
          collaboration.
        </p>
      </section>

      {/* Project Overview Section */}
      <section className="project-overview">
        <div className="overview-content">
          <div className="image-container">
            <img
              src="./img/data-protection.jpg"
              alt="Data Protection"
              className="overview-image"
            />
          </div>
          <div className="text-content">
            <p>
              We are students of the M.Sc. in Artificial Intelligence and
              Machine Learning program at Christ University, Bangalore. As part
              of our final year project, we have developed <strong>SpamShield</strong>, a
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
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2>Our Team</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div className="team-member" key={index}>
              <img
                src={member.imgSrc}
                alt={member.name}
                className="member-image"
              />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <a href={member.linkedIn} target="_blank" rel="noopener noreferrer">
                <img src="./img/linkedin.png" alt="LinkedIn" className="linkedin-icon" />
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
