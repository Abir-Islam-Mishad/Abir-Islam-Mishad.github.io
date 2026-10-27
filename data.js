/* EDIT THIS FILE to customize your portfolio. No frameworks or build tools required. */
window.PORTFOLIO = {
  name: "Abir Islam Mishad",
  initials: "YN",
  headline: "Software Developer • Embedded Systems • Problem Solver",
  eyebrow: "OPEN TO INTERNSHIPS & FULL-TIME OPPORTUNITIES",
  location: "Your City, State",
  email: "you@example.com",
  github: "https://github.com/YOUR_USERNAME",
  linkedin: "https://www.linkedin.com/in/YOUR_PROFILE/",
  resume: "assets/resume.pdf", // Upload your own resume to this path
  photo: "", // Optional: 'assets/profile.jpg'
  summary: "I build practical, thoughtful solutions at the intersection of software and hardware. My work spans application development, embedded systems, and collaborative leadership. I care about clean engineering, usability, and measurable outcomes.",
  about: "I enjoy converting real-world challenges into reliable, well-documented technical solutions. I'm interested in software engineering, embedded systems, IoT, and opportunities to learn through building.",
  focus: ["Software Engineering", "Embedded & IoT Systems", "Data Structures & Algorithms", "Collaboration & Leadership"],
  stats: [{value:"04",label:"Focus areas"},{value:"03",label:"Featured projects"},{value:"100%",label:"Curiosity-driven"}], // Replace sample stats with real numbers
  skills: [
    {group:"Languages", items:["C++", "Java", "Python", "JavaScript", "HTML / CSS"]},
    {group:"Core", items:["OOP", "Data Structures", "Algorithms", "Debugging", "Git & GitHub"]},
    {group:"Systems & Tools", items:["Embedded Systems", "Microcontrollers", "IoT", "VS Code", "Linux"]}
  ],
  projects: [
    {id:"smart-monitor", title:"Smart Environment Monitor",category:"Embedded / IoT", year:"2026",featured:true,image:"assets/project-iot.svg",imageAlt:"Illustration of an IoT sensing and dashboard system",teaser:"An end-to-end sensor monitoring concept with real-time readings and a clean dashboard.",overview:"Describe the real problem you identified, why it matters, and how your implementation solves it. This is illustrative sample content: replace it with your actual project details before publishing.",role:"Project developer",duration:"Add dates",stack:["C++", "ESP32", "Sensors", "IoT"],highlights:["Document the architecture and hardware selection.","Explain data acquisition and transmission.","Add measured outcomes, photos, and demonstration links."],github:"",demo:"",gallery:[]},
    {id:"algorithm-visualizer",title:"Algorithm Visualizer",category:"Software",year:"2026",featured:true,image:"assets/project-algorithm.svg",imageAlt:"Illustration of an algorithm visualization interface",teaser:"Interactive visual explanations of common algorithms and their performance.",overview:"Add your own implementation details, architecture, tradeoffs, and results. This is a starter project example, not a claim of completed work.",role:"Software developer",duration:"Add dates",stack:["JavaScript", "HTML", "CSS", "Algorithms"],highlights:["Explain the learning goal and user interaction.","Compare algorithm time complexities.","Link the repository and live demo if available."],github:"",demo:"",gallery:[]},
    {id:"inventory-system",title:"Inventory Management System",category:"Application",year:"2025",featured:false,image:"assets/project-dashboard.svg",imageAlt:"Illustration of a management application dashboard",teaser:"A structured system for organizing records, searching inventory, and tracking updates.",overview:"Replace this example with a project you have genuinely built, describing its core functionality and engineering decisions.",role:"Developer",duration:"Add dates",stack:["C++", "OOP", "File Handling"],highlights:["Describe how records are stored and validated.","Show key workflows and screenshots.","Report tests, constraints, and improvements."],github:"",demo:"",gallery:[]}
  ],
  experience: [
    {id:"peer-learning",title:"Peer Learning / Academic Leadership",organization:"Your university or organization",type:"Leadership",location:"Your location",period:"Add start – end dates",image:"assets/experience.svg",summary:"Supported students and facilitated collaborative problem-solving sessions.",details:"Replace these illustrative statements with your actual responsibilities, scope, and impact.",highlights:["Designed collaborative sessions that make complex concepts accessible.","Coordinated group activities and adapted instruction to different learning needs.","Add verified metrics or achievements here."],link:""},
    {id:"student-org",title:"Student Organization Leadership",organization:"Your student organization",type:"Leadership",location:"Your location",period:"Add start – end dates",image:"assets/experience.svg",summary:"Helped organize activities, communicate with stakeholders, and coordinate a team.",details:"Explain the programs you led, budgets you managed, and measurable outcomes. Replace this example with accurate facts.",highlights:["Contributed to event planning and logistics.","Coordinated communication across volunteers and partners.","Add measurable participation or fundraising figures if verified."],link:""}
  ],
  achievements: [
    {id:"academic-recognition",title:"Academic Recognition",issuer:"Issuing organization",date:"Add date",image:"assets/achievement.svg",summary:"Add an award, scholarship, certificate, or academic honor you actually received.",details:"Explain the selection criteria, what you accomplished, and why the recognition matters.",link:""},
    {id:"technical-milestone",title:"Technical Milestone",issuer:"Course / Competition / Organization",date:"Add date",image:"assets/achievement.svg",summary:"Showcase a hackathon, research result, technical credential, or competition placement.",details:"Provide verified results, your contribution, and links to public evidence if available.",link:""}
  ],
  education: [{degree:"Your degree / major",school:"Your University",period:"Add dates",details:"Relevant coursework: OOP, Data Structures, Algorithms, Embedded Systems."}]
};
