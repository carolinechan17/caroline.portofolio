// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.png";
import logo from "./assets/logo2.png";
// Profile Image
import profile from "./assets/profile.png";
// Tech stack images
import swift from "./assets/techstack/swift.png";
import dart from "./assets/techstack/dart.png";
import flutter from "./assets/techstack/flutter.png";
import python from "./assets/techstack/python.png";
import selenium from "./assets/techstack/selenium.png";
import vscode from "./assets/techstack/vscode.png";
import xcode from "./assets/techstack/xcode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import postman from "./assets/techstack/postman.png";
// Porject Images
import projectImage1 from "./assets/projects/project1.png";
import projectImage2 from "./assets/projects/project2.png";
import projectImage3 from "./assets/projects/project3.png";
import projectImage4 from "./assets/projects/project4.png";
import projectImage5 from "./assets/projects/project5.png";
import projectImage6 from "./assets/projects/project6.png";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Caroline Chan",
  tagline: "A Mobile Developer and A Software QA Engineer",
  img: profile,
  about: `Have a strong will to learn and improve my skills. Also can adapt well to a new environment and also has great communication skills. Currently working as a Mobile Developer at Pentarex Technology that specializes in RTC Technology and an iOS Developer Intern at Apple Developer Academy @IL.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "www.linkedin.com/in/carolinechn",
  github: "https://www.github.com/carolinechan17",
  instagram: "https://www.instagram.com/c.channnn/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "iOS Developer",
    Company: `Apple Developer Academy @IL`,
    Location: "Batam, Riau Islands, Indonesia",
    Type: "Intern",
    Duration: "February 2024 - Present",
  },
  {
    Position: "Mobile Developer",
    Company: `Pentarex`,
    Location: "Remote",
    Type: "Full Time",
    Duration: "November 2023 - Present",
  },
  {
    Position: "QA Engineer",
    Company: `PT Sinergi Informatika Semen Indonesia (SISI)`,
    Location: "Remote",
    Type: "Freelance",
    Duration: "January 2024 - February 2024",
  },
  {
    Position: "Mobile Developer",
    Company: `KitaLulus`,
    Location: "Remote",
    Type: "Intern",
    Duration: "August 2024 - November 2024",
  },
  {
    Position: "Software Development Engineer in Test",
    Company: `KitaLulus`,
    Location: "Remote",
    Type: "Intern",
    Duration: "February 2023 - July 2023",
  },
  {
    Position: "QA Manual",
    Company: `Bibit.id`,
    Location: "Remote",
    Type: "Intern",
    Duration: "October 2022 - December 2022",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Bachelor of Computer Science",
    Company: "Universitas Gadjah Mada",
    Location: "Yogyakarta, Indonesia",
    Type: "Full Time",
    Duration: "August 2019 - October 2023",
  },
  {
    Position: "Exchange Student",
    Company: `National Taiwan University`,
    Location: "Taipei, Taiwan",
    Type: "Full Time",
    Duration: "February 2022 - June 2022",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  swift: swift,
  dart: dart, 
  flutter: flutter,
  python: python,
  selenium: selenium,
  vscode: vscode,
  xcode: xcode,
  postman: postman,
  git: git,
  github: github,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Kerja+ Customer",
    image: projectImage1,
    description: `iOS application for employers to manage applicants that apply to their job postings build with MVVM software architecture and asynchronous networking.`,
    techstack: "Swift, SwiftUI",
    previewLink: "https://google.com",
    githubLink: "https://github.com/isha93/kerjapluscustomer",
  },
  {
    title: "Camy",
    image: projectImage2,
    description: `Android application for educational purposes where mentor can have live stream and user can attend the live classes. This application is built with Bloc and zegocloud for RTC.`,
    techstack: "Dart, Flutter, Firebase",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Movie App",
    image: projectImage3,
    description: `Individual project created by utilizing free api from IMDb.com. This application is built with MVVM software architecture and asynchronous networking.`,
    techstack: "Swift, SwiftUI",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "FANI",
    image: projectImage4,
    description: `Working on In App Purchase on both Android and iOS platform for FANI. To make this feature works, the application relied on RevenueCat as the third party.`,
    techstack: "Dart, Flutter",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "KitaLulus Employer",
    image: projectImage5,
    description: `Working on automated UI testcases for KitaLulus Employer with Selenium Python wrapped with RobotFramework.`,
    techstack: "Python, Selenium, RobotFramework",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Kominfo Certification Platform",
    image: projectImage6,
    description: `Working on +3000 automated UI testcases for Kominfo Certification Platform both Website and Android with Selenium Python and Appium Pyhton.`,
    techstack: "Python, Selenium, Appium",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "carolinechan304@gmail.com",
};
