// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: '#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1',
  firstName: 'Omar',
  middleName: '',
  lastName: 'Bakr',
  message: ' Passionate about changing the world with technology. ',
  icons: [
    {
      image: 'fa-github',
      url: 'https://github.com/omarbakr2020',
    },
    {
      image: 'fa-linkedin',
      url: 'https://www.linkedin.com/in/omar-bakr-3b3671165/',
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/omarbakr.jpg"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: 'About Me',
  imageLink: require('../editable-stuff/omarbakr.jpg'),
  imageSize: 375,
  message:
    "This is Omar Bakr. A passionate Full Stack Developer with +2 years of experience in building web and mobile solutions. I'm most passionate about giving back to the community, and my goal is to pursue this passion within the field of software engineering. In my free time I like reading tech blogs.",
  resume:
    'https://docs.google.com/document/d/1Mbma2HeRYuDHm3uPCR4vcSdbWze1jz-sJrxwhQxGYAw/edit?usp=sharing',
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: 'Recent Projects',
  gitHubUsername: 'omarbakr2020', //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ['shareme', 'realtor', 'adtours', 'e-sounds'],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: 'Leadership',
  message:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.',
  images: [
    {
      img: require('../editable-stuff/omarbakr.jpg'),
      label: 'First slide label',
      paragraph: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    },
    {
      img: require('../editable-stuff/omarbakr.jpg'),
      label: 'Second slide label',
      paragraph: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    },
  ],
  imageSize: {
    width: '615',
    height: '450',
  },
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: 'Skills',
  hardSkills: [
    { name: 'Node.js', value: 80 },
    { name: 'Express.js', value: 80 },
    { name: 'PostgreSQL', value: 85 },
    { name: 'MongoDB', value: 70 },
    { name: 'Data Structures', value: 85 },
    { name: 'JavaScript', value: 90 },
    { name: 'React.js', value: 80 },
    { name: 'React Native', value: 70 },
    { name: 'HTML/CSS', value: 95 },
    { name: 'Next.js', value: 75 },
    { name: 'Typescript', value: 80 },
    { name: 'TailwindCss', value: 90 },
    { name: 'Docker', value: 70 },
    { name: 'Git', value: 85 },
  ],
  softSkills: [
    { name: 'Goal-Oriented', value: 80 },
    { name: 'Collaboration', value: 90 },
    { name: 'Positivity', value: 85 },
    { name: 'Adaptability', value: 85 },
    { name: 'Problem Solving', value: 80 },
    { name: 'Empathy', value: 90 },
    { name: 'Organization', value: 70 },
    { name: 'Creativity', value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: 'Get In Touch',
  message:
    "I'm currently looking for full-time Software Engineering opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: 'omarbakr301@gmail.com',
};

const experiences = {
  show: false,
  heading: 'Experiences',
  data: [
    {
      role: 'Software Engineer', // Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ],
};

// Blog SECTION
// const blog = {
//   show: false,
// };

export {
  navBar,
  mainBody,
  about,
  repos,
  skills,
  leadership,
  getInTouch,
  experiences,
};
