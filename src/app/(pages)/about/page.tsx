"use client";
import React from 'react';
import ContactPage from '../contact/page';

interface TimelineItem {
  date: string;
  title: string;
  company: string;
  description: string[];
}

interface SkillCategories {
  [category: string]: string[];
}

const careerTimeline: TimelineItem[] = [
  {
    date: "April 2025 - Present",
    title: "Installer/Fabricator",
    company: "Sign Craft Industries, Castleton IN",
    description: [
      "Manage safe operation of heavy mechanical equipment, including trucks and cranes, for signage installation",
      "Install raceway, flex-face, panels, and channel letters with high-quality workmanship",
      "Perform low voltage electrical work and LED wiring with technical precision",
      "Execute installation of both large-scale and small-scale signs across diverse projects",
    ],
  },
  {
    date: "September 2023 - October 2024",
    title: "IT Specialist / Desktop Support Engineer",
    company: "Franciscan Alliance (MSP: R4 Solutions), Greenwood IN",
    description: [
      "Provided remote and in-person technical support for over 2,500 health professionals across ten facilities",
      "Managed Kurmi cloud and VOIP systems, including phone trees, voicemails, and POE phone installations",
      "Administered E3 to E5 end-user environments using MDT, SCCM, and Active Directory",
      "Handled average of 10 tickets daily using ServiceNow, meeting SLAs for issues from deployments to major outages",
      "Diagnosed and resolved issues with healthcare software including Provation, Epic, and Citrix",
    ],
  },
  {
    date: "January 2022 - September 2023",
    title: "IT Lead",
    company: "Computer Technology of Carmel (MSP: Catapult Technology Solutions), Carmel IN",
    description: [
      "Refurbished and integrated computer store with MSP, leading digital transformation efforts",
      "Set up computers, printers, routers, and network security measures for various environments",
      "Provided technical support over phone and in person for timely issue resolution",
      "Maintained high customer satisfaction ratings and demonstrated exceptional service delivery",
    ],
  },
  {
    date: "April 2020 - December 2021",
    title: "Field Engineer / Network Support Specialist",
    company: "Fujitsu, Remote IN",
    description: [
      "Provided on-site technical support for retail technology solutions across 50+ retail locations",
      "Troubleshot and resolved issues with self-checkout kiosks, POS systems, and thermal receipt printers",
      "Installed and configured servers and UPS systems with rack mounting and cabling",
      "Coordinated with vendors for hardware procurement and service agreements",
    ],
  },
  {
    date: "August 2018 - April 2020",
    title: "IT Supervisor",
    company: "K-12 Tech, Castleton IN",
    description: [
      "Supported repair and deployment of over 1,000 MacBooks and Chromebooks across 6 school districts",
      "Managed in-shop break/fix repair operations, improving device turnaround times",
      "Oversaw inventory management processes and resource allocation",
      "Progressed from intern to IT Supervisor within two years, demonstrating significant growth",
    ],
  },
];

const skillsByCategory: SkillCategories = {
  Certifications: ['CompTIA A+', 'CompTIA Network+', 'Cisco CCENT'],
  Skills: ['Risk Management', 'Data Protection', 'Information Assurance', 'Incident Response', 'Malware Analysis', 'System Administration', 'Network Security', 'Technical Support', 'Cybersecurity Governance', 'Problem-solving'],
  Technologies: ['Active Directory', 'Azure', 'SharePoint', 'Microsoft Office Suite', 'Networking (TCP/IP, DNS)', 'AWS', 'MDT', 'SCCM', 'ServiceNow', 'PowerShell'],
};

const education = [
  {
    school: "Western Governors University",
    program: "Bachelor of Arts, Cyber Security Information Assurance",
    status: "May 2025 - May 2027",
    description: "Remote degree focusing on security principles, threat analysis, system protection, and cybersecurity governance.",
  },
];

const projects = [
  {
    name: "SNOW-Snek",
    description: "Python program to export Service Now tickets and map them to Google Timeline, creating mileage reports automatically.",
  },
  {
    name: "Malware Analyst - TCM",
    description: "AWS deployed digital forensic lab for analyzing malware, preparation for Practical Malware Research Professional (PMRP) exam.",
  },
  {
    name: "Color Quak",
    description: "Color palette maker written in C# that scans images and generates color palettes from them.",
  },
];

const Section: React.FC<{ title: string; isOpen: boolean; onToggle: () => void; children: React.ReactNode }> = ({
  title,
  isOpen,
  onToggle,
  children,
}) => (
  <div className="p-4 rounded-lg shadow-lg bg-gradient-to-br from-duckBlue-100 to-blue-100">
    <h2 className="flex items-center justify-between mb-2 text-xl font-semibold cursor-pointer text-duckYellow" onClick={onToggle}>
      {title}
    </h2>
    {isOpen && <div>{children}</div>}
  </div>
);

const CareerTimeline: React.FC = () => (
  <div className="space-y-8">
    {careerTimeline.map((item, index) => (
      <div key={index} className="border-l-4 border-duckYellow pl-4">
        <h3 className="text-2xl font-semibold text-duckBlue">{item.title}</h3>
        <p className="text-sm ">
          {item.date} - {item.company}
        </p>
        <ul className="mt-2 list-disc list-inside">
          {item.description.map((desc, i) => (
            <li key={i} className="text-sm">
              {desc}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

const Skills: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {Object.entries(skillsByCategory).map(([category, skills]) => (
      <div key={category}>
        <h3 className="mb-2 text-xl font-semibold text-duckBlue">{category}</h3>
        <ul className="pl-4 space-y-1 list-disc">
          {skills.map((skill, index) => (
            <li key={index} className="text-sm">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

const Education: React.FC = () => (
  <div className="space-y-6">
    {education.map((edu, index) => (
      <div key={index} className="border-l-4 border-duckPurple pl-4">
        <h3 className="text-2xl font-semibold text-duckBlue">{edu.school}</h3>
        <p className="text-sm font-semibold text-duckYellow">{edu.program}</p>
        <p className="text-sm text-duckGray">{edu.status}</p>
        <p className="text-sm mt-2">{edu.description}</p>
      </div>
    ))}
  </div>
);

const Projects: React.FC = () => (
  <div className="space-y-6">
    {projects.map((project, index) => (
      <div key={index} className="border-l-4 border-duckRed pl-4">
        <h3 className="text-2xl font-semibold text-duckBlue">{project.name}</h3>
        <p className="text-sm mt-2">{project.description}</p>
      </div>
    ))}
  </div>
);

const AboutPage: React.FC = () => {
  const [openSections, setOpenSections] = React.useState({
    career: true,
    skills: true,
    education: true,
    projects: true,
  });

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <main className="container p-4 text-pretty mx-auto">
      <div className="text-center my-12">
        <h1 className="text-3xl text-duckYellow">About Me</h1>
        <div className="border-duckYellow my-12 border-t-2 border-b-2"></div>
        <p className="text-duckBlue2 my-4 text-2xl">
          Hello! My name is <span className="text-duckBlue2 text-center">Brennan Allen Mahto!</span>
        </p>
      </div>
      <div className="space-y-4">
        <p className="text-duckBlue2 text-center">
          I am open to new opportunities and challenges, and I am always looking for ways to grow and improve. If you are interested in working with me or learning more about my experience, please feel free to reach out to me. I would love to connect with you and discuss how we can work together to achieve our goals.
        </p>
        <div className="align-center text-duckBlue2 items-center text-center">
          This includes but is not limited to: IT Support, Systems Administration, Network Administration, and more.
          <div className="my-20"></div>
          <iframe
            src="https://open.spotify.com/embed/track/1EVJeWeItAPcATFolrw3VR"
            width="100%"
            height="150"
            style={{ border: 0 }}
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="rounded-lg"
          />
        </div>
      </div>
      <div className="border-duckBlue2 text-duckBlue2 border-t-2 border-b-2"></div>
      <div className="space-y-12  text-duckBlue2 text-2xl">
        <Section title="Career Timeline" isOpen={openSections.career} onToggle={() => toggleSection('career')}>
          <CareerTimeline />
        </Section>
        <Section title="Skills" isOpen={openSections.skills} onToggle={() => toggleSection('skills')}>
          <Skills />
        </Section>
        <Section title="Education" isOpen={openSections.education} onToggle={() => toggleSection('education')}>
          <Education />
        </Section>
        <Section title="Projects" isOpen={openSections.projects} onToggle={() => toggleSection('projects')}>
          <Projects />
        </Section>
        <ContactPage />
      </div>
      
    </main>
  );
};

export default AboutPage;
