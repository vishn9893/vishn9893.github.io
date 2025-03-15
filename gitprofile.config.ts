// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'vishn9893', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['vishn9893/Bitbucket-RAG'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
  //   external: {
  //     header: 'My Projects',
  //     // To hide the `External Projects` section, keep it empty.
  //     projects: [
  //       {
  //         title: 'Project Name',
  //         description:
  //           'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
  //         imageUrl:
  //           'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
  //         link: 'https://example.com',
  //       },
  //       {
  //         title: 'Project Name',
  //         description:
  //           'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
  //         imageUrl:
  //           'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
  //         link: 'https://example.com',
  //       },
  //     ],
  //   },
  // },
  // seo: {
  //   title: 'Portfolio of Ariful Alam',
  //   description: '',
  //   imageURL: '',
  // },
  // social: {
  //   linkedin: 'ariful-alam',
  //   x: 'arif_szn',
  //   mastodon: 'arifszn@mastodon.social',
  //   researchGate: '',
  //   facebook: '',
  //   instagram: '',
  //   reddit: '',
  //   threads: '',
  //   youtube: '', // example: 'pewdiepie'
  //   udemy: '',
  //   dribbble: '',
  //   behance: '',
  //   medium: 'arifszn',
  //   dev: 'arifszn',
  //   stackoverflow: '', // example: '1/jeff-atwood'
  //   skype: '',
  //   telegram: '',
  //   website: 'https://www.arifszn.com',
  //   phone: '',
  //   email: 'arifulalamszn@gmail.com',
  // },
  resume: {
    fileUrl:
      'https://vishnudhat.tiiny.site', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'Go',
    'JavaScript',
    'React.js',
    'Node.js',
    'Vector Databases',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'Kubernetes',
    'Terraform',
    'Jenkins',
    'ArgoCD',
    'Cloud Computing (AWS, Azure)',
  ],
  experiences: [
    {
      company: 'GE Healthcare',
      position: 'Sr. Devops Engineer',
      from: 'July 2023',
      to: 'Present',
      companyLink: 'https://www.gehealthcare.de/',
    },
    {
      company: 'Saidea',
      position: 'IT Solutions Architect',
      from: 'February 2021',
      to: 'February 2023',
      companyLink: 'https://www.saidea.it/',
    },
  ],
  certifications: [
    {
      name: 'Microsoft Certified Azure AI Certification',
      body: 'Earners of the Azure AI Fundamentals certification have demonstrated foundational knowledge of machine learning (ML) and artificial intelligence (AI) concepts and related Microsoft Azure services.',
      year: 'April 2023',
      link: 'https://www.credly.com/badges/f08986ed-18f9-4750-a07f-9a7d08f103cd/linked_in_profile',
    },
    {
      name: 'Huawei HCIA-Datacom Associate',
      body: 'The Huawei Certified ICT Associate-Datacom (HCIA-Datacom) course aims to equip learners with the foundational knowledge and skills required to construct and manage small to medium-sized data communication networks.',
      year: 'July 2022',
      link: 'https://e.huawei.com/en/talent/#/cert/certificate-verification?CertificateNo=010103901417808842611790466',
    },
    {
      name: 'Site Reliability Engineering: Measuring and Managing Reliability',
      body: 'Google Cloud Site Reliability Engineering: Measuring and Managing Reliability How to make systems reliable , Quantifying risks to and consequences of SLOs and Understanding SLIs, SLOs and SLAs.',
      year: 'October 2022',
      link: 'https://www.coursera.org/account/accomplishments/verify/EPRP5NARSGPS',
    },
  ],
  educations: [
    {
      institution: 'Politecnico Di Torino',
      degree: 'Masters degree',
      from: '2016',
      to: '2020',
    },
    {
      institution: 'Anna University',
      degree: 'Bachelors Degree',
      from: '2010',
      to: '2014',
    },
  ],
  publications: [
    {
      title: 'Machine Learning for Decentralized and Distributed Intelligent Mesh network in Agritech Sector',
      journalName: 'International Wine Journal',
      authors: 'Vishnudhat Natarajan, Matteo Stoppa',
      description: 'To understand the winery environment and fermentation especially in wine-making and wine storage. To study the monitoring system with reference to data collected with the monitoring device and perform Time-series Data analysis on the given data to Forecast Predictions and Classify the wooden barrels based on the volume of Evaporation to stably maintain the fermentation environment in the winery area for premium wine-making.',
    },
    // {
    //   title: 'Publication Title',
    //   conferenceName: 'Conference Name',
    //   journalName: '',
    //   authors: 'John Doe, Jane Smith',
    //   link: 'https://example.com',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // },
  ],
  // Display articles from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'arifszn', // to hide blog section, keep it empty
  //   limit: 2, // How many articles to display. Max is 10.
  // },
  // googleAnalytics: {
  //   id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  // },
  // Track visitor interaction and behavior. https://www.hotjar.com
  // hotjar: {
  //   id: '',
  //   snippetVersion: 6,
  // },
  // themeConfig: {
  //   defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/vishn9893/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
