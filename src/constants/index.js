import {
  java,
  problemsolver,
  self2,
  herobg,
  l3,
  l2,
  l4,
  l6,
  l7,
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  hoob,
  sumzz,
  news,
  jobj,
  modAi,
  chat,
  pae,
  evogym,
  fileshare,
  expt,
  eatfit,
  d,
  h,
  ll,
  prince,
  ml
} from '../assets';


export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'project',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
  {
    id: 'Experience',
    title: 'Experience',
  },
];

const selfpro = {
  image1: prince,
  imagebg: herobg,
};

const services = [
  {
    title: 'Frontend Developer(HTML,CSS,JS)',
    icon: web,
  },
  {
    title: 'Backend Developer(MERN)',
    icon: backend,
  },
  
  {
    title: 'C++(leetcode)',
    icon: problemsolver,
  },
  {
    title: 'Python',
    icon: backend,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
 
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },

  {
    name: 'git',
    icon: git,
  },
  {
    name: 'java',
    icon: java,
  },
];

const experiences = [
  {
    title: '❖Indian Institute of Information Technology,Kalyani',
    company_name: 'Branch',
    icon: ll,
    iconBg: '#ffffff',
    date: 'november 2022 - present',
    points: [
      "Computer Science Engineering" ,
      "CGPA : 8.6"
      ,
    ],
  },
  {
    title: '❖Holy mission public school  ',
    company_name: 'Samastipur',
    icon: h,
    iconBg: '#ffffff',
    date: ' 2021 - 2022',
    points: [
      'CBSE (Class XII),',
      " Aggregate :90%    ",
      
    ],
  },
  {
    title: '❖D.A.V Public school',
    company_name: 'Samastipur',
    icon: d,
    iconBg: '#383E56',
    date: ' 2019 - 2020',
    points: [
      'CBSE (Class X ) ',
      ' Aggregate :93%  ',
      
      
      'Achieved numerous medals in various Olympiads at the school level',
      
    ],
  },
  {
    title: 'Experience',
    company_name: 'PAEDIPRIME',
    icon: l3,
    iconBg: '#E6DEDD',
    date: 'June 2024 - present',
    points: [
      'Backend Developer ',
      
    ],
  },
 
 
];

const projects = [
  {
    name: 'Paediprime',
    description:
      'PaediPrime, a pioneering startup focused on revolutionizing pediatric healthcare, we aim to streamline the booking and checkup scheduling process, saving both time and effort for parents and clinics. As India first affordable AI-equipped next-generation pediatric clinic service, PaediPrime introduces cutting-edge technology to enhance efficiency in pediatric care. it led a team of 7 in developing the platform using the MERN stack, with a focus on improving user experience and optimizing the system. We are currently seeking funding to expand this innovative solution and establish partnerships with pediatric clinics across the country',

    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'nodejs',
        color: 'green-text-gradient',
      },
      {
        name: 'Figma',
        color: 'green-text-gradient',
      },
      {
        name: 'git',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
     
    ],
    image: pae,
    source_code_link: 'https://www.paediprime.tech/',
    website_link:'https://www.paediprime.tech/'
  },
  
  {
    name: 'EatFit',
    description: `
    EatFit, built using the MERN stack, inspired by platforms like Zomato and Swiggy. The website offers features like:
    
    - **Food Selection and Cart Management**: Users can browse food items, add them to their cart, and manage their selections before placing an order.
    - **Order Placement and Tracking**: Users can directly place orders from their cart and track the order status in real-time until delivery.
    - **User-Friendly and Secure**: The platform ensures a seamless experience with responsive design, secure authentication, and multiple payment options.
    `,
    
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'nodejs',
        color: 'pink-text-gradient',
      },
      {
        name: 'map_api',
        color: 'blue-text-gradient',
      }
    ],
    image: eatfit,
    source_code_link: 'https://github.com/Userride/Eatfit_food_delivery',
     website_link:'https://eat-fit-flame.vercel.app/'
  },
  {
    name: 'Emergency Vehicle',
    description:
      "Establishing a real-time Emergency Vehicle Detection System in traffic regions using a camera system to capture live images of vehicles at traffic signals. The system efficiently detects emergency vehicles and sends the information to the next traffic control unit using the Twilio library, ensuring a quick response. Additionally, it calculates the distance between the camera and vehicles for accurate detection. This innovative approach minimizes delays for emergency vehicles, potentially saving lives. Built with technologies like Python, YOLOv5, Streamlit, CSS, and JavaScript, the platform provides a reliable and effective solution for managing traffic in critical situations.",
    tags: [
      {
        name: 'Python',
        color: 'blue-text-gradient',
      },
      {
        name: ' YOLOv5',
        color: 'green-text-gradient',
      },
      {
        name: 'Streamlit',
        color: 'pink-text-gradient',
      },
    ],
    image: ml,
    source_code_link:
      'https://github.com/Nitinpratap22061/majorProjectcse/tree/master',
      website_link: "https://youtu.be/sivoRjN6gvI?si=Fw3N5_HlpjgwC5uZ"
  },
 
 
];

export { services, technologies, experiences, projects, selfpro };
