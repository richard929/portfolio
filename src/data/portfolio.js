const portfolioData = {
  logo: "img/logo.png",
  logoWhite: "img/logo.png",
  name: "Richard Zhan",
  role: "Software Engineer",
  intro: "with strong automation development skills and background working with engineering and quality teams. Highly skilled in Python, Node.js, React.js, Angular and AWS with proven history of best-in-class development.",
  projects: [
    {
      id: 0,
      title: "EnsureDR Dashboard",
      imageUrl: "img/portfolio/EnsureDR Dashboard.png",
      link: "",
      codeLink: "",
      description:
        "The idea of the project is to visualize recovery ready data of various system resources, such as CPU, RAM and Network. It's a React.js based project and I used Redux for global state management. I had to use several chart libraries to visualize the data as the client wanted. I used Gauge Chart, Donut Chart and Chart.js. I implemented pixel-perfect UI from Figma design. It is fully tested for cross browser compatibility and mobile responsive.",
      technology: ["React", "Redux", "Gauge Chart", "Donut Chart", "Chart.js"],
    },
    {
      id: 1,
      title: "Coherent DMS",
      imageUrl: "img/portfolio/Coherent DMS.png",
      link: "",
      codeLink: "",
      description:
        "The client asked me to build an internal website to manage the company resources. He didn't provide any designs, so I used the React Admin template which provides a clean UI based on Material UI. The back-end is built with DRF and is integrated with React Admin front-end. React Admin is a robust React.js template which has its own data provider and it can adapts to any backend(REST, GraphQL, SOAP, etc). I defined data models for the company resources - categories, documents, text entries, forms and users.",
      technology: ["Python", "Django", "AWS EC2", "React", "React Admin", "Material UI"],
    },
    {
      id: 2,
      title: "Turnout Nation",
      imageUrl: "img/portfolio/Turnout Nation.png",
      link: "https://www.turnoutnation.org/",
      codeLink: "",
      description:
        "This is an online voting platform which has millions of election data records. I used MERN stack for the project. The back-end is built really powerful for searching election data thanks to ElasticSearch. Swagger API documentation, Sentry logging and New Relic performance monitoring help the developers maintenance and future improvement.",
      technology: [
        "Node.js",
        "MongoDB",
        "AWS EC2",
        "ElasticSearch",
        "Swagger",
        "New Relic",
        "Sentry",
        "Chai",
        "React.js",
        "Jasmine",
      ],
    },
    {
      id: 3,
      title: "YPrime Study Builder",
      imageUrl: "img/portfolio/YPrime Study Builder.png",
      link: "",
      codeLink: "",
      description:
        "YPrime develops a clinical trial software that offers data collection and information management solutions for bio-pharmaceutical companies. I worked in a 7-person Agile team, weekly sprints. I attended daily standups for progress evaluation. I mainly focused on building the front-end pages using Angular, writing e2e tests using Protractor and unit tests using Jasmine and Karma. At the end of each sprint, all the tasks were finished bug-free and fully-optimized after passing all the scenarios. I helped business analysts write Cucumber scenarios.",
      technology: [
        "Angular",
        "Agile",
        "Azure",
        "Protractor",
        "Cucumber",
        "Jasmine",
        "Karma",
      ],
    },
    {
      id: 4,
      title: "Preference Center",
      imageUrl: "img/portfolio/Preference Center.png",
      link: "",
      codeLink: "",
      description:
        "Arizent is a business information company empowering people in financial and professional services to lead. They wanted to build a preference center to manage the email preferences of all the companies subscribed. I used Angular for this project. The page designs are provided in Adobe XD format. Thanks to Angular Material-UI, I built clean and user-friendly pages with proper animations. On the other hand, I designed several email templates for email campaigns.",
      technology: ["Angular", "Angular Material UI", "AWS Cognito"],
    },
    {
      id: 5,
      title: "Zerto Labs",
      imageUrl: "img/portfolio/Zerto.png",
      link: "",
      codeLink: "",
      description:
        "The client wanted to integrate Zerto Labs as an iframe into a React.js portal for better management. AWS Amplify framework is used for this project. It really provided me with a fast paced development process. Clean UI is provided for the users using Bootstrap.",
      technology: ["React.js", "AWS Amplify", "AWS Cognito", "AWS S3"],
    },
    {
      id: 6,
      title: "Memoriam.Care",
      imageUrl: "img/portfolio/Memoriam.Care.png",
      link: "https://www.memoriam.care/",
      codeLink: "",
      description: "This project was started as part of the #BuildForCovid19 Global Hackathon, as a way to help families come together and celebrate the lives of their loved ones in an era of physical distancing. I was in charge of back-end development which is using Express.js. I integrated Zoom API for event management. I also used Sequelize and Bookshelf.js for ORM and MailGun for sending emails.",
      technology: ["Express.js", "Zoom API", "MSSQL", "Sequelize", "Bookshelf", "Mailgun"],
    }
  ],
  skills: [
    {
      name: "HTML/CSS",
      percentage: 99,
    },
    {
      name: "Javascript",
      percentage: 99,
    },
    {
      name: "Node.js",
      percentage: 95,
    },
    {
      name: "Python",
      percentage: 90,
    },
    {
      name: "React",
      percentage: 90,
    },
    {
      name: "Angular",
      percentage: 90,
    },
    {
      name: "Amazon Web Services",
      percentage: 80,
    },
  ],
  workExp: [
    {
      title: "Software Engineer",
      date: "Mar 2019- Jan 2020",
      company: "Next Idea Tech",
      description:
        "Lead Developer role in several projects. Programmed applications and tools using TypeScript and Python object-oriented languages with goals for code abstraction, stability and reuse.",
    },
    {
      title: "Full-Stack Developer",
      date: "Oct 2017 - Sep 2018",
      company: "Neusoft",
      description:
        "Developed online voting system with experienced Agile Team.",
    },
    {
      title: "Full-Stack Developer",
      date: "Jan 2017 - Jun 2017",
      company: "SAP",
      description: "Completed Text Editor project in Django/React.",
    },
    {
      title: "Senior Back-End Developer",
      date: "Jan 2016 - Dec 2016",
      company: "Objectiva",
      description:
        "Focused on micro services solutions including AWS Lambda, RDS and S3.",
    },
    {
      title: "Back-End Developer",
      date: "Aug 2014 - Nov 2015",
      company: "JF computer systems Co. Ltd",
      description:
        "Worked as a full-stack web developer in the Agile team of 7 people.",
    },
  ],
};

export default portfolioData;
