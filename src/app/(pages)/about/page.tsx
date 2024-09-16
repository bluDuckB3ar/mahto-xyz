"use client";
import React from 'react';

interface TimelineItem {
  date: string;
  title: string;
  company: string;
  description: string[];
}

interface SkillCategories {
  [category: string]: string[];
}

const AboutPage: React.FC = () => {
  const [openSections, setOpenSections] = React.useState({
    career: true,
    skills: true,
  });

  const careerTimeline: TimelineItem[] = [
    {
      date: "August 2023 - Present",
      title: "IT Specialist (Site Support)",
      company: "Franciscan Alliance, Indianapolis IN",
      description: [
        "Led the transition to our current Managed Service Provider, including creating a documented process for our inventory system, OS, workstation, and warranty repair guide.",
        "Coordinated with other teams and vendors to resolve hardware, network, and application issues, ensuring efficient communication and problem resolution.",
        "Configured and maintained support for our central region, a 2,500+ user environment; varied from imaging, deployment, repair, movement, documentation, and support for two hospital staff, 12 main hospitals, 12 subsidiary buildings, and an education center.",
        "Created a safe place for our technical departments what is known as SQLL: (stupid questions)', 'tips', 'info', and locations'): it includes our helpdesk to our cloud technicians to keep in touch for our ongoing issues, and question each task (no questions are stupid, stupid, is not mentality)",
      ],
    },
    {
      date: "February 2022 - August 2024",
      title: "IT Manager",
      company: "Catapult Tech Solution's, Carmel Indiana",
      description: [
        "Led the rebranding and transition ou daughter company from \"Computer Troubleshooters of Carmel\" to \"Computer Technology of Carmel\".",
        "Provided comprehensive IT support for diverse environments, from businesses to homes, day's varying by minutes from building custom PCs, to diagnosing a network outage, to fixing an iPad, to setting up security cameras.",
        "Implemented and maintained quality-of-life projects.",
      ],
    },
    {
      date: "April 2020 - December 2022",
      title: "Field Technician",
      company: "Fujitsu, Indianapolis, IN",
      description: [
        "POS systems identifying hardware and software failures and putting fixes in place to get the system working again.",
        "Hardware support, such as credit card terminals/cash registers/barcode scanners and peripheral devices on-site or over the phone.",
        "Providing technical support to store personnel, offering guidance on POS system operation and troubleshooting common problems.",
        "Performing preventative maintenance, regularly inspecting and servicing POS equipment to prevent breakdowns and optimize performance.",
      ],
    },
    {
      date: "October 2018 - April 2020",
      title: "IT Supervisor",
      company: "K-12, Indianapolis, IN",
      description: [
        "Hardware Maintenance: Managing and repairing computers, printers, projectors, and other technology equipment.",
        "Inventory Management: Keeping track of technology assets and ensuring proper distribution.",
        "Mentoring: Providing guidance and training to technology-focused interns or student helpers.",
        "Equipment Audits: Conducting regular inspections of technology equipment to assess condition and functionality.",
      ],
    },
  ];

  const skillsByCategory: SkillCategories = {
    Networking: [
      'Switches/Routers',
      'Patch Panels',
      'Firewalls',
      'TCP/IP',
      'DNS',
    ],

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
    Ticketing Systems: [
      'ServiceNow',
      'Oracle',
      'IT Glue',
      'Google Forms',
      'Jira',
    ],
    Software: [
      'Microsoft 365',
      'JAMF',
      'Epic',
      'Imprivata',
      'Mac OS',
      'SQL',
    ],
    Hardware: ['Computer/Laptop Repair'],
    
    Certifications: ['CCENT', 'Net+', 'A+'],
Microsoft Certifications: ['MTA', 'MCP', 'MCE'],
  Programming: ['HTML', 'JS', 'CSS', 'PowerShell', 'Python', 'Bash', 'SQL', 'C++'],
  Ticketing Systems: ['ServiceNow', 'Jira', 'Zendesk'],  
  System Administration Tools: ['Active Directory', 'Azure', 'Office 365', 'Exchange', 'SharePoint', 'OneDrive', 'Intune'],

  Certifications: ['CCENT', 'Net+', 'A+'],
  };

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="container p-8 mx-auto">
      <h1 className="mb-8 text-4xl font-bold text-center text-duckYellow">About Brennan Mahto</h1>
      
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Career Timeline */}
        <div className="p-6 rounded-lg shadow-lg bg-gradient-to-br from-duckBlue-100 to-blue-100">
          <h2
            className="flex items-center justify-between mb-4 text-2xl font-semibold cursor-pointer text-duckYellow"
            onClick={() => toggleSection('career')}
          >
            Career Timeline
          </h2>
          {openSections.career && (
            <div className="space-y-6">
              {careerTimeline.map((item, index) => (
                <div key={index} className="border-l-2 border-duckYellow pl-4">
                  <h3 className="text-xl font-semibold text-duckPurple">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.date} - {item.company}</p>
                  <ul className="mt-2 list-disc list-inside">
                    {item.description.map((desc, i) => (
                      <li key={i} className="text-sm">{desc}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Skills */}
        <div className="p-6 rounded-lg shadow-lg bg-gradient-to-br from-duckBlue-100 to-blue-100">
          <h2
            className="flex items-center justify-between mb-4 text-2xl font-semibold cursor-pointer text-duckYellow"
            onClick={() => toggleSection('skills')}
          >
            Skills
          </h2>
          {openSections.skills && (
            <div className="space-y-4">
              {Object.entries(skillsByCategory).map(([category, skills]) => (
                <div key={category}>
                  <h3 className="mb-2 text-xl font-semibold text-duckPurple">{category}</h3>
                  <ul className="pl-5 space-y-1 list-disc">
                    {skills.map((skill: string, index: number) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;