import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Prateek",
  lastName: "Singh",
  name: `Prateek Singh`,
  role: "UI/UX Specialist",
  avatar: "/images/gallery/profile.jpeg",
  email: "prateeksingh200@gmail.com",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/prateeksingh200",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/prateeksingh200",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/prateeksingh200/",
    essential: false,
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@prateeksingh200",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Transforming complexity into clarity — through design</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">UI/UX specialist</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I’m Prateek Singh — a <Text as="span" size="xl" weight="strong">UI/UX</Text> specialist with 9+ years of experience crafting user-centric products across India and beyond.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am an Asia-based (India) design professional with a passion for transforming complex challenges into simple, elegant solutions. With over 9+ years of experience in the IT industry, my work spans digital interfaces, interactive experiences, and the convergence of design and technology.<br /><br />
        I am an experienced User Experience Designer skilled in User Experience Design, Product Design, Design Strategy, Adobe XD, Sketch, Adobe Photoshop, and other UI/UX tools. As a strategic design thinker with strong design capabilities, I enjoy working tactically to solve problems<br /><br />
        I am passionate about collaborating with people who have an entrepreneurial mindset, move fast, and focus on building user-centric products. My approach to great design is rooted in balancing user empathy through a structured process of understanding, exploring, and materializing ideas.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Collabera",
        timeframe: "2018 - Present",
        role: "Specialist in UX Application Engineering",
        achievements: [
          <>
            Leading UX initiatives as a Specialist Application Engineer, translating user needs and business requirements into seamless digital experiences.
          </>,
          <>
            Implement UX best practices to ensure design and functionality meet user expectations and enhance overall usability.
          </>,
          <>
            Develop and optimize responsive, high-performance applications aligned with UX principles across all platforms.
          </>,
          <>
            Collaborate with UX/UI designers, providing technical insights to enhance design feasibility.
          </>,
          <>
            Create interactive prototypes to test and validate design concepts using user feedback.
          </>,
          <>
            Honored to receive the Blaze Award-2025 at Collabera for consistency, ownership, and impact.
          </>,
        ],
        images: [
          // {
          //   src: "/images/projects/project-01/cover-01.jpg",
          //   alt: "Once UI Project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        "company": "Collabera",
        "timeframe": "Jul 2022 - Aug 2024",
        "role": "Senior Application Engineer - UX",
        "achievements": [
          "Honored to receive the Outstanding Contribution award for Q4-2023.",
          "Recognized as the Best Performer for Q2-2023.",
          "Advanced UX application engineering with focus on wireframing and user experience design."
        ],
        "images": []
      },
      {
        "company": "Collabera",
        "timeframe": "Nov 2018 - Jun 2022",
        "role": "Executive Application Engineer - UX",
        "achievements": [
          "Specialized in wireframing and human-computer interaction principles.",
          "Laid the foundation for user-centered design practices within the organization."
        ],
        "images": []
      },
      {
        "company": "Dotsquares",
        "timeframe": "Aug 2014 - Oct 2018",
        "role": "UI Designer / Web Designer / Front End Designer",
        "achievements": [
          "Designed and developed user interfaces for web applications.",
          "Bridged the gap between design and front-end development.",
          "Created responsive designs ensuring cross-browser compatibility."
        ],
        "images": []
      },
      {
        "company": "Promatics Technologies Private Limited",
        "timeframe": "Jan 2013 - Aug 2014",
        "role": "Associate Web Designer",
        "achievements": [
          "Started career as a web designer, building foundational skills in UI and front-end design.",
          "Collaborated with senior designers to deliver client projects on time."
        ],
        "images": []
      }
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
       {
        "name": "Manonmaniam Sundaranar University",
        "description": "B.Sc. in Animation & Multimedia, Animation & Multimedia (2010 – 2013)"
      },
      {
        "name": "V.S.J.I.C., Gorakhpur",
        "description": "Intermediate (2007 – 2010)"
      }
    ],
  },
  "technical": {
    "display": true,
    "title": "Technical skills",
    "skills": [
      {
        "title": "UI/UX Design Tools",
        "description": "Expert in creating wireframes, prototypes, and high-fidelity designs using industry-standard tools.",
        "tags": [
          {
            "name": "Figma",
            "icon": "figma"
          },
          {
            "name": "Adobe XD",
            "icon": "adobe"
          },
          {
            "name": "Sketch",
            "icon": "sketch"
          },
          {
            "name": "Adobe Photoshop",
            "icon": "photoshop"
          }
        ],
        "images": [
          // {
          //   src: "/images/projects/project-01/cover-02.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,

          // }
        ]
      },
      {
        "title": "Front-End Development",
        "description": "Building responsive, high-performance applications with a focus on accessibility and UX principles.",
        "tags": [
          {
            "name": "HTML/CSS",
            "icon": "html"
          },
          {
            "name": "JavaScript",
            "icon": "javascript"
          },
          {
            "name": "Responsive Design",
            "icon": "responsive"
          }
        ],
        "images": []
      },
      {
        "title": "UX & Design Strategy",
        "description": "Strategic design thinking combining user empathy with structured processes — understanding, exploring, and materializing ideas.",
        "tags": [
          {
            "name": "User Experience Design",
            "icon": "ux"
          },
          {
            "name": "Product Design",
            "icon": "product"
          },
          {
            "name": "Design Strategy",
            "icon": "strategy"
          },
          {
            "name": "Wireframing",
            "icon": "wireframe"
          },
          {
            "name": "Prototyping",
            "icon": "prototype"
          },
          {
            "name": "Human Computer Interaction",
            "icon": "hci"
          }
        ],
        "images": []
      },
      {
        "title": "Collaboration & Tools",
        "description": "Working cross-functionally with designers, product managers, and developers to deliver seamless digital experiences.",
        "tags": [
          {
            "name": "Cross-functional Collaboration",
            "icon": "collaboration"
          },
          {
            "name": "Agile",
            "icon": "agile"
          },
          {
            "name": "User Testing",
            "icon": "testing"
          }
        ],
        "images": []
      }
    ]

  }
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
