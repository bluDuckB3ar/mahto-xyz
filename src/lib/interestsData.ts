// Data for interests, profiles, and links
export interface Interest {
  title: string;
  description: string;
  link?: string;
  category: string;
}

export const interests: Interest[] = [
  // YouTubers
  {
    category: "YouTubers",
    title: "William Osman",
    description: "Creative engineering and maker content with a humorous twist",
    link: "https://www.youtube.com/@williamosman",
  },
  {
    category: "YouTubers",
    title: "Michael Reeves",
    description: "AI and robotics projects with comedic engineering",
    link: "https://www.youtube.com/@MichaelReeves",
  },
  {
    category: "YouTubers",
    title: "Great Korn",
    description: "Creative engineering and practical builds",
    link: "https://www.youtube.com/@GreatKorn",
  },
  {
    category: "YouTubers",
    title: "Nile Red",
    description: "Chemistry experiments and molecular synthesis",
    link: "https://www.youtube.com/@NileRed",
  },
  {
    category: "YouTubers",
    title: "Doug Doug",
    description: "Comedy and gaming with creative challenges",
    link: "https://www.youtube.com/@DougDougFood",
  },
  {
    category: "YouTubers",
    title: "Tasting History",
    description: "Historical cooking and culinary exploration",
    link: "https://www.youtube.com/@TastingHistory",
  },
  {
    category: "YouTubers",
    title: "Binging with Babish",
    description: "Recreating dishes from movies, TV shows, and video games",
    link: "https://www.youtube.com/@BingingwithBabish",
  },
  {
    category: "YouTubers",
    title: "John Hammond",
    description: "Cybersecurity, hacking, and security research",
    link: "https://www.youtube.com/@JohnHammond",
  },

  // Podcasts
  {
    category: "Podcasts",
    title: "Not Another D&D Podcast",
    description: "D&D Court: The Player's Judge (w/ Lou Wilson & Zac Oyama) - Legal comedy meets tabletop gaming",
    link: "https://open.spotify.com/show/5GcTIDkgnB9wP6CmUyOSqa",
  },
  {
    category: "Podcasts",
    title: "Dungeons and Daddies",
    description: "The Peach Pit - Season 3 after-show episodes, comedy D&D actual play",
    link: "https://open.spotify.com/show/5Sffly5o4mPetmnTR9zsWh",
  },
  {
    category: "Podcasts",
    title: "No Such Thing",
    description: "Do horses actually hate running? - Exploring quirky questions about the world",
    link: "https://www.nosuchthing.show/p/do-horses-actually-hate-running",
  },
  {
    category: "Podcasts",
    title: "Reply All",
    description: "Scammers (Part I & II) - The story of India tech-support scammers",
    link: "https://www.reddit.com/r/IAmA/comments/6rdxyy/we_are_the_hosts_and_staff_of_the_reply_all/",
  },
  {
    category: "Podcasts",
    title: "Darknet Diaries",
    description: "They Had Permission to Break In, So Why Are They In Jail? - Courthouse arrest story",
    link: "https://www.youtube.com/watch?v=Y0AbHKcIQxk",
  },
  {
    category: "Podcasts",
    title: "Every Little Thing",
    description: "Don't Underestimate the Flamingo - True stories about animals and science",
    link: "https://www.youtube.com/watch?v=6LnLvtLuJY0",
  },

  // Places I Go
  {
    category: "Places I Go",
    title: "Kips",
    description: "Local pub in Indianapolis",
    link: "https://www.kipspubindy.com/",
  },
  {
    category: "Places I Go",
    title: "16 Bit",
    description: "Retro gaming arcade and bar in Indianapolis",
    link: "https://www.16-bitbar.com/indy",
  },
  {
    category: "Places I Go",
    title: "Asset Recycling",
    description: "Computer and electronics salvage and recycling center",
    link: "https://assetrecycling.org/",
  },
  {
    category: "Places I Go",
    title: "White Rabbit",
    description: "Cabaret and entertainment venue",
    link: "https://www.whiterabbitcabaret.com/",
  },

  // Places I Plan to Go
  {
    category: "Places I Plan to Go",
    title: "DEFCON",
    description: "Hacker conference in Las Vegas",
    link: "https://www.defcon.org/",
  },
  {
    category: "Places I Plan to Go",
    title: "New Orleans",
    description: "Travel destination with cultural significance",
  },
  {
    category: "Places I Plan to Go",
    title: "BattleBots",
    description: "Robot combat championship competition",
    link: "https://battlebots.com/get-tickets/",
  },
  {
    category: "Places I Plan to Go",
    title: "OpenSauce",
    description: "Maker and hacker conference with hands-on experiences",
    link: "https://opensauce.com/news/",
  },

  // Education
  {
    category: "Education",
    title: "Western Governors University (WGU)",
    description: "Online university - currently enrolled",
    link: "https://www.wgu.edu/",
  },

  // Projects
  {
    category: "Projects",
    title: "TCM Security",
    description: "Security-focused project work",
  },
];

// Group interests by category
export const groupedInterests = interests.reduce((acc, interest) => {
  if (!acc[interest.category]) {
    acc[interest.category] = [];
  }
  acc[interest.category].push(interest);
  return acc;
}, {} as Record<string, Interest[]>);
