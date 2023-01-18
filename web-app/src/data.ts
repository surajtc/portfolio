import { Resume } from "./types/resume";

const data: Resume = {
  basic: {
    name: "Suraj T C",
    phone: "240-424-3295",
    mail: "mail.surajtc@gmail.com",
    location: "College Park, MD",
    links: ["linkedin.com/in/surajtc", "github.com/surajtc"],
  },
  summary:
    "Graduate student with a strong foundation in machine learning and experience with various algorithms and frameworks. Seeking an opportunity where I can apply my skills and continue to learn and grow.",
  education: [
    {
      degree: "Masters of Professional Studies in Machine Learning",
      university: "University of Maryland, College Park",
      from: "Aug 2022",
      to: "May 2024",
    },
    {
      degree: "Bachelor of Engineering in Computer Science",
      university: "Visvesvaraya Technological University, Belagavi",
      from: "Aug 2017",
      to: "Aug 2021",
    },
  ],
  experience: [
    {
      position: "Frontend Developer (Remote)",
      company: "Mainteny, Oslo",
      from: "Dec 2021",
      to: "Aug 2022",
      description:
        "Developed web interface for maintenance companies using React.js for service and property managers, providing end-to-end solution for maintenance tasks.",
    },
    {
      position: "Machine Learning Intern",
      company: "IC Solutions, Bengaluru",
      from: "Sep 2020",
      to: "Nov 2020",
      description:
        "Demonstrated strong problem-solving abilities through the creation of custom regression models and a deep understanding of various regression and classification algorithms.",
    },
  ],
  projects: [
    {
      name: "COVID-19 Detection from Chest X-Rays using Deep Learning",
      description:
        "Developed web application for radiologists and implemented deep learning neural network to accurately identify infected chest x-rays.",
    },
    {
      name: "LSTM-Based Weather Forecasting with Real-Time Data Visualization",
      description:
        "Developed a weather forecasting system using LSTM to predict temperature, humidity, and wind speed. Data was collected from the Open Weather API and a web dashboard was built to visualize the forecasts.",
    },
    {
      name: "Automobile Price Prediction",
      description:
        "Performed exploratory data analysis on an automobile dataset and extracted relevant information for training a regression model. Trained and compared multiple models to determine the best fit.",
    },
  ],
  skills: [
    {
      group: "Language & Database:",
      skills: ["Python", "C++", "Java", "TypeScript", "MySQL", "MongoDB"],
    },
    {
      group: "Framework & Libraries:",
      skills: ["React.js", "Flask", "TensorFlow", "PyTorch", "Keras"],
    },
    {
      group: "Developer Tools:",
      skills: ["Linux", "Jupyter", "Git", "Docker"],
    },
  ],
  certifications: [
    { name: "Machine Learning Specialization - University of Washington" },
    { name: "Database and SQL for Data Science - IBM" },
    { name: "Python for Everybody - University of Michigan" },
  ],
};

export default data;
