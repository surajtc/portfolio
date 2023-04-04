import Link from "next/link";

export default function Intro() {
  return (
    <div className="p-4 md:p-0">
      <h5 className="text-3xl pt-2 pb-4 leading-wide font-bold tracking-tight hidden md:block">
        Suraj T C&mdash; Graduate Student, <br />
        University of Maryland
      </h5>
      <p className="text-lg pb-4 font-normal leading-relaxed  tracking-tight text-gray-700 dark:text-gray-400">
        {`Suraj is a graduate student studying Machine Learning at the University
        of Maryland, College Park. With a passion for applying machine learning
        to solve real-world problems, Suraj has gained expertise in various
        algorithms and frameworks and is committed to advancing his knowledge
        and skills in the field.`}
      </p>
      <p className="text-lg font-normal leading-relaxed tracking-tight text-gray-700 dark:text-gray-400">
        {`Suraj has prior industry experience as a Software Engineer at `}
        {
          <Link
            href="https://www.mainteny.com/"
            target="_blank"
            className="underline underline-offset-2"
          >
            Mainteny
          </Link>
        }
        {`, where he contributed to building and automating end-to-end maintenance tasks, and as a ML Researcher at `}
        {
          <Link
            href="https://icsoln.com/"
            target="_blank"
            className="underline underline-offset-2"
          >
            IC Solutions
          </Link>
        }
        {`, where he assisted in solving business problems using machine learning. He holds a bachelor's degree in Computer Science from Visveswaraya Technological University, India.`}
      </p>
    </div>
  );
}

// Suraj T Chandrashekhar is a graduate student in Machine Learning with a strong foundation in the field and experience with various algorithms and frameworks. He is seeking an opportunity to apply his skills and continue to learn and grow. Suraj has worked as a Software Engineer at Mainteny, where he implemented an end-to-end software solution that streamlined maintenance operations, resulting in a 50% increase in efficiency. He also worked as a Machine Learning Research Intern at IC Solutions, where he fine-tuned and trained a regression model using XGBoosting to predict used vehicle prices, achieving an accuracy of 94.2% and R2 of 0.92. Suraj's technical skills and interests include ML Research, Computer Vision, Natural Language Processing, Data Science, MLOps, and Software Development, and he has experience with a variety of languages and frameworks, including C++, Python, R, Flask, SQL, MongoDB, Tableau, TypeScript, React.js, and ML libraries such as TensorFlow, PyTorch, Scikit-learn, Matplotlib, OpenCV, Spacy, NLTK, and HuggingFace. Suraj has completed relevant coursework in Machine Learning, Data Science, Deep Learning, Computer Vision, Natural Language Processing, and Optimization as part of his Master of Professional Studies in Machine Learning at the University of Maryland. In addition, he has worked on several projects, including developing a chatbot for First Aid Assistance, crafting an image-to-image art style translator, creating a weather forecasting system, developing a system for parsing and categorizing resumes, and building a Tableau dashboard to show the S&P 500 stock growth over the past 70 years and stock distribution across sectors. Suraj has also been awarded several accolades, including being the 2nd runner-up in a national hackathon by IEEE Bangalore Section and achieving 1st place at a state-level project competition hosted by Maharaja Institute of Technology, Mysore. He has served as a Teaching Assistant for several courses, providing support in grading assignments and organizing class schedules. Suraj is a Machine Learning Specialization by the University of Washington and Database and SQL for Data Science by IBM. He has also volunteered for data entry at PHC Mellahalli and served as an Intramural Sports Official at UMD College Park, enforcing rules and maintaining the integrity of intramural flag football, volleyball, and basketball games.
