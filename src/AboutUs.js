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
    { name: 'Himanshu Gulecha', role: 'Core Team', imgSrc: './img/1.png', linkedIn: 'https://www.linkedin.com/in/himanshugulechha?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' },
    { name: 'Priyansha Upadhyay', role: 'Core Team', imgSrc: './img/2.png', linkedIn: 'https://www.linkedin.com/in/priyansha1306/' },
    { name: 'Satyam Kumar', role: 'Core Team', imgSrc: './img/3.png', linkedIn: 'https://www.linkedin.com/in/satyamkumar09/' },

    // Frontend Team
    { name: 'Aleena Varghese', role: 'Frontend Developer', imgSrc: './img/4.png', linkedIn: '#' },
    { name: 'Sanin Zulphi', role: 'Frontend Developer', imgSrc: './img/5.png', linkedIn: '#' },
    { name: 'Sneha P', role: 'Frontend Developer', imgSrc: './img/6.png', linkedIn: '#' },

    // Backend Team
    { name: 'Badrinarayanan S', role: 'Backend Developer', imgSrc: './img/7.png', linkedIn: '#' },
    { name: 'Kiran Basil Varghese', role: 'Backend Developer', imgSrc: './img/8.png', linkedIn: '#' },
    { name: 'Kripa Mary Jose', role: 'Backend Developer', imgSrc: './img/9.png', linkedIn: '#' },

    // Preprocessing Team
    { name: 'Bagyalakshmi S Shinde', role: 'Preprocessing', imgSrc: './img/10.png', linkedIn: '#' },
    { name: 'C Steffi Angel', role: 'Preprocessing', imgSrc: './img/11A.png', linkedIn: '#' },
    { name: 'Elizabeth George', role: 'Preprocessing', imgSrc: './img/11.png', linkedIn: '#' },
    { name: 'Manav Gupta', role: 'Preprocessing', imgSrc: './img/12.png', linkedIn: '#' },
    { name: 'Nandhitha S', role: 'Preprocessing', imgSrc: './img/13.png', linkedIn: '#' },


    // Model Implementation Team
    { name: 'Christina J Thattil', role: 'Model Implementation', imgSrc: './img/14.png', linkedIn: '#' },
    { name: 'Deyon Rose Babu Thomas', role: 'Model Implementation', imgSrc: './img/15.png', linkedIn: '#' },
    { name: 'Dhyan R', role: 'Model Implementation', imgSrc: './img/16.png', linkedIn: '#' },
    { name: 'Epista R', role: 'Model Implementation', imgSrc: './img/17.png', linkedIn: '#' },
    { name: 'Ismail Basheer', role: 'Model Implementation', imgSrc: './img/18.png', linkedIn: '#' },
    { name: 'Karthikeyan K J', role: 'Model Implementation', imgSrc: './img/19.png', linkedIn: '#' },
    { name: 'M Surendran', role: 'Model Implementation', imgSrc: './img/20.png', linkedIn: '#' },
    { name: 'Manu Martin', role: 'Model Implementation', imgSrc: './img/22.png', linkedIn: '#' },
    { name: 'Marcus Daniel P', role: 'Model Implementation', imgSrc: './img/23.png', linkedIn: '#' },
    { name: 'Melvin Infant A', role: 'Model Implementation', imgSrc: './img/24.png', linkedIn: '#' },
    { name: 'Muzzammil Razin P A', role: 'Model Implementation', imgSrc: './img/25.png', linkedIn: '#' },
    { name: 'Neha Seirah Biju', role: 'Model Implementation', imgSrc: './img/26.png', linkedIn: '#' },
    { name: 'Ponwinsiya P', role: 'Model Implementation', imgSrc: './img/27.png', linkedIn: '#' },
    { name: 'Pradakshina P', role: 'Model Implementation', imgSrc: './img/28.png', linkedIn: '#' },
    { name: 'Rahul Krishna K R', role: 'Model Implementation', imgSrc: './img/29.png', linkedIn: '#' },
    { name: 'Ranjan Shruti Indresh', role: 'Model Implementation', imgSrc: './img/30.png', linkedIn: '#' },
    { name: 'Ridhin Issac Abraham', role: 'Model Implementation', imgSrc: './img/31.png', linkedIn: '#' },
    { name: 'Ritushree Dey', role: 'Model Implementation', imgSrc: './img/32.png', linkedIn: '#' },
    { name: 'Samson Sabu', role: 'Model Implementation', imgSrc: './img/33.png', linkedIn: '#' },
    { name: 'Sanjay S', role: 'Model Implementation', imgSrc: './img/34.png', linkedIn: '#' },
    { name: 'Swapnali Singh', role: 'Model Implementation', imgSrc: './img/35.png', linkedIn: '#' },
    { name: 'Swetha R', role: 'Model Implementation', imgSrc: './img/36.png', linkedIn: '#' },
    { name: 'Victor Jose I J', role: 'Model Implementation', imgSrc: './img/37.png', linkedIn: '#' },
    { name: 'Reeve R Mathew', role: 'Model Implementation', imgSrc: './img/38.png', linkedIn: '#' },


    // Research Team
    { name: 'Akshithaa Parvathavardhini', role: 'Research Team', imgSrc: './img/39.png', linkedIn: '#' },
    { name: 'Manashwy Padhi', role: 'Research Team', imgSrc: './img/40.png', linkedIn: '#' },
    { name: 'Vikash Krishna R', role: 'Research Team', imgSrc: './img/41.png', linkedIn: '#' },
    { name: 'Vivegavane D', role: 'Research Team', imgSrc: './img/42.png', linkedIn: '#' },

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
      alt="Predictive Analysis"
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

                {/* Research Team */}
                <h3>Research Team</h3>
        <div className="team-grid">
          {teamMembers.filter(member => member.role.includes('Research')).map((member, index) => (
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
