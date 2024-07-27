import { describe } from "node:test";

export const data = {
  aboutme: {
    name: "Kenneth Liu",
    role: "Software Engineer",
    availability: "open" as "available" | "open" | "unavailable",
    location: "Katy, TX",
    email: "kennethliu0@gmail.com",
    image: "kennethliu.jpg",
    resume: "",
    currentCompany: {
      name: "Baker Risk",
      role: "Intern",
      duration: "2 months",
    },
  },

  projects: [
    {
      image: "./nextjslogo.jpeg",
      title: "NextJS Portfolio",
      description: "Gallery of my programming career, built with Next.JS",
      tags: ["NextJS", "React", "shadcn/ui", "Tailwind"],
      href: "",
    },
    {
      image: "./wpflogo.jpg",
      title: "WPF Event Tree Analysis",
      description: "Event Tree Analysis Visualizer, built with WPF",
      tags: ["WPF", ".NET", "C#", "XAML"],
      href: "",
    },
    {
      image: "./ottogradelogo.jpg",
      title: "OttoGrade",
      description: "Homework Grader, built with Symbolic Python and OpenCV",
      tags: ["MathQuill", "SymPy", "Python", "OpenCV"],
      href: "",
    },
  ],
  experience: [
    {
      image: "./bakerrisklogo.jpg",
      title: "BakerRisk",
      description: "Software Engineering Intern",
      tags: ["WPF", "Azure", "C#", "XAML", ".NET", "2024"],
      href: "",
    },
    {
      image: "./sciovirtuallogo.jpg",
      title: "ScioVirtual",
      description: "Computing Olympiad Instructor",
      tags: ["USACO", "C++", "Teaching", "2024"],
      href: "",
    },
    {
      image: "./sciovirtuallogo.jpg",
      title: "ScioVirtual",
      description: "Python Programming Teaching Assistant",
      tags: ["Python", "Teaching", "2023"],
      href: "",
    },
  ],
  education: [
    {
      image: "./utaustinlogo.png",
      title: "UT Austin",
      description: "Academy for All: Machine Learning Edition Bootcamp",
      tags: ["High School", "Summer", "ML", "Python"],
      href: "",
    },
    {
      image: "./jordanhslogo.png",
      title: "Jordan High School",
      description: "Senior",
      tags: ["High School", "KatyISD", "GPA 4.8+", "T10"],
      href: "",
    },
  ],
};
