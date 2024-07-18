// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "K.M.",
  middleName: "",
  lastName: "Hridoy",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/tanvirhridoy",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/anxioushridoy",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/tanvir_hridoy_007/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/kmhridoy/",
    },
    {
      image: "fa-youtube",
      url: "https://www.youtube.com/@LazyPandaCoding",
    },
    {
      image: "fa-twitter",
      url: "https://x.com/lazypandacoding",
    },
  ],
};

// ABOUT SECTION <FontAwesomeIcon icon="fa-brands fa-threads" />
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/profilepic.jpeg"),
  imageSize: 375,
  message:"Hi, I'm K.M. Hridoy, a Senior Software Engineer from Bangladesh with a passion for building great software. With a Bachelor's and Master's in Computer Science Engineering, I've spent the last seven years diving deep into the world of software development.  I've had the pleasure of working on a variety of projects, always aiming to create efficient and innovative solutions. My journey has equipped me with a solid grasp of the software development lifecycle, and I love tackling new challenges and learning along the way.  Thanks for stopping by my portfolio! Feel free to explore my work and see how I can contribute to your next project.",
  resume: "https://drive.google.com/file/d/1G1dJKe0iv6mMV6WO9uFy4vyea3udmy4z/view?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "tanvirhridoy", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/profilepic.jpeg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/profilepic.jpeg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "C#", value: 95 },
    { name: "SQL", value: 95 },
    { name: "Data Structures", value: 80 },
    { name: "C/C++", value: 65 },
    { name: "JavaScript", value: 80 },
    { name: "React", value: 70 },
    { name: "HTML/CSS", value: 55 },
    { name: "Python", value: 50 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 90 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 95 },
    { name: "Adaptability", value: 90 },
    { name: "Problem Solving", value: 85 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 80 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Senior Software Engineering or Project Manager opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "kmhridoyju@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Senior Software Engineer',
      companyname:'MF Consult ApS',
      companylogo: require('../assets/img/mfconsult.png'),
      date: 'Oct 2023 – Present',
      website:'http://mfcon.dk/'
    },
    {
      role: 'Senior Software Engineer',
      companyname:'Opus Technologies Limited',
      companylogo: require('../assets/img/opus-logo.png'),
      date: 'Sept 2022 – Sept 2023',
      website:'https://opus-bd.com/'
    },
    {
      role: 'Software Engineer (Senior Officer)',
      companyname:'Krishibid Group',
      companylogo: require('../assets/img/kg.jpg'),
      date: 'April 2022 – August 2022',
      website:'http://krishibidgroup.com'
    },
    {
      role: 'Software Engineer',
      companyname:'Advanced Software & IT Services Ltd',
      companylogo: require('../assets/img/rsz_1asit.png'),
      date: 'Feb 2018 – Mar 2022',
      website:'https://asitsl.com/'
    },
    {
      role: 'Web Developer',
      companyname:'Saatrong Systems IT Soluition',
      companylogo: require('../assets/img/saatrongsystem.png'),
      date: 'Jan 2017 – Dec 2018',
      website:'https://saatrongsystems.com/'
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
