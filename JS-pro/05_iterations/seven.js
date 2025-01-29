const mynumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNums=mynumbers.map((num)=> num+10)

// console.log(newNums)
// chaining ==>>
const newNums = mynumbers
                .map((num)=> num*10)
                .map((num)=>num+1)
                .filter((num)=>num>=40)
console.log(newNums)
const projectsData = [
  {
    title: "Seamless Shopping Website",
    description:
      "Developed an e-commerce platform with functionalities like login/signup and add-to-cart. Designed for intuitive navigation and user experience.",
    technologies: ["React", "Bootstrap CSS", "Node", "React-Router"]
  },
  {
    title: "Employee Management System (EMS)",
    description:
      "Developed an Employee Management System using React.js and Tailwind CSS.",
    technologies: ["React", "Tailwind CSS", "Context API"]
  },
  {
    title: "Currency Converter App",
    description:
      "Created a dynamic app utilizing a currency API and custom React hooks, featuring an intuitive UI for real-time currency conversion.",
    technologies: ["React", "Tailwind CSS", "Context API"]
  }
];


  const s = projectsData.map((projects, i) => {
    return projects.description;
  });
  console.log(s);