export interface Company {
  name: string;
  tagline: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  llpin: string;
  incorporation: string;
  activity: string;
  status: string;
  registrar: string;
}

export interface Stat {
  id: string;
  value: string;
  label: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  enabled: boolean;
}

export interface Project {
  id: string;
  name: string;
  category: string;
  location: string;
  year: string;
  status: string;
  description: string;
  cover: string;
  gallery: string[];
  enabled: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  enabled: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  review: string;
  rating: number;
  image: string;
  enabled: boolean;
}

export interface Leadership {
  name: string;
  designation: string;
  description: string;
  image: string;
}

export interface WhyItem {
  id: string;
  title: string;
  description: string;
}

export interface Homepage {
  heroHeading: string;
  heroSubheading: string;
  heroImage: string;
  ctaPrimary: string;
  ctaSecondary: string;
  credibility: string[];
  aboutHeading: string;
  aboutText: string;
  aboutImage: string;
  stats: Stat[];
  why: WhyItem[];
  ctaHeading: string;
  ctaText: string;
}

export interface Settings {
  siteTitle: string;
  logoText: string;
  logoSubtitle: string;
  footerText: string;
  phone: string;
  email: string;
  address: string;
  social: { label: string; url: string }[];
}

export interface Enquiry {
  id: string;
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
  status: "new" | "contacted" | "completed";
  createdAt: string;
}

export const IMAGES = {
  hero: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1920&q=80",
  about:
    "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1200&q=80",
  residential:
    "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
  commercial:
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
  construction:
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80",
  architecture:
    "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&w=1200&q=80",
  infrastructure:
    "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1200&q=80",
  interior:
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
  planning:
    "https://images.unsplash.com/photo-1503387837-b154d5074bd2?auto=format&fit=crop&w=1200&q=80",
  crane:
    "https://images.unsplash.com/photo-1590644365607-1c5a0dd0e5c0?auto=format&fit=crop&w=1200&q=80",
  facade:
    "https://images.unsplash.com/photo-1470723710355-95304d8aece4?auto=format&fit=crop&w=1200&q=80",
  portrait:
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
  person1:
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
  person2:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
  person3:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
};

export const companyData: Company = {
  name: "Prospera Arcon LLP",
  tagline: "Construction & Real Estate, Pune",
  description:
    "Prospera Arcon LLP is a recently established Limited Liability Partnership based in Pune, Maharashtra, focused on construction and real estate-related activities. The company aims to deliver quality construction and development solutions with a strong emphasis on professionalism, reliability and long-term value.",
  address:
    "F 8 Clover Pinnacle Ridge, S.No. 33/2/75, Kondhwa, Pune City, Pune, Maharashtra, India - 411048",
  phone: "+91 90350 92921",
  email: "support.prosperaarconllp.com",
  llpin: "ACY-0679",
  incorporation: "May 12, 2026",
  activity: "Construction of buildings and real estate-related activities",
  status: "Active",
  registrar: "ROC Pune",
};

export const homepageData: Homepage = {
  heroHeading: "Building Tomorrow. Creating Lasting Value.",
  heroSubheading:
    "Prospera Arcon LLP is a Pune-based real estate and construction firm focused on building quality spaces, reliable infrastructure and long-term value.",
  heroImage: IMAGES.hero,
  ctaPrimary: "Explore Our Work",
  ctaSecondary: "Get In Touch",
  credibility: [
    "Pune Based",
    "Construction & Real Estate",
    "Professional & Reliable",
    "Quality Driven",
  ],
  aboutHeading: "Building With Purpose.",
  aboutText:
    "Prospera Arcon LLP is a Pune-based construction and real estate company built around a simple principle: every structure should serve its owners for decades. From building construction and residential development to commercial and infrastructure work, we combine disciplined planning with professional execution to create spaces of lasting value.",
  aboutImage: IMAGES.about,
  stats: [
    { id: "s1", value: "2026", label: "Incorporated" },
    { id: "s2", value: "Pune", label: "Based In" },
    { id: "s3", value: "100%", label: "Quality Focused" },
    { id: "s4", value: "24/7", label: "Commitment" },
  ],
  why: [
    {
      id: "w1",
      title: "Quality First",
      description:
        "Focused on delivering reliable construction and development solutions.",
    },
    {
      id: "w2",
      title: "Professional Approach",
      description: "Structured planning and professional execution at every stage.",
    },
    {
      id: "w3",
      title: "Trust & Transparency",
      description: "Clear communication and a client-first approach.",
    },
    {
      id: "w4",
      title: "Pune Expertise",
      description:
        "Strong understanding of Pune's real estate and construction environment.",
    },
    {
      id: "w5",
      title: "Long-Term Vision",
      description:
        "Focused on creating lasting value through thoughtful development.",
    },
  ],
  ctaHeading: "Let's Build Something Valuable Together.",
  ctaText:
    "Discuss your next construction, development or real estate project with Prospera Arcon LLP.",
};

export const servicesData: Service[] = [
  {
    id: "sv1",
    title: "Building Construction",
    description:
      "Planning and execution of high-quality building construction projects.",
    category: "Construction",
    image: IMAGES.construction,
    enabled: true,
  },
  {
    id: "sv2",
    title: "Residential Projects",
    description:
      "Development and construction solutions for modern residential spaces.",
    category: "Residential",
    image: IMAGES.residential,
    enabled: true,
  },
  {
    id: "sv3",
    title: "Commercial Construction",
    description:
      "Professional commercial construction solutions with a focus on functionality and quality.",
    category: "Commercial",
    image: IMAGES.commercial,
    enabled: true,
  },
  {
    id: "sv4",
    title: "Real Estate Development",
    description: "End-to-end real estate development and project execution.",
    category: "Real Estate",
    image: IMAGES.facade,
    enabled: true,
  },
  {
    id: "sv5",
    title: "Project Planning",
    description:
      "Strategic planning and project management for construction initiatives.",
    category: "Planning",
    image: IMAGES.planning,
    enabled: true,
  },
  {
    id: "sv6",
    title: "Infrastructure Solutions",
    description: "Reliable construction and infrastructure-focused execution.",
    category: "Infrastructure",
    image: IMAGES.infrastructure,
    enabled: true,
  },
];

export const projectsData: Project[] = [
  {
    id: "prospera-heights",
    name: "Prospera Heights",
    category: "Residential Development",
    location: "Pune",
    year: "2026",
    status: "Ongoing",
    description:
      "A modern residential development designed around light, ventilation and efficient planning, delivering comfortable homes with durable construction quality.",
    cover: IMAGES.residential,
    gallery: [IMAGES.residential, IMAGES.interior, IMAGES.architecture],
    enabled: true,
  },
  {
    id: "arcon-business-square",
    name: "Arcon Business Square",
    category: "Commercial Development",
    location: "Pune",
    year: "2026",
    status: "Planning",
    description:
      "A commercial development focused on flexible floor plates, efficient circulation and a facade that expresses corporate confidence.",
    cover: IMAGES.commercial,
    gallery: [IMAGES.commercial, IMAGES.facade, IMAGES.planning],
    enabled: true,
  },
  {
    id: "clover-residency",
    name: "Clover Residency",
    category: "Residential Project",
    location: "Pune",
    year: "2026",
    status: "Ongoing",
    description:
      "A boutique residential project emphasising quality finishes, thoughtful landscaping and long-term maintainability.",
    cover: IMAGES.architecture,
    gallery: [IMAGES.architecture, IMAGES.residential, IMAGES.interior],
    enabled: true,
  },
  {
    id: "prospera-urban-spaces",
    name: "Prospera Urban Spaces",
    category: "Mixed-Use Development",
    location: "Pune",
    year: "2026",
    status: "Concept",
    description:
      "A mixed-use concept combining retail, workspace and residences into a single walkable urban block.",
    cover: IMAGES.infrastructure,
    gallery: [IMAGES.infrastructure, IMAGES.crane, IMAGES.commercial],
    enabled: true,
  },
];

export const galleryData: GalleryItem[] = [
  { id: "g1", title: "Residential Tower", category: "Residential", image: IMAGES.residential, enabled: true },
  { id: "g2", title: "Corporate Facade", category: "Commercial", image: IMAGES.commercial, enabled: true },
  { id: "g3", title: "Site Execution", category: "Construction", image: IMAGES.construction, enabled: true },
  { id: "g4", title: "Structural Geometry", category: "Architecture", image: IMAGES.architecture, enabled: true },
  { id: "g5", title: "Urban Infrastructure", category: "Infrastructure", image: IMAGES.infrastructure, enabled: true },
  { id: "g6", title: "Interior Detailing", category: "Architecture", image: IMAGES.interior, enabled: true },
  { id: "g7", title: "Project Planning", category: "Construction", image: IMAGES.planning, enabled: true },
  { id: "g8", title: "Glass & Steel", category: "Commercial", image: IMAGES.facade, enabled: true },
  { id: "g9", title: "Site Cranes", category: "Infrastructure", image: IMAGES.crane, enabled: true },
];

export const testimonialsData: Testimonial[] = [
  {
    id: "t1",
    name: "Rohit Deshmukh",
    company: "Deshmukh Estates",
    review:
      "Clear planning, honest communication and a team that treats the site like their own. The quality of execution speaks for itself.",
    rating: 5,
    image: IMAGES.person1,
    enabled: true,
  },
  {
    id: "t2",
    name: "Anjali Kulkarni",
    company: "Kulkarni Developers",
    review:
      "Structured processes and reliable timelines. Working with Prospera Arcon made a complex development feel manageable.",
    rating: 5,
    image: IMAGES.person2,
    enabled: true,
  },
  {
    id: "t3",
    name: "Sameer Joshi",
    company: "Vistara Retail",
    review:
      "Their understanding of Pune's construction landscape saved us months of guesswork. Genuinely professional partners.",
    rating: 4,
    image: IMAGES.person3,
    enabled: true,
  },
];

export const leadershipData: Leadership = {
  name: "Vikesh Kantilal Chhajed",
  designation: "Designated Partner",
  description:
    "Vikesh Kantilal Chhajed leads Prospera Arcon LLP as Designated Partner, guiding the firm's construction and real estate initiatives across Pune. His approach combines disciplined project governance with a long-term view of value creation for clients and communities.",
  image: IMAGES.portrait,
};

export const settingsData: Settings = {
  siteTitle: "Prospera Arcon LLP Pune | Construction & Real Estate",
  logoText: "PROSPERA ARCON LLP",
  logoSubtitle: "PUNE",
  footerText:
    "Pune-based construction and real estate company focused on quality, reliability and long-term value.",
  phone: "+91 90350 92921",
  email: "support.prosperaarconllp.com",
  address:
    "F 8 Clover Pinnacle Ridge, S.No. 33/2/75, Kondhwa, Pune City, Pune, Maharashtra, India - 411048",
  social: [
    { label: "LinkedIn", url: "#" },
    { label: "Instagram", url: "#" },
    { label: "Facebook", url: "#" },
    { label: "X", url: "#" },
  ],
};

export const PROCESS_STEPS = [
  { no: "01", title: "Consultation", text: "Understanding requirements, site context and budget." },
  { no: "02", title: "Planning", text: "Feasibility, approvals, scheduling and cost planning." },
  { no: "03", title: "Design & Development", text: "Architectural and structural development of the scheme." },
  { no: "04", title: "Execution", text: "Disciplined on-site construction with progress tracking." },
  { no: "05", title: "Quality Review", text: "Inspections, snagging and compliance verification." },
  { no: "06", title: "Project Handover", text: "Documentation, walkthrough and final handover." },
];
