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
    date: "September 2023 - Present",
    title: "IT Specialist (MSP)",
    company: "Franciscan Alliance, Indianapolis IN",
    description: [
      "Orchestrated the support for our 2,500+ Health Care Professionals across our 15+ facilities",
      "Implementing strategies to address hardware issues, network outages, fax issues, or common application problems, ensuring minimal disruption to patient care.",
      "Establish clear communication channels between IT staff from different departments and regions, along with clinical teams to ensure everyone is informed of issues changes, or events.",
      "Supported our Microsoft integrations using MDT, SCCM, AD, and Intune.",
      "Automated repetition tasks using PowerShell, for departments with similar device setups and software needs.",
    ],
  },
  {
    date: "January 2022 - September 2023",
    title: "IT Manager (MSP)",
    company: "Catapult Technology Solutions, Carmel Indiana",
    description: [
      "Remodeled Managed Maintained daughter company: Computer Technology of Carmel.",
      "Consistently maintained a 5-star customer satisfaction rating for 2 years, demonstrating exceptional service and commitment to exceeding former and new client expectations.",
      "Work with businesses providing support, from office moves, network outages, or installations.",
      "Proficiently diagnosed and repaired various hardware issues across laptops, custom PCs, and Macs, minimizing downtime and ensuring customer satisfaction.",
    ],
  },
  {
    date: "April 2020 - December 2021",
    title: "Field Engineer",
    company: "Fujitsu, Indianapolis, IN",
    description: [
      "Independently driving, and driving, and driving my work van to support our Grocery / Retail store's POS machines.",
      "Maintained a professional and patient demeanor in fast-paced, high-volume environments, effectively deploying or repairing hardware as needed.",
      "Returned and inventoried store registers, self-checkout machines, and various hardware on behalf of clients.",
      "Successfully led six independent projects for major clients such as Staples, TJX, Kroger, and Starbucks, ranging from hardware POS upgrades to software migrations.",
    ],
  },
  {
    date: "August 2018 - April 2020",
    title: "IT Supervisor",
    company: "K-12 Tech, Indianapolis, IN",
    description: [
      "Quality Controlled new and ongoing students to retain the support and confidence for their future career.",
      "Mentored and trained 5 interns fostering their technical skills and providing hands-on experience.",
      "Two of the interns successfully secured full-time IT positions upon graduation.",
    ],
  },
];

const skillsByCategory: SkillCategories = {
  Networking: ['TCP/IP', 'LAN/WAN', 'Switching', 'VLANs', 'Firewalls', 'VPNs'],
  'Systems Administration Tools': [
    'Active Directory',
    'Azure',
    'Office 365',
    'Exchange',
    'SharePoint',
    'OneDrive',
    'Intune',
    'PowerShell',
  ],
  'Ticketing Systems': ['ServiceNow', 'Oracle', 'IT Glue', 'Google Forms'],
  Software: ['Microsoft 365', 'JAMF', 'Epic', 'Imprivata', 'Mac OS', 'SQL'],
  Hardware: ['Servers', 'Desktops', 'Laptops', 'Printers', 'Mobile devices', 'Hard Drives'],
  Certifications: ['CCENT', 'Net+', 'A+'],
  Programming: ['HTML', 'JS', 'CSS', 'PowerShell', 'Python', 'Bash', 'SQL', 'C++'],
};

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

const AboutPage: React.FC = () => {
  const [openSections, setOpenSections] = React.useState({
    career: true,
    skills: true,
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
        <ContactPage />
      </div>
      
    </main>
  );
};

export default AboutPage;
