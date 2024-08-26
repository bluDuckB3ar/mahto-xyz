import React from 'react';


const AboutPage: React.FC = () => {
  const careerTimeline = [
    { year: 2023, event: 'Joined Franciscan Alliance / R4 Solutions as IT / Network Engineer' },
    { year: 2021, event: 'Started at Catapult Tech as IT Manager / Network Engineer' },
    { year: 2020, event: 'Began working at Fujitsu as Field Engineer' },
    { year: 2018, event: 'Joined K-12 Tech as IT Supervisor' },
  ];

  type Skill = string;
  
  const skills: Skill[] = [
    'Network troubleshooting',
    'Software/Hardware debugging',
    'Virtual Machine management',
    'Voice line troubleshooting',
    'Active Directory administration',
    'Microsoft 365 support',
    'Custom PC building and repair',
    'Malware removal and data recovery',
  ];

  type Project = string;
  
  const projects: Project[] = [
    'FOG Project',
    'NAS/Proxmox Server',
    'Windows 2022 AD Server',
    'PiHole',
    'Rustdesk Server',
    'Plex Server',
  ];

  return (
    <div className="about-page bg-gray-100 min-h-screen p-8">
      <nav className="section-nav mb-8">
        <ul className="flex space-x-4 justify-center">
          <li><a href="#career-timeline" className="text-duckBlue2 hover:underline">Career Timeline</a></li>
          <li><a href="#skills" className="text-duckBlue2 hover:underline">Skills</a></li>
          <li><a href="#projects" className="text-duckBlue2 hover:underline">Projects</a></li>
          <li><a href="#interests" className="text-duckBlue2 hover:underline">Interests</a></li>
          <li><a href="#contact" className="text-duckBlue2 hover:underline">Contact</a></li>
        </ul>
      </nav>

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-duckBlue">About Brennan Mahto</h1>
        <p className="text-lg text-duckyellow">IT / Network Engineer based in Indianapolis, IN</p>
      </div>

      <section id="career-timeline" className="mb-12">
        <h2 className="text-3xl font-semibold text-duckBlue mb-4">Career Timeline</h2>
        <ul className="space-y-2">
          {careerTimeline.map((item) => (
            <li key={item.year} className="bg-white p-4 rounded shadow">
              <strong className="text-duckBlue2">{item.year}: </strong>
              {item.event}
            </li>
          ))}
        </ul>
      </section>

      {/* Rest of your code... */}

      <section id="skills" className="mb-12">
        <h2 className="text-3xl font-semibold text-duckBlue mb-4">Skills</h2>
        <ul className="grid grid-cols-2 gap-4">
          {skills.map((skill, index) => (
            <li key={index} className="bg-white p-4 rounded shadow">{skill}</li>
          ))}
        </ul>
      </section>

      {/* Rest of your code... */}

      <section id="projects" className="mb-12">
        <h2 className="text-3xl font-semibold text-duckBlue mb-4">Homelab / Projects</h2>
        <ul className="grid grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <li key={index} className="bg-white p-4 rounded shadow">{project}</li>
          ))}
        </ul>
      </section>

      {/* Rest of your code... */}

      <section id="interests" className="mb-12">
        <h2 className="text-3xl font-semibold text-duckBlue mb-4">Interests</h2>
        <p className="bg-white p-4 rounded shadow">Comedy, Digital Forensics, Graphic Design</p>
      </section>

      {/* Rest of your code... */}
    </div>
  );
};

export default AboutPage;
