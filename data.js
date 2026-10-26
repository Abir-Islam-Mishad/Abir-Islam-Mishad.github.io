/* ==========================================================
   EDIT THIS FILE ONLY.
   Everything on your website is generated from the data below.
   - Keep the quotes "" and commas , exactly as they are.
   - To add an item, copy one whole { ... }, block and paste it
     right after it, then change the text.
   - Leave a value as "" to hide it (e.g. a link you don't have).
   ========================================================== */

const PORTFOLIO = {
  name: "Md. Abir Islam Mishad",
  shortName: "Abir Islam Mishad",
  role: "Computer Engineering Student",
  tagline:
    "I build embedded systems, custom circuits, and machine-learning tools that work in the real world.",
  location: "Moscow, Idaho, USA",
  email: "mish5387@vandals.uidaho.edu",
  // Phone is left out on purpose because this page is public. Add one here if you want it shown:
  phone: "",
  resumeFile: "resume.pdf", // put your resume PDF in the same folder with this name
  photo: "",                // e.g. "assets/me.jpg" (square photo works best). "" = show initials
  links: {
    github: "",   // e.g. "https://github.com/yourusername"
    linkedin: ""  // e.g. "https://www.linkedin.com/in/yourname"
  },

  // Open-to line shown under your name. Change or set to "" to hide.
  availability: "Seeking internships and co-ops in embedded systems, machine learning and computer vision",

  about: [
    "I'm a Computer Engineering student at the University of Idaho (expected graduation December 2028). I enjoy projects where hardware and software meet: designing circuits, calibrating sensors, and connecting them to machine-learning and computer-vision pipelines.",
    "I have built a robotics system for strawberry detection and harvesting, a mesh-network radio system for oceanic hazard detection, and I currently lead peer-assisted study sessions as an SI-PASS Leader. I like working in multidisciplinary teams and explaining technical ideas clearly."
  ],

  education: [
    {
      school: "University of Idaho",
      degree: "Bachelor of Science in Computer Engineering",
      place: "Moscow, ID",
      date: "Expected December 2028",
      notes: [] // e.g. ["GPA: 3.9", "Relevant coursework: Digital Logic, Data Structures"]
    }
  ],

  stats: [
    { value: "9", label: "Competition awards" },
    { value: "2", label: "Engineering projects" },
    { value: "3+", label: "Weekly study sessions led" }
  ],

  skills: [
    {
      group: "Programming",
      items: ["C", "C++", "Python", "MATLAB", "R Studio", "HTML", "CSS", "LaTeX"]
    },
    {
      group: "AI & Vision",
      items: ["Machine Learning", "Computer Vision"]
    },
    {
      group: "Hardware & Embedded",
      items: [
        "Embedded System Design",
        "Microcontroller Programming",
        "IoT System Design",
        "PCB Design",
        "Circuit Simulation",
        "3D Model Design"
      ]
    }
  ],

  projects: [
    {
      title: "Integrated Strawberry Detection and Harvesting System",
      date: "July 2024",
      summary:
        "A multidisciplinary team project that combines sensing, computer vision and custom electronics to detect and harvest strawberries.",
      highlights: [
        "Collaborated with a multidisciplinary team to develop system solutions",
        "Calibrated sensors for the system",
        "Designed and implemented circuitry for full system integration",
        "Acquired and annotated tree samples and imagery for the machine-learning dataset"
      ],
      tags: ["Computer Vision", "Machine Learning", "Circuit Design", "Sensors"],
      repo: "",  // GitHub link to the code, e.g. "https://github.com/you/strawberry-harvester"
      demo: "",  // video or live link
      image: ""  // e.g. "assets/strawberry.jpg"
    },
    {
      title: "Radio-Based Communication System for Oceanic Hazard Detection and Navigation",
      date: "October 2023",
      summary:
        "A wireless sensing and communication system designed for reliable data transfer in marine conditions.",
      highlights: [
        "Built a mesh network using multiple NRF modules for robust communication",
        "Calibrated gyroscopic sensors to adapt to water level and tidal variations",
        "Designed and developed custom circuitry and hardware for full system integration"
      ],
      tags: ["Embedded Systems", "NRF Mesh Network", "Gyroscope", "Hardware"],
      repo: "",
      demo: "",
      image: ""
    }
    /* To add a project, copy the block above (from { to }) and paste it here after adding a comma. */
  ],

  experience: [
    {
      role: "SI-PASS Leader",
      org: "Academic Support Programs, University of Idaho",
      place: "Moscow, ID",
      date: "March 2025 – Present",
      points: [
        "Lead 3+ weekly peer-assisted study sessions to boost student performance in high-impact courses",
        "Create targeted plans to enhance academic performance",
        "Collaborate with faculty to integrate academic support into curriculum delivery"
      ]
    },
    {
      role: "Former Vice President",
      org: "Research Lab Bangladesh",
      place: "Chattogram, Bangladesh",
      date: "August 2021 – July 2023",
      points: [
        "Coordinated monthly projects on robotics",
        "Collaborated with other clubs and spread activities",
        "Provided training and mentorship to members",
        "Communicated effectively with other staff to improve activities"
      ]
    }
  ],

  achievements: [
    { year: "2025", title: "DeVlieg Scholar, College of Engineering Professional Skills Academy", tag: "Scholarship", featured: true },
    { year: "2024", title: "First Runner-up, ASABE Robotics Student Design Competition", tag: "Robotics", featured: true },
    { year: "2023", title: "Champion, BCSIR Science and Industrial Technology Fair", tag: "Bangladesh", featured: true },
    { year: "2019", title: "First Runner-up, 40th National Science & Technology Competition", tag: "Bangladesh" },
    { year: "2019", title: "Champion, National Biology Olympiad", tag: "Bangladesh" },
    { year: "2019", title: "Second Runner-up, National Debate Competition", tag: "Bangladesh" },
    { year: "2019", title: "Champion, BCSIR Science and Industrial Technology Fair", tag: "Bangladesh" },
    { year: "2018", title: "Second Runner-up, 39th National Science & Technology Competition", tag: "Bangladesh" },
    { year: "2018", title: "Divisional Champion, Creative Talent Hunt", tag: "Bangladesh" }
  ]
};
