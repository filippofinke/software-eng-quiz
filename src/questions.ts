const questions = [
  {
    question: "Ian Sommerville defines Software Engineering as...",
    answer:
      "an engineering discipline that is concerned with all aspects of software production (from initial conception to operation and maintenance)",
    category: "Software Engineering",
  },
  {
    question: "What are the fundamental software engineering activities?",
    answer:
      "Software specification, software design and development, software validation and software evolution",
    category: "Software Engineering",
  },
  {
    question:
      "Software dependability includes a range of characteristics including reliability. What does this mean?",
    answer:
      "Dependable software should not cause physical or economic damage in the event of system failure",
    category: "Software Engineering",
  },
  {
    question: "What are the attributes of good software?",
    answer:
      "Good software should deliver the required functionality and performance to the user and should be maintainable, dependable and usable",
    category: "Software Engineering",
  },
  {
    question: "Software should be efficient. What does this mean?",
    answer:
      "That it should not make wasteful use of system resources such as memory and processor cycles. Efficiency therefore includes responsiveness, processing time, resource utilization, etc.",
    category: "Software Engineering",
  },
  {
    question:
      "For custom software, evolution costs often exceed development costs. Why?",
    answer:
      "Because requirements change and evolve all the time. And so must software, as a consequence.",
    category: "Software Engineering",
  },
  {
    question:
      "Software dependability includes a range of characteristics including security, and safety. What does this mean?",
    answer:
      "Software has to be secure so that malicious users cannot access or damage the system",
    category: "Software Engineering",
  },
  {
    question: "What differences has the Internet made to software engineering?",
    answer:
      "Not only has the Internet led to the development of massive, highly distributed, service-based systems, it has also supported the creation of an “app” industry for mobile devices",
    category: "Software Engineering",
  },
  {
    question:
      "Software products may be developed for different general targets. What are they?",
    answer: "The general market or a particular customer",
    category: "Software Engineering",
  },
  {
    question: "Software should be maintainable. What does this mean?",
    answer:
      "It means that is must be written in such a way that it can evolve to meet the changing needs of customers",
    category: "Software Engineering",
  },
  {
    question:
      "What is the difference between software engineering and system engineering?",
    answer:
      "System engineering is concerned with all aspects of computer-based systems development including hardware, software and process engineering. Software engineering is part of this more general process.",
    category: "Software Engineering",
  },
  {
    question: "What are the best software engineering techniques and methods?",
    answer:
      "While all software projects have to be professionally managed and developed, different techniques are appropriate for different types of system",
    category: "Software Engineering",
  },
  {
    question:
      "What is the difference between software engineering and computer science?",
    answer:
      "Computer science focuses on theory and fundamentals; software engineering is concerned with the practicalities of developing and delivering useful software",
    category: "Software Engineering",
  },
  {
    question: "What are the costs of software engineering?",
    answer: "Roughly 60% are development costs, 40% are testing costs",
    category: "Software Engineering",
  },
  {
    question:
      "Compared to the more traditional engineering disciplines, we can say that Software Engineering is... (1 word)",
    answer: "young",
    category: "Software Engineering",
  },
  {
    question: "What are the key challenges software engineering must face?",
    answer:
      "Increasing diversity, tighter delivery schedules, and dependable software",
    category: "Software Engineering",
  },
  {
    question: "Ian Sommerville defines software as...",
    answer: "computer programs and associated documentation",
    category: "Software Engineering",
  },
  {
    question:
      "Software must be acceptable to the type of users for which it is designed. What does this mean?",
    answer:
      "This means that it must be understandable, usable, and compatible with other systems that they use",
    category: "Software Engineering",
  },
  {
    question:
      "What are the 3 phases of the improvement cycle of software processes?",
    answer: "Measure, analyze, modify.",
    category: "Software Processes",
  },
  {
    question:
      "What is that one constant and underlying element in all software processes, that must always be accounted for (1 word)?",
    answer: "Change",
    category: "Software Processes",
  },
  {
    question:
      "Software evolution is that software process that takes place... when?",
    answer: "When software systems must be changed to satisfy new requirements",
    category: "Software Processes",
  },
  {
    question:
      "One of the general process models is the waterfall model. Describe it briefly in one sentence.",
    answer:
      "A model that organizes the processes activities in separate and sequential phases and delivers the final system only at the end",
    category: "Software Processes",
  },
  {
    question:
      "One of the general process models is the integration and configuration model. Describe it briefly in one sentence.",
    answer:
      "A model that delivers the final system by reusing existing component, by configuring and integrating them based on the context of the project",
    category: "Software Processes",
  },
  {
    question:
      "One of the general process models is the incremental model. Describe it briefly in one sentence.",
    answer:
      "A model that organizes the processes activities in interleaved phases and develops and delivers the system in subsequent versions (increments)",
    category: "Software Processes",
  },
  {
    question:
      "Software engineers should always aim at improving software processes to improve the quality of software products, reduce development time and effort, and reduce costs. What should software processes refinement and change be based on?",
    answer: "Measurements, objective data and their analysis",
    category: "Software Processes",
  },
  {
    question: "What are the three main general process models?",
    answer:
      "Waterfall model. Incremental model. Integration and configuration model.",
    category: "Software Processes",
  },
  {
    question: "What do general process models define?",
    answer:
      "The approach to software development. The organization of software processes.",
    category: "Software Processes",
  },
  {
    question: "Iterative process models approach change with... (1 word)",
    answer: "tolerance",
    category: "Software Processes",
  },
  {
    question:
      "Software design and development are those processes that ... serve what purpose?",
    answer: "Turn software specifications into executable software systems",
    category: "Software Processes",
  },
  {
    question: "Why is prototyping useful in certain circumstances?",
    answer:
      "Because it can be used to check requirements and/or feasibility and it helps anticipating change",
    category: "Software Processes",
  },
  {
    question:
      "Software processes are the set of activities aimed at ... software systems. What is the missing word?",
    answer: "producing",
    category: "Software Processes",
  },
  {
    question: "What does the waterfall process model approach change with?",
    answer: "With (very) little flexibility",
    category: "Software Processes",
  },
  {
    question: "Software validation deals with...",
    answer:
      "making sure that a software system complies with requirements and that it actually sastifies users' needs",
    category: "Software Processes",
  },
  {
    question: "Change Management is the process that is concerned with...",
    answer:
      "all of the activities around proposing, evaluating and implementing changes to a software system",
    category: "Configuration management",
  },
  {
    question: "Configuration management (CM) is concerned with...",
    answer:
      "...the policies, processes, and tools for managing changing software systems",
    category: "Configuration management",
  },
  {
    question: 'What is a "system release"?',
    answer:
      "It is a version of a software system that is distributed to customers",
    category: "Configuration management",
  },
  {
    question: "System building is the process of...",
    answer:
      "creating a complete, executable system by compiling and linking the system components, external libraries, configuration files, and other information",
    category: "Configuration management",
  },
  {
    question: "Version management is the process of...",
    answer:
      "...keeping track of different versions of software components and the systems in which these components are used",
    category: "Configuration management",
  },
  {
    question:
      "I want to make sure I have all my team mate's latest changes in my dev branch. What is the GIT command I use?",
    answer: "git pull",
    category: "Software Versioning",
  },
  {
    question: "What does the following GIT command do? git clone <URI>",
    answer:
      "It creates an identical local copy (clone) of the repository found at the given URL",
    category: "Software Versioning",
  },
  {
    question:
      "GIT does not allow multiple developers to work simultaneously at the same software component? True/False? Why?",
    answer:
      "False. GIT keeps track of changes and guarantees that they are merged (automatically, if possible, or by signalling conflicts and supporting their manual resolution, otherwise)",
    category: "Software Versioning",
  },
  {
    question:
      "In what way a Version Control System distinguishes different versions of the same component?",
    answer: "By assigning each version a unique ID",
    category: "Software Versioning",
  },
  {
    question:
      "I want to send my changes upstream with GIT. What is the command I use?",
    answer: "git push",
    category: "Software Versioning",
  },
  {
    question:
      "From an architectural point of view, a modern Version Control System belongs to one of two types. Which ones?",
    answer: "Centralized or distributed",
    category: "Software Versioning",
  },
  {
    question: "What is a branching model to a software development team?",
    answer:
      "It is a set of conventions and procedures team members agree on and follow in order to come to a managed software development process",
    category: "Software Versioning",
  },
  {
    question:
      "I am implementing a new feature and I want to avoid running the risk of losing my work. What do I do?",
    answer:
      "I push my feature branch onto a remote main repository so as to effectively create a shared backup and keep it synced as I make changes",
    category: "Software Versioning",
  },
  {
    question:
      'Two software engineers approach the implementation of a feature with GIT in the following different ways.\nWhose approach is best and why?\nDEV1\ngit checkout dev\ngit pull\ngit checkout -b feature-1234\n...\ngit add .\ngit commit -m "done feature 1234"\ngit checkout dev\ngit pull\ngit merge feature-1234\ngit push\nDEV2\ngit checkout dev\ngit pull\n...\ngit add .\ngit commit -m "done feature 1234"\ngit pull\ngit push',
    answer: "DEV1 conveniently isolates the changes in an separate branch",
    category: "Software Versioning",
  },
  {
    question:
      "In what way a Version Control System minimizes the use of storage space?",
    answer:
      "By ensuring that duplicate copies of identical files are not maintained",
    category: "Software Versioning",
  },
];

export default questions;
