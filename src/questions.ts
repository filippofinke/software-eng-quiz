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
  {
    question: 'A "Software dependency" is simply defined as...',
    answer:
      "Whatever piece of code that is relied upon for a digital service to work properly",
    category: "Software Dependencies",
  },
  {
    question:
      "I need a password hashing algorithm. I decide to develop my own. Am I making a good decision? Why?",
    answer:
      "No. The problem has already been solved. My implementation can only be worse than those available.",
    category: "Software Dependencies",
  },
  {
    question:
      "In developing a software product I want to re-use as much existing code as possible. Indicate at least two reasons why this statement is true or false.",
    answer:
      "It is true. Re-using existing code speeds up development and reduces the risks of bugs.",
    category: "Software Dependencies",
  },
  {
    question:
      "In a Java context, what is the name of a dependencies management tool?",
    answer: "Maven",
    category: "Software Dependencies",
  },
  {
    question: "Software dependencies raise an important issue. What is it?",
    answer: "Trust",
    category: "Software Dependencies",
  },
  {
    question:
      'For the software product I am developing I need a mathematical library. I decide to download one and "vendor" it in my project structure. Is this a good approach?',
    answer:
      "Rare cases excluded, this is a bad choice. The use of a dependencies management tool is in general a better choice.",
    category: "Software Dependencies",
  },
  {
    question:
      "A software dependencies management tool typically relies on an Internet repository. What risk does this entail and how can it be mitigated?",
    answer:
      "The risk is linked to the availability of the repository. We can therefore possibly create our own mirror.",
    category: "Software Dependencies",
  },
  {
    question:
      "For a given software product I am developing, I define a dependency without fixing its version number. My dependencies management tool will therefore always download the latest available version. When and why is this a good decision and when is it not?",
    answer:
      "It is a good decision only if I can test the dependency systematically (functionality, security, performance, ...). Otherwise it is a bad decision.",
    category: "Software Dependencies",
  },
  {
    question: 'What is a "transitive dependency"?',
    answer: "A dependency of a dependency",
    category: "Software Dependencies",
  },
  {
    question: 'What is "dependency hell"?',
    answer: "It is a phenomenon in which dependencies cannot be resolved",
    category: "Software Dependencies",
  },
  {
    question:
      "With mvn (Maven) what is the phase normally linked to the building of the final distributable artifact?",
    answer: "package",
    category: "Software Build",
  },
  {
    question:
      "What is the difference between a statically linked and a dynamically linked executable object?",
    answer:
      "A statically linked executable packages all its dependencies internally. A dynamically linked executable contains external references to its dependencies, which are then loaded at run-time as needed.",
    category: "Software Build",
  },
  {
    question: "The build process typically involves 3 systems. Which ones?",
    answer: "Development, build and target systems",
    category: "Software Build",
  },
  {
    question:
      "A software system must always be built from a clean environment. True/False? Why?",
    answer:
      "True. A clean environment guarantees the build process is not influenced (positively or negatively) by unwanted dependencies",
    category: "Software Build",
  },
  {
    question:
      "It is alway advisable to build a software system locally before sending a new version upstream. True/False? Why?",
    answer:
      "True. We want to minimize the risk of sharing a non-buildable (broken) system",
    category: "Software Build",
  },
  {
    question:
      "With mvn (Maven) what must I configure if I want to distribute my system as an executable .jar file?",
    answer:
      "A plugin, that allows to assemble my system with all its dependencies",
    category: "Software Build",
  },
  {
    question:
      "What does a waterfall approach to building a software system minimize?",
    answer:
      "The number of components to be built, thus minimizing the resources and the time needed",
    category: "Software Build",
  },
  {
    question:
      "It is always important to automate the build process of a software system. True/False? Why?",
    answer:
      "True. Building is a very complex process. Automation reduces the risk of manual/human errors and guarantees repeatability",
    category: "Software Build",
  },
  {
    question: "In a C environment, what is an available build tool?",
    answer: "make",
    category: "Software Build",
  },
  {
    question:
      "In mvn (Maven) what section of the configuration file refers to the building of the artifacts?",
    answer: "The <build> section",
    category: "Software Build",
  },
  {
    question:
      "Look at the two requirements defined below by engineers ENG1 and ENG2. Whose definition is best and why?\nENG1\nThe password reset procedure must be fast and user-friendly.\n\nENG2\nUsers must be able to reset their passwords autonomously.\nThe procedure must be guided and take at most 2 minutes to complete.",
    answer: "ENG2. She defines a clear and measurable requirement.",
    category: "Requirements engineering",
  },
  {
    question: "According to I.Sommerville, a requirement is...",
    answer: "...a statement of a system service or of a system constraint",
    category: "Requirements engineering",
  },
  {
    question:
      "Requirements engineering is the process of establishing 3 main aspects about a system. What are they?",
    answer:
      "(1)The services a customer requires from the system; (2)The constraints under which it must operate; (3)The constraints under which it must be developed",
    category: "Requirements engineering",
  },
  {
    question:
      "Requirements engineering is an iterative and incremental process, that includes 3 main phases. What are they?",
    answer: "Elicitation, specification and validation",
    category: "Requirements engineering",
  },
  {
    question: "What is a preliminary feasibility study useful to?",
    answer:
      "To establish if the system can be developed with the given resources, time and constraints",
    category: "Requirements engineering",
  },
  {
    question: "A system stakeholder is...",
    answer:
      "Any person or organization who is affected by the system and/or has a legitimate interest in it",
    category: "Requirements engineering",
  },
  {
    question:
      "What is a practical way of describing the difference between user requirements and system requirements?",
    answer:
      'User requirements describe requirements from the "problem" point of view. System requirements describe them from the "solution" point of view.',
    category: "Requirements engineering",
  },
  {
    question: "In short, functional requirements are...",
    answer: "...statements of services the system should provide",
    category: "Requirements engineering",
  },
  {
    question: "In short, non-functional requirements are...",
    answer:
      "constraints under which the system must operate, be developed, standards it must abide to, etc.",
    category: "Requirements engineering",
  },
  {
    question: "What are two viable approaches to requirements elicitation?",
    answer: "Interviews (open or closed) and ethnography",
    category: "Requirements engineering",
  },
  {
    question: "What is the resulting artifact of requirements specification?",
    answer: "A Software Requirements Specification (SRS) document",
    category: "Requirements engineering",
  },
  {
    question: "What is requirements validation concerned with?",
    answer:
      "With demonstrating that requirements define the system that customers really want",
    category: "Requirements engineering",
  },
  {
    question:
      "Requirements validation must check many aspects of the collected requirements. Name at least three of them.",
    answer:
      "Validity, consistency, completeness, realism, verifiability, comprehensibility, traceability, adaptability.",
    category: "Requirements engineering",
  },
  {
    question: "In practical terms, what does a use case describe?",
    answer:
      "It describes typical and exceptional ways in which a real-world actor interacts with the system",
    category: "Requirements engineering",
  },
  {
    question:
      "What is the typical device to capture requirements in agile models?",
    answer: "User stories",
    category: "Requirements engineering",
  },
  {
    question:
      "The internationalization (or i18n) process of a software product has to do with...",
    answer:
      "designing and developing it so that it can be adapted to a target audience without engineering changes (supervises localization)",
    category: "UI design",
  },
  {
    question:
      "The localization (or l10n) process of a software product has to do with...",
    answer: "adapting it to a given region (underlies internationalization)",
    category: "UI design",
  },
  {
    question: "What does the principle of least surprise refer to?",
    answer:
      "To the fact that users should in principles be able to anticipate how the software component will behave",
    category: "UI design",
  },
  {
    question: "What does the principle of familiarity refer to?",
    answer:
      "To the fact that the software product should use concepts and terms familiar to the user",
    category: "UI design",
  },
  {
    question: "What does the principle of consistency refer to?",
    answer:
      "To the fact that comparable operations should be activated in comparable ways and that comparable components should have comparable formats",
    category: "UI design",
  },
  {
    question: "What does the principle of feedback refer to?",
    answer:
      "To the fact that the software should maintain a two-way communication with the user and provide visual and auditory feedback",
    category: "UI design",
  },
  {
    question:
      'The degree to which a software can be used by specified consumers to achieve quantified objectives with effectiveness, efficiency, and satisfaction in a quantified context of use" is said (1 word)...',
    answer: "usability",
    category: "UI design",
  },
  {
    question: "What does the memory load principle refer to?",
    answer:
      "To the fact that we must reduce that amount of information that users must remember between actions",
    category: "UI design",
  },
  {
    question: "What does the principle of efficiency refer to?",
    answer:
      "To the fact that we must seek efficiency in dialogue, motion and thought",
    category: "UI design",
  },
  {
    question: "What does the principle of recoverability refer to?",
    answer: "To the fact the we must allow users to recover from their errors",
    category: "UI design",
  },
  {
    question: "What does the principle of user guidance refer to?",
    answer:
      "To the fact that we must incorporate some context-sensitve user guidance and assistance",
    category: "UI design",
  },
  {
    question:
      "What simple approach can we use for possible cultural issues arising from the design of our product?",
    answer:
      "Put users in control and allow them to customize the software product",
    category: "UI design",
  },
  {
    question:
      "An ASCII code position is a Unicode code position. True/false? Why?",
    answer:
      "True. The first 128 Unicode code positions correspond to those of the ASCII table.",
    category: "UI design",
  },
  {
    question: "How does usability testing differ from other testing processes?",
    answer: "Usability tests cannot be automated",
    category: "UI design",
  },
  {
    question:
      "Usability testing verifies several attributes of a software product. Name at least 3...",
    answer:
      "learnability, efficiency (or speed of operation), errors and recoverability, flexibility, robustness",
    category: "UI design",
  },
  {
    question:
      "In object-orientation, a class should be designed to represent... what?",
    answer: "what an entity IS",
    category: "Software Design",
  },
  {
    question:
      "A sufficient implementation of a software component is one, that...",
    answer:
      "...captures the characteristics of its abstraction, that are necessary for a meaningful and efficient interaction",
    category: "Software Design",
  },
  {
    question:
      "A complete implementation of a software component is one that...",
    answer: "...captures ALL the characteristics of its abstraction",
    category: "Software Design",
  },
  {
    question:
      "A primitive implementation of a software component is one that...",
    answer:
      "...cannot be realized without access to the internal characteristics of its abstraction",
    category: "Software Design",
  },
  {
    question: "Single Responsibility Principle or SRP. Define briefly.",
    answer:
      "The design principle for which software components must be developed in such a way that they respond to a single role's requirements",
    category: "Software Design",
  },
  {
    question: "Open-Closed Principle or OCP. Define briefly.",
    answer:
      "The design principle for which software components must be developed so that their funcionalities may be extended without changing their implementation",
    category: "Software Design",
  },
  {
    question: "Liskov Substitution Principle or LSP. Define briefly.",
    answer:
      "A design principle that refers to subtyping relations for which the nature of these relations is semantic rather than purely sintactic",
    category: "Software Design",
  },
  {
    question: "Interface Segregation Principle or ISP. Define briefly.",
    answer:
      "A design principle for which no components should be forced to depend on methods they do not use, thus suggesting the definition of smaller, more focussed, interfaces",
    category: "Software Design",
  },
  {
    question: "Dependency Inversion Principle or DIP. Define briefly.",
    answer:
      "A design principle for which higher level modules should be independent of the implementations of the lower level modules they use",
    category: "Software Design",
  },
  {
    question: "Encapsulation. Define briefly.",
    answer:
      "A programming language device, that allows the bundling of data and the methods/functions that operate on that data",
    category: "Software Design",
  },
  {
    question:
      "Information hiding is that design principle, that aims to hide... what exactly?",
    answer: "The design decisions that are most likely to change",
    category: "Software Design",
  },
  {
    question: "Architectural design. Define briefly.",
    answer:
      "The process (as a series of decisions) that identifies the main structural components of a system and their relationships",
    category: "Software Design",
  },
  {
    question:
      "The measure of the strength of the relationship of the elements in a module is called...",
    answer: "Cohesion",
    category: "Software Design",
  },
  {
    question: "Coupling. Define briefly.",
    answer: "The degree of interdependence between software modules",
    category: "Software Design",
  },
  {
    question:
      "A functional approach to system decomposition is indicated in what type of context?",
    answer: "In a context in which requirements are stable",
    category: "Software Design",
  },
  {
    question:
      "An object-oriented approach to system decomposition is indicated in what type of context?",
    answer: "In a context in which requirements are unstable and/or evolve",
    category: "Software Design",
  },
  {
    question:
      "Software is subject to continuous change. For this reason we want to design components, that, when modified, allow to minimize... what exactly?",
    answer: "The number of changes to related components",
    category: "Software Design",
  },
  {
    question:
      "The OSI model is an example of the fundamental design principle called Separation of Concerns (SoC). What type of architecture is used?",
    answer: "A multi layer architecture",
    category: "Software Design",
  },
  {
    question:
      "In object-orientation, inheritance somewhat conflicts with loose coupling. Why?",
    answer:
      "Because in a parent-child inheritance structure the changes made to the parent directly and inevitably impact the child, thus contrasting with the ideal of loosely coupled components",
    category: "Software Design",
  },
  {
    question:
      '"Program to an interface, rather than to an implementation". Elaborate briefly.',
    answer:
      "Software components should be coupled to contracts (i.e., interfaces) rather than to concretions (i.e., implementations), so that the latter can vary and/or can be replaced freely, rendering the design more flexible and easier to evolve",
    category: "Software Design",
  },
  {
    question: "Polymorphism. Define briefly.",
    answer:
      "The provision of a single interface to entities of different types",
    category: "Software Design",
  },
  {
    question:
      "In object-orientation, an interface should be designed to represent... what?",
    answer: "what an entity DOES",
    category: "Software Design",
  },
  {
    question: "What does an activity diagram describe?",
    answer: "It describes a workflow: either organizational or computational.",
    category: "Unified Modeling Language (UML)",
  },
  {
    question: "What does a class diagram describe?",
    answer:
      "It describes the structure of a system in terms of its classes (with their properties and methods), and the relationships among them.",
    category: "Unified Modeling Language (UML)",
  },
  {
    question:
      "UML is a formal, comprehensive and standard modelling language. Why is the formal aspect so important?",
    answer:
      "Because the strongly defined meaning of the UML elements avoids misunderstandings.",
    category: "Unified Modeling Language (UML)",
  },
  {
    question:
      "UML is a formal, comprehensive and standard modelling language. Why is the standard aspect so important?",
    answer:
      "Because its notation system can be used consistently across all application domains.",
    category: "Unified Modeling Language (UML)",
  },
  {
    question:
      "UML is a formal, comprehensive and standard modelling language. What is meant by comprehensive?",
    answer:
      "It means that UML allows to represent all aspects of a system, from all the necessary points of view (i.e., use-case, logical, process, development/implementation, physical/deployment).",
    category: "Unified Modeling Language (UML)",
  },
  {
    question: "What does a state diagram describe?",
    answer:
      "The states a system can be in and the events/actions/behaviours that determine the transation from a state to another.",
    category: "Unified Modeling Language (UML)",
  },
  {
    question: "What does a sequence diagram describe?",
    answer:
      "It describes the (sequence of) messages exchanged by a set of objects for the realization of a given functionality/task.",
    category: "Unified Modeling Language (UML)",
  },
  {
    question: "What does an use-case diagram describe?",
    answer: "It describes the users' interactions with the system.",
    category: "Unified Modeling Language (UML)",
  },
  {
    question:
      "UML is said to be a 4+1 (views) model. Why is the use-case view represented as a +1 overlay?",
    answer:
      "Because all the other views rely on the use-case view to guide them.",
    category: "Unified Modeling Language (UML)",
  },
  {
    question:
      "UML diagrams express one of two fundamental aspects of a system. What are they?",
    answer: "The structural or the behavioural aspect.",
    category: "Unified Modeling Language (UML)",
  },
  {
    question:
      "UML is said to be a 4+1 (views) model. In essence, what does the use case view describe?",
    answer:
      "It describes the functionalities of the system from the perspective of the outside world. Basically: what the system is supposed to do.",
    category: "Unified Modeling Language (UML)",
  },
  {
    question:
      "UML is said to be a 4+1 (views) model. In essence, what does the logical view describe?",
    answer:
      "It describes the abstractions of the system's parts. Basically: what the system is made up of and how the parts interact.",
    category: "Unified Modeling Language (UML)",
  },
  {
    question:
      "UML is said to be a 4+1 (views) model. In essence, what does the process view describe?",
    answer:
      "It describes the processes within the system. Basically: what happens within the system.",
    category: "Unified Modeling Language (UML)",
  },
  {
    question:
      "UML is said to be a 4+1 (views) model. In essence, what does the development view describe?",
    answer:
      "It describes how the system is organized into modules and components.",
    category: "Unified Modeling Language (UML)",
  },
  {
    question:
      "UML is said to be a 4+1 (views) model. In essence, what does the physical view describe?",
    answer:
      "It describes how the system (as described in the logical, process, and development views) translates into real-world entities.",
    category: "Unified Modeling Language (UML)",
  },
];

export default questions;
