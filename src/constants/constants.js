import { DiSmashingMagazine  } from 'react-icons/di';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

export const projects = [
  {
    title: 'Fake News Filtration',
    description: "Engineered a state-of-the-art fake news classification model leveraging BERT, RoBERTa, and deep learning, achieving 95.26% accuracy on a real-world dataset with 50,000+ news articles. Designed an end-to-end machine learning pipeline, implementing data preprocessing, grid search hyperparameter tuning (testing 20+ parameter combinations), and model evaluation.",
      image: '/images/fake_news.png',
      tags: ['Python', 'CNN', 'NLP', 'ML'],
    visit: 'https://github.com/SalmanAsh/Data-Visualization-and-Data-Analysis.git',
    pdf: '/pdf/Salman_Ashraf_Report.pdf',
    id: 0,
  },
  {
    title: 'Air Quality Analysis',
    description: "Designed and implemented a high-accuracy machine learning model for air quality prediction, employing binary linear classification with gradient descent and L2 regularization, achieving a remarkable 97.08% accuracy. Created a multi-layer perceptron regressor for precise carbon monoxide level prediction, achieving an MSE of 0.1827 and an R-squared R² score of 0.9032, significantly enhancing predictive performance.",
      image: '/images/air_quality.jpg',
      tags: ['Python', 'Numpy', 'Matplotlib', 'Pandas'],
    id: 1,
  },
  {
    title: 'Stendhal MMORP Game',
    description: "Collaborated with a cross-functional team on an open-source Java codebase, introducing three major features for NPC behaviors and real-time combat mechanics, enhancing customer experience for 20,000 users. Resolved seven critical issues, enhancing the multi-player experience for thousands of users, and coordinated with the release team to ensure smooth implementation and deployment.",
      image: '/images/Stendhal.png',
      tags: ['Java', 'JUnit', 'Ant', 'Jenkins'],
    id: 2,
  },
  {
    title: 'Eventlite',
    description: "Spearheaded the development of an event management application, streamlining event and venue management processes, which led to a 40% improvement in operational efficiency and ensured alignment with evolving business requirements. Implemented RESTful APIs for seamless data integration and enhanced system security using Spring Security, boosting security measures by 35% and reducing data retrieval times by 50%.",
      image: '/images/events.jpg',
      tags: ['Java', 'REST,', 'JavaScript', 'HTML/CSS'],
    id: 3,
  },
  {
    title: 'Data Visualisation',
    description: "Analysed 7 data sets to generate visualisations identifying weather patterns, temperature changes, and correlations between different data. Implemented charts showcasing earthquake activity across 100+ nations providing a comprehensive view of seismic events with a 95% accuracy.",
      image: '/images/data visualization.jpg',
      tags: ['Python', 'Numpy', 'Matplotlib', 'Pandas'],
    visit: 'https://github.com/SalmanAsh/Data-Visualization-and-Data-Analysis.git',
    id: 4,
  },
];

export const TimeLineData = [
  { year: 2017, text: 'Started my journey', },
  { year: 2018, text: 'Worked as a freelance developer', },
  { year: 2019, text: 'Founded JavaScript Mastery', },
  { year: 2020, text: 'Shared my projects with the world', },
  { year: 2021, text: 'Started my own platform', },
];

export const experiences = [
  {
    title: "Graduate Software Engineer",
    company_name: "Arup",
    icon: AiFillGithub,
    iconBg: "#000000",
    date: "Sept 2025 - Present",
    points: [
      "Developing and maintaining web applications using common related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Customer Service Assistant",
    company_name: "Tesco UK",
    icon: AiFillGithub,
    iconBg: "#ffffffff",
    date: "Oct 2020- Aug 2025",
    points: [
      "Delivered exceptional customer service by dedicating over 2000+ hours to assisting customers with diverse inquiries, ensuring a seamless shopping experience.",
      "Mentored and trained new team members while collaborating with a team of 20+ colleagues to efficiently resolve customer issues, contributing to a store-wide customer satisfaction rating of over 90%.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Ocado Group",
    icon: AiFillGithub,
    iconBg: "#000000",
    date: "July 2024 - Sept 2024",
    points: [
      "Designed and implemented backend system using Python Django, optimizing data processing by 15% through modular architecture, and integrated GitHub Actions for secure contributions via OAuth-authenticated pipelines.",
      "Developed the frontend using React, TypeScript, Material UI, and Redux Toolkit, creating a responsive and dynamic user interface aligned with modern development standards.",
      "Deployed cloud services on Google Cloud Platform, achieving a 20% increase in contributions, while enhancing team productivity by conducting research on emerging technologies, including Dev Containers and AWS cloud services.",
    ],
  },
  {
    title: "Information Technology Intern",
    company_name: "Bright Network",
    icon: AiFillGithub,
    iconBg: "#ffffff",
    date: "June 2022 - June 2022",
    points: [
      "Developed a highly efficient path-finding algorithm for Amazon's self-driving delivery vehicles, optimizing route calculations on a 2-D grid with a 95% accuracy rate.",
      "Partnered with developers and architects to solve tasks using popular algorithms and data structures, enhancing system efficiency and meeting technical design specifications.",
    ],
  },
];