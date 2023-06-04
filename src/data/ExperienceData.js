const ExperienceData = [
  {
    id: 1,
    jobtitle: "Freelance React Developer & UX Designer",
    companyname: "US Client",
    worktype: "Part-time",
    duration: "April 2023 - May 2023",
    location: "Remote",
    responsibility: [
      `Developer a Local Food Delivery App`,
      `Designed mock-ups and wire frames for the entire user flow Incorporated "Add to cart" 
      functionality, shopping cart functionality, and product filtering to enhance the user experience.`,
      `Designed and Implemented responsive UI layouts for product pages, cart, checkout pages and 
      contact pages using Bootstrap, React, Redux, Custom Hooks & REST API.`,
      `Used Geolocation Calls in ReactJS to display a curated list of local restaurants while providing
      real-time delivery tracking for both riders and customers.`,
      `Deployed the application built leveraging AWS Amplify, AWS Cognito, S3 bucket, EC2 
      instance, and CloudFront for optimal performance and scalability while ensuring the security
      and reliability of the application infrastructure.`
    ],
  },
  {
    id: 2,
    jobtitle: "Frontend Developer with AWS",
    companyname: "Indian Client",
    worktype: "Full-time",
    duration: "April 2023 - May 2023",
    location: "Remote",
    responsibility: [
      `Fintech Project`,
      `Built web application with an intake form, personal finance dashboard, simple calculator, 
      and auto-generated printed form`,
      `Integrated Plaid APIs to extract transaction data such as assets, liabilities, and monthly 
      expenses`,
      `Integrated AWS Textract to extract certain income and tax data`,
      `Developed scalable and secure app using AWS managed services such as Lambda and 
      AWS S3`,
    ],
  },
  {
    id: 3,
    jobtitle: "Frontend Developer",
    companyname: "BNewton",
    worktype: "Full-time",
    duration: "Nov 2018 - March 2023",
    location: "Hybrid",
    responsibility: [
      `Guided a team of 70 Instagram growth specialists and over 5 team leaders.`,
      `Collaboratively designed and developed an intuitive and responsive user interface for a 
        learning style evaluation tool, utilizing cutting-edge technologies including React Context, 
        Next.js and GraphQL to streamline UX paired with high-performance functionality.`,
      `Designed and implemented a Customer-Facing Dashboard, displaying Real-Time Data 
        using Next.js as the framework, Tailwind CSS for styling, Custom Hooks for optimized 
        functionality, and JWT Authentication for secure user access to deliver a highly performant 
        dashboard, providing clear and actionable insights for customers.`,
      `Added functionality for the instructors to developer presentations with photographs, videos, 
      and sound clips with customization using GraphQL.`,
      `Used React-Router to turn application into Single Page Applications`,
      `Used Middleware, Redux-Promise in application to retrieve data from Python Back-End and 
      to perform RESTUL services`,
      `Optimized student portal home page load times by 52% through the use of caching and 
      minification techniques`,
      `Developed unit tests to ensure code integrity and reduce the number of bugs found in 
      production using JEST & CircleCI`,
      `Hosted the application on AWS EC2, storing images in S3 buckets, implemented load 
      balancing and auto scaling to ensure high availability and efficient resource utilization.`
    ],
  },
  {
    id: 4,
    jobtitle: "Freelance Web Developer & Designer(UI/UX)",
    companyname: "Freelancing",
    worktype: "Full-time",
    duration: "Jan 2015 - Oct 2018",
    location: "Remote",
    responsibility: [
      `Developed a 28+ responsive websites that is optimized for both desktop and mobile devices, 
      Implemented 34+ single-page application using React and Redux that improved overall 
      performance and usability`,
      `Utilized HTMLX, CSSX, and JavaScript to create a dynamic, interactive user interface that 
      improved user experience`,
      `Created reusable components to reduce code duplication and ease future maintenance`,
      `Implemented authentication and authorization using JWT tokens`
    ],
  },
];

const EducationData = [
  {
    name: "freeCodeCamp",
    status: "JavaScript Algorithms and Data Structures",
    year: "2012",
  },
  {
    name: "Udemy",
    status: "Ba, Psychology",
    year: "2012 - 2014",
  },
  {
    name: "MNNIT, Allahabad",
    status: "B.Tech",
    year: "2008 - 2012",
  },
];

const CertificationData = [
  {
    name: "Photoshop 2021 Essential Training: Design",
    source: "Lynda.com",
    date: "Issued Sept 2022 · No Expiration Date",
    // creditUrl:
    //   "https://www.coursera.org/account/accomplishments/certificate/9X4535T5LVXG",
  },
];

export { ExperienceData, EducationData, CertificationData };
