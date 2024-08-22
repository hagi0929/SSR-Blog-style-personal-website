type Link = {
  type: string;
  body: string;
};

type Blog = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  links: Link[];
  notionUrl?: string;
};

type Project = {
  id: string;
  title: string;
  description: string;
  techstack: string[];
  links: Link[];
  notionUrl?: string;
};

type ArticleTag = {
  id: string;
  label: string;
  metadata: string;
};

type Data = {
  articleTags: ArticleTag[];
  blogList: Blog[];
  projectList: Project[];
};

const data: Data = {
  articleTags: [
    {
      id: "javascript",
      label: "javascript",
      metadata: "idk",
    },
  ],
  blogList: [
    {
      id: "2",
      title: "Youtube Download Extension",
      description: "A chrome Extension that downloads youtube videos (which doesn't work anymore LOL)",
      tags: ["JavaScript"],
      links: [
        {
          type: "github",
          body: "https://github.com/hagi0929/special-youtube-downloader",
        },
      ],
    },
    {
      id: "3",
      title: "Youtube Download Extension",
      description: "A chrome Extension that downloads youtube videos (which doesn't work anymore LOL)",
      tags: ["JavaScript"],
      links: [
        {
          type: "github",
          body: "https://github.com/hagi0929/special-youtube-downloader",
        },
      ],
      notionUrl: "https://www.notion.so/Youtube-Download-Extension-e9620f65614c403bab7c010edfdc8047",
    },
    {
      id: "7",
      title: "Youtube Download Extension",
      description: "A chrome Extension that downloads youtube videos (which doesn't work anymore LOL)",
      tags: ["JavaScript"],
      links: [
        {
          type: "github",
          body: "https://github.com/hagi0929/special-youtube-downloader",
        },
      ],
      notionUrl: "https://www.notion.so/Youtube-Download-Extension-e9620f65614c403bab7c010edfdc8047",
    },
  ],
  projectList: [
    {
      id: "23",
      title: "Youtube Download Extension",
      description: "A chrome Extension that downloads youtube videos (which doesn't work anymore LOL)",
      techstack: ["JavaScript"],
      links: [
        {
          type: "github",
          body: "https://github.com/hagi0929/special-youtube-downloader",
        },
      ],
      notionUrl: "https://www.notion.so/Youtube-Download-Extension-e9620f65614c403bab7c010edfdc8047",
    },
    {
      id: "12",
      title: "Polybets UI",
      description: "Built mock-up design of the blockchain-based project using react.",
      techstack: ["React", "Figma"],
      links: [
        {
          type: "github",
          body: "https://github.com/hagi0929/polybets-ui",
        },
      ],
    },
    {
      id: "34",
      title: "General Forum Website",
      description: "General forum web application which uses MySQL and PHP. Login system was also implemented by using session.",
      techstack: ["PHP", "JavaScript", "MySQL", "SQL"],
      links: [
        {
          type: "github",
          body: "https://github.com/hagi0929/web-2-enhanced-forum",
        },
      ],
    },
    {
      id: "21",
      title: "Personal Website V2",
      description: "An eyecatching personal website written in TypeScript and React. Deployed on GitHub Pages using multiple CICD tools.",
      techstack: ["React", "TypeScript", "GitHub Actions", "Jenkins", "Scss"],
      links: [
        {
          type: "github",
          body: "https://github.com/hagi0929/hagi0929.github.io",
        },
      ],
    },
    {
      id: "1",
      title: "Web Calculator",
      description: "Super simple web-based calculator built with HTML, CSS, and JavaScript.",
      techstack: ["JavaScript", "HTML", "CSS"],
      links: [
        {
          type: "github",
          body: "https://github.com/hagi0929/web_calculator",
        },
      ],
    },
  ],
};
