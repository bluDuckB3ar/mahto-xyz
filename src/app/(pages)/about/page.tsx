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
"",

"",

"", 


      ],
    },
    {
      date: "February 2022 - August 2024",
      title: "IT Manager",
      company: "Catapult Tech Solution's, Carmel Indiana",
      description: [
"",
"",
"", 
      ],
    },
    {
      date: "April 2020 - December 2022",
      title: "Field Technician",
      company: "Fujitsu, Indianapolis, IN",
      description: [
"",

"",

"", 

      ],
    },
    {
      date: "October 2018 - April 2020",
      title: "IT Supervisor",
      company: "K-12, Indianapolis, IN",
      description: [
"",

"",

"", 
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
    'Ticketing Systems': [
      'ServiceNow',
      'Oracle',
      'IT Glue',
      'Google Forms',
      'Jira',
      'Zendesk',
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
    'Microsoft Certifications': ['MTA', 'MCP', 'MCE'],
    Programming: ['HTML', 'JS', 'CSS', 'PowerShell', 'Python', 'Bash', 'SQL', 'C++'],
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