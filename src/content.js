// Profile facts supplied in conversation and résumé. Conflicting dates remain
// unset until confirmed; see docs/content-notes.md.
export const profile = {
  resume: null, // Add the final résumé URL here to show the download button again.
  github: 'https://github.com/prabesh013',
  linkedin: 'https://www.linkedin.com/in/prabesh-nepal/',
};

export const education = [
  { title: 'MS in Computer Science', organization: 'Northeastern University, Boston', date: 'Jan 2025 – Present' },
  { title: 'BE in Computer Engineering', organization: 'Kantipur Engineering College, Tribhuvan University, Nepal', date: null, url: 'https://kec.edu.np/' },
];

export const experience = [
  {
    title: 'Instructor (Technical)', organization: 'Shivapuri Secondary (Technical) School and College, Kathmandu', date: '2022 – 2024',
    description: 'Taught programming, web design, and computer networks to students in the technical education program. Supervised software projects, reviewed curriculum materials, and coordinated practical learning activities.',
  },
  {
    title: 'Teaching Assistant (Data Analytics)', organization: 'Genese Cloud Academy, Nepal', date: null,
    description: 'Mentored 100+ learners across Nepal and Pakistan. Helped develop AWS Data Analytics lessons and labs, and taught Python, data analysis, Linux, and cloud computing.',
    url: 'https://www.genesecloud.academy/',
  },
  {
    title: 'Research Assistant', organization: 'Genese Solution, Nepal', date: null,
    description: 'Contributed to a Nepali voice cloning project using Tacotron, preparing audio datasets and preprocessing pipelines to support speech synthesis research.',
    url: 'https://www.genesesolution.com/',
  },
  {
    title: 'Associate Software Engineer & Trainee', organization: 'Vacker360, Nepal', date: '2020 – 2021',
    description: 'Built backend services and REST APIs, integrated IBM Watson Assistant chatbots, and contributed to a sales prediction proof of concept using historical data.',
    url: 'https://www.vacker360.com/',
  },
  {
    title: 'Software Engineer Intern', organization: 'Leapfrog Technology, Nepal', date: '2020',
    description: 'Built responsive web learning projects with HTML, CSS, and JavaScript while practicing version control, testing, and team collaboration.',
    url: 'https://www.lftechnology.com/',
  },
];

// These three are also the owner's selected highlights for a future résumé.
export const featuredProjects = [
  { title: 'Student Housing', stack: 'Flask · MySQL', description: 'A student housing portal with role-based authentication, an admin dashboard, lease management, and SQL procedures and triggers. Built for CS5200 Database Management Systems.', preview: 'https://student-housing-eight.vercel.app/', previewLabel: 'Live demo' },
  {
    title: 'Annapurna Food & Spices',
    stack: 'Next.js · TypeScript · Express · PostgreSQL',
    description: 'A live client e-commerce application serving Nepali grocery shoppers in the United States. Built with AI-assisted development, with product browsing, Stripe checkout, USPS shipping, and inventory and order management.',
    preview: 'https://www.shopannapurna.com/',
    previewLabel: 'Live site',
  },
  {
    title: 'Scalable Flight Delay Classification',
    stack: 'Scala · Apache Spark · Amazon EMR · S3',
    description: 'Distributed exact KNN for arrival-delay classification using 5.8 million training records. A 1,000-record evaluation required 5.8 billion distance comparisons; scaling from one to four EMR workers delivered a 2.53× speedup. Built for CS6240 Large-Scale Parallel Data Processing.',
    source: 'https://github.com/prabesh013/Distributed-KNN-for-Flight-Delay-Prediction/tree/main',
  },
];

export const projects = [
  { title: 'Mini OCR', stack: 'Python · LeNet CNN', description: 'Character-level recognition of English letters and digits using the LeNet architecture, with a graphical interface and separately trained character and digit models.', source: 'https://github.com/prabesh013/MiniOCR' },
  {
    title: 'Research Paper Manager', stack: 'Flask · SQLite',
    description: 'A research paper management application with user login, document uploads and downloads, and database CRUD workflows.',
    preview: 'http://prabeshnepal777.pythonanywhere.com/',
    previewLabel: 'Live site',
    source: 'https://github.com/thedusbin/crud_app/tree/prabesh',
  },
  { title: 'Calendar Application', stack: 'Java · Swing · MVC', description: 'A Google Calendar replica with event creation, editing, deletion, and calendar views. Led development of the Controller layer for CS5010 Programming Design Paradigms.' },
  {
    title: 'Handwritten Arithmetic Game', stack: 'JavaScript · HTML Canvas',
    description: 'A timed arithmetic game powered by handwritten digit recognition. Players choose a difficulty level, draw their answers on a canvas, and earn points before the timer runs out.',
    source: 'https://github.com/prabesh013/Leapfrog/tree/master/JS%20Final%20Assignment',
    preview: 'https://prabesh013.github.io/Leapfrog/JS%20Final%20Assignment/index.html',
    previewLabel: 'Play game',
  },
];

export const teachingStory = {
  "title": "I never thought I would become a teacher",
  "subtitle": "From learning to code in ninth grade to teaching coding to ninth-grade students.",
  "status": "Draft",
  "introduction": "I learned to code in ninth grade. I never imagined that I would one day be teaching coding to ninth-grade students myself. Standing in front of a classroom and giving lectures was not how I pictured my future. Then an opportunity to become a teaching assistant came along. I took it—and I was hooked.",
  "sections": [
    {
      "heading": "An unexpected beginning",
      "paragraphs": [
        "While I was working at Vacker360, I took on an independent teaching assistant contract through Genese Academy. I guided students from the Khyber Pakhtunkhwa region of Pakistan over Zoom, teaching Bash, Python and its data analysis libraries, and AWS services such as EC2, RDS, and S3.",
        "The feedback from students encouraged me. That experience was followed by a research assistant role at Genese Solution, where I worked on datasets for a Nepali voice cloning system. Teaching continued alongside the research. I also taught in the AWS AI/ML Interestship program—the same program I had once joined as a trainee—and later led other teaching assistants."
      ]
    },
    {
      "heading": "Finding my place at Shivapuri",
      "paragraphs": [
        "My experience at Genese drew me further into teaching. I accepted an offer to teach programming and web design at Shivapuri Secondary School and College, a government-backed community school in Nepal.",
        "The transition was not immediately comfortable. I remember feeling that I did not quite fit in. Many of my colleagues were older and more experienced, and our differences in perspective took some getting used to. At times, I questioned my decision to leave the industry.",
        "Over time, I found a sense of belonging. Students approached me with questions about their coursework and, sometimes, concerns beyond the classroom. In my second year, I became the class teacher for a group of tenth-grade students. Those relationships became an important part of my experience at the school."
      ]
    },
    {
      "heading": "Learning by doing",
      "paragraphs": [
        "I ran most of my classes in the computer lab. For programming and web design, I wanted students to have opportunities to apply what we discussed. They worked with C, C++, HTML, CSS, and JavaScript, and I supported their software projects from requirements gathering through debugging and deployment.",
        "My work also included reviewing curriculum materials and preparing students for on-the-job training. Having worked in software development, I wanted to help them connect their lessons with the tools and practices they would encounter at work. I also helped colleagues who were less comfortable with technology."
      ]
    },
    {
      "heading": "The “Ah, okay!” moments",
      "paragraphs": [
        "Teaching programming brought its own challenges. Students were building their foundations in computer science, and English was an additional barrier for some. Explaining a concept meant paying attention to what students already understood and finding a way to make the next idea accessible.",
        "Their enthusiasm made the effort worthwhile. I remember the shared reactions when a concept finally made sense: “Ah, okay!” Those moments gave me a sense of satisfaction and made me feel that my work as a teacher mattered.",
        "I had begun learning to code at their age. Now I was helping students take those same early steps. That connection is one of the reasons this chapter means so much to me."
      ]
    },
    {
      "heading": "What I took with me",
      "paragraphs": [
        "Teaching helped me communicate with people from different backgrounds and showed me how much potential students have when they receive practical guidance. It also made me more aware of the obstacles they face, including outdated course materials, limited facilities, and the cost of further training.",
        "The experience shaped how I think about computer science education. Students need a grounding in theory, opportunities to put it into practice, and support as they learn to explore and solve problems independently.",
        "I never expected teaching to become part of my story. Looking back, it is a chapter I am grateful to have lived—from the student learning to code in ninth grade to the teacher helping another group of ninth-graders begin."
      ]
    }
  ]
};
