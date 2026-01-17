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

const profile = {
  name: 'Brennan Allen Mahto',
  email: 'brennan@mahto.xyz',
  phone: '(317) 792-0841',
  location: 'Indianapolis, IN',
};

const careerTimeline: TimelineItem[] = [
  {
    date: 'Apr 2025 - Present',
    title: 'Installer / Fabricator',
    company: 'Sign Craft Industries, Castleton, IN',
    description: [
      'Operate heavy mechanical equipment (trucks, cranes) to install custom signage safely.',
      'Install raceway, flex-face, panels, and channel letters with high-quality fit and finish.',
      'Perform low-voltage electrical work and LED wiring to ensure reliable, long-lived installs.',
      'Deliver both large-scale and small-scale installs, adapting to varied client specs.',
    ],
  },
  {
    date: 'Sep 2023 - Oct 2024',
    title: 'IT Specialist / Desktop Support Engineer',
    company: 'Franciscan Alliance (MSP: R4 Solutions), Greenwood, IN',
    description: [
      'Supported 2,500+ health professionals across ten facilities via remote and in-person service.',
      'Managed Kurmi cloud and VOIP: phone trees, voicemail resets, new numbers, and POE phone installs.',
      'Administered E3 to E5 environments: imaging with MDT/SCCM, permissions in AD and Entra.',
      'Handled ~10 tickets daily in ServiceNow, meeting SLAs from small deployments to outages.',
      'Diagnosed Provation, Epic, Citrix issues to restore clinician productivity.',
    ],
  },
  {
    date: 'Jan 2022 - Sep 2023',
    title: 'IT Lead',
    company: 'Computer Technology of Carmel (MSP: Catapult Technology Solutions), Carmel, IN',
    description: [
      'Refurbished and integrated a computer store with MSP operations to modernize delivery.',
      'Set up computers, printers, routers, and network security across diverse client sites.',
      'Provided phone and on-site support to resolve issues quickly for SMB clients.',
    ],
  },
  {
    date: 'Apr 2020 - Dec 2021',
    title: 'Field Engineer / Network Support Specialist',
    company: 'Fujitsu, Remote (IN)',
    description: [
      'Supported retail tech (SCO, POS, thermal printers) across 50+ locations.',
      'Installed and configured servers and UPS systems with rack mounting and cabling.',
      'Coordinated vendors for hardware procurement and service agreements.',
    ],
  },
  {
    date: 'Aug 2018 - Apr 2020',
    title: 'IT Supervisor',
    company: 'K-12 Tech, Castleton, IN',
    description: [
      'Repaired and deployed 1,000+ MacBooks/Chromebooks across 6 school districts.',
      'Ran in-shop break/fix operations, improving turnaround and uptime.',
      'Oversaw inventory management to keep stock aligned with district demand.',
      'Advanced from intern to supervisor within two years.',
    ],
  },
];

const skillsByCategory: SkillCategories = {
  'Security & Governance': [
    'Risk Management',
    'Data Protection',
    'Information Assurance',
    'Incident Response',
    'Malware Analysis',
    'Cybersecurity Governance',
  ],
  'Systems & Platforms': [
    'System Administration',
    'Active Directory / Entra',
    'Azure',
    'SharePoint',
    'Microsoft 365 Suite',
    'AWS',
  ],
  Networking: ['Network Security', 'TCP/IP', 'DNS', 'Routers/Switches'],
  'Support & Operations': [
    'Technical Support',
    'Problem-solving',
    'Project Management',
    'ServiceNow',
    'Kurmi / VOIP',
  ],
  Certifications: ['CompTIA A+', 'CompTIA Network+', 'CCENT'],
  Tools: ['MDT', 'SCCM', 'Intune', 'PowerShell', 'Imaging/Deployment'],
};

const education = {
  school: 'Western Governors University',
  window: 'May 2025 - May 2027',
  degree: 'B.A. Cyber Security Information Assurance (in progress)',
  location: 'Remote, IN',
};

const projects = [
  {
    title: 'SNOW-Snek',
    details: 'Python program that parses exported ServiceNow tickets and maps them to Google Timeline to generate mileage reports.',
  },
  {
    title: 'Malware Analyst TCM',
    details: 'AWS-deployed digital forensic lab for malware analysis while preparing for the PMRP exam.',
  },
  {
    title: 'Color Quak',
    details: 'C# color palette generator that scans images and builds palettes.',
  },
];

const interests = ['Stand-up Comedy', 'Dungeons & Dragons', 'True Crime Podcasts'];

const Section: React.FC<{ title: string; isOpen: boolean; onToggle: () => void; children: React.ReactNode }> = ({
  title,
  isOpen,
  onToggle,
  children,
}) => (
  <div className="p-4 rounded-lg shadow-lg bg-gradient-to-br from-duckBlue-100 to-blue-100">
    <h2
      className="flex items-center justify-between mb-2 text-xl font-semibold cursor-pointer text-duckYellow"
      onClick={onToggle}
    >
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
          {item.date} · {item.company}
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

const Projects: React.FC = () => (
  <div className="space-y-4">
    {projects.map((project) => (
      <div key={project.title} className="rounded border border-duckBlue/40 p-4 bg-black/40">
        <h3 className="text-xl font-semibold text-duckBlue">{project.title}</h3>
        <p className="text-sm">{project.details}</p>
      </div>
    ))}
  </div>
);

const Education: React.FC = () => (
  <div className="rounded border border-duckBlue/40 p-4 bg-black/40">
    <h3 className="text-xl font-semibold text-duckBlue">{education.school}</h3>
    <p className="text-sm">{education.degree}</p>
    <p className="text-sm">{education.window} · {education.location}</p>
  </div>
);

const Interests: React.FC = () => (
  <div className="flex flex-wrap gap-2">
    {interests.map((interest) => (
      <span key={interest} className="px-3 py-1 rounded-full border border-duckBlue/60 text-sm bg-black/40">
        {interest}
      </span>
    ))}
  </div>
);

const AboutPage: React.FC = () => {
  const [openSections, setOpenSections] = React.useState({
    career: true,
    skills: true,
    projects: true,
    education: true,
    interests: true,
  });

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <main className="container p-4 text-pretty mx-auto">
      <div className="text-center my-12">
        <h1 className="text-3xl text-duckYellow">About Me</h1>
        <div className="border-duckYellow my-12 border-t-2 border-b-2"></div>
        <div className="text-duckBlue2 my-4 text-2xl space-y-2">
          <p>
            Hello! My name is <span className="text-duckBlue2 text-center">{profile.name}</span>
          </p>
          <p className="text-base text-duckBlue2/80">
            {profile.email} | {profile.phone} | {profile.location}
          </p>
        </div>
      </div>

      <div className="space-y-4 text-duckBlue2 text-center">
        <p>
          I am open to new opportunities and challenges, and I am always looking for ways to grow and improve. If you are
          interested in working with me or learning more about my experience, please feel free to reach out. I would love to
          connect and discuss how we can work together to achieve our goals.
        </p>
      </div>

      <div className="border-duckBlue2 text-duckBlue2 border-t-2 border-b-2 my-10"></div>

      <div className="space-y-12 text-duckBlue2 text-2xl">
        <Section title="Career Timeline" isOpen={openSections.career} onToggle={() => toggleSection('career')}>
          <CareerTimeline />
        </Section>

        <Section title="Skills" isOpen={openSections.skills} onToggle={() => toggleSection('skills')}>
          <Skills />
        </Section>

        <Section title="Projects" isOpen={openSections.projects} onToggle={() => toggleSection('projects')}>
          <Projects />
        </Section>

        <Section title="Education" isOpen={openSections.education} onToggle={() => toggleSection('education')}>
          <Education />
        </Section>

        <Section title="Interests" isOpen={openSections.interests} onToggle={() => toggleSection('interests')}>
          <Interests />
        </Section>

        <ContactPage />
      </div>
    </main>
  );
};

export default AboutPage;
