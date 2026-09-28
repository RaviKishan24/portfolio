export const technologies = [
  // Programming Languages
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "Java",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "SQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", // Generic SQL icon
  },

  // Frontend
  {
    name: "HTML",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "Tailwind",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Bootstrap",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
  {
    name: "Angular",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
  },
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Redux",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  },

  // Backend
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  // Note: RESTful APIs and JWT are concepts, not languages with standard logos, 
  // so they are usually excluded from logo grids or represented by generic icons.

  // Database
  {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "MySQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
];

export const projects = [
  {
    title: "3D Model Workspace",
    description:
      "A full-stack web application for uploading, viewing, and managing 3D models directly in the browser with saved camera views and secure authentication.",
    image: "/3dWorkspaceModel.png",
    technologies: [
      "React",
      "Vite",
      "Three.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Supabase",
    ],
    liveUrl: "https://3d-model-workspace.vercel.app/",
    githubUrl: "https://github.com/RaviKishan24/3d-model-workspace",
    features: [
      "GLB, GLTF & OBJ model upload",
      "Interactive Three.js 3D viewer",
      "Save and restore camera views",
      "JWT authentication with HTTP-only cookies",
      "Supabase Storage integration",
      "MongoDB Atlas database",
      "Responsive Tailwind CSS UI",
      "Performance optimized with code splitting and memoization",
    ],
  },

  {
    title: "SportsMart",
    description:
      "A full-stack MERN e-commerce platform where users can browse products, manage carts and wishlists, place orders, and interact with a complete online-store workflow.",
    image: "/SportsMart.png",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redux Toolkit",
      "JWT",
      "Cloudinary",
    ],
    liveUrl: "https://sportsmart.netlify.app/",
    githubUrl: "https://github.com/RaviKishan24/SportsMart",
    features: [
      "User authentication with OTP",
      "Product search and category filtering",
      "Product details and cart management",
      "Wishlist and order management",
      "Admin dashboard",
      "Protected routes",
      "REST API integration",
      "Cloudinary profile image upload",
    ],
  },

  {
    title: "Family Tree Visualizer",
    description:
      "A React-based family tree application that dynamically creates and visualizes relationships including spouses, children, and multiple generations using a recursive tree structure.",
    image: "/FamilyTreeVisualizer.png",
    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    liveUrl: "https://familytreevisualizer.netlify.app/",
    githubUrl: "https://github.com/RaviKishan24/FamilyTree",
    features: [
      "Dynamic family member creation",
      "Spouse and marriage relationships",
      "Parent-child relationships",
      "Recursive multi-generation tree",
      "Dynamic form handling",
      "Reusable React components",
      "Responsive interface",
    ],
  },
];