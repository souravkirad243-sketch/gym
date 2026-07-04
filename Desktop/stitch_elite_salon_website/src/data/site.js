import { images } from "../utils/images.js";

export const navItems = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export const serviceCards = [
  {
    title: "Artisan Hair Design",
    text: "Precision cuts, custom color-melting, and restorative treatments designed for your unique profile.",
    image: images.hair,
    to: "/services#hair",
  },
  {
    title: "Nail Artistry",
    text: "Sculpted elegance and mindful manicures using considered, low-tox lacquers.",
    image: images.nails,
    to: "/services#wellness",
  },
  {
    title: "Skin & Soul",
    text: "Rejuvenating facials and tension-melting rituals in a quiet sanctuary.",
    image: images.spa,
    to: "/services#skin",
  },
  {
    title: "Curated Experiences",
    text: "Full-day immersion packages designed to restore balance from head to toe.",
    image: images.lounge,
    to: "/services#wellness",
  },
];

export const serviceGroups = [
  {
    id: "hair",
    title: "Hair Artistry",
    intro: "From precision cuts to bespoke color, our master stylists transform hair into a canvas of elegance.",
    image: images.hair,
    groups: [
      {
        label: "Cuts & Styling",
        items: [
          { name: "Signature Master Cut", description: "Consultation, luxury wash, precision cut, and editorial blowout.", price: "$120+", duration: "75 min" },
          { name: "Silk Press & Finish", description: "Deep hydration treatment and sleek thermal styling.", price: "$85+", duration: "60 min" },
        ],
      },
      {
        label: "Color & Glow",
        items: [
          { name: "Artisanal Balayage", description: "Hand-painted highlights for natural, sun-kissed dimension.", price: "$250+", duration: "180 min" },
          { name: "Glaze & Tone", description: "Revitalize shine and neutralize unwanted tones.", price: "$90+", duration: "45 min" },
        ],
      },
    ],
  },
  {
    id: "skin",
    title: "Dermal Therapies",
    intro: "Advanced skincare using botanical enzymes and clinical precision.",
    groups: [
      {
        label: "Facials",
        items: [
          { name: "AD Radiance Facial", description: "Vitamin C and oxygen infusion for immediate luminosity.", price: "$165", duration: "60 min" },
          { name: "Sculpt & Lift Treatment", description: "Micro-current therapy with lymphatic drainage to contour and firm.", price: "$210", duration: "90 min" },
          { name: "Enzyme Renewal Peel", description: "Gentle fruit-acid exfoliation to resurface skin.", price: "$130", duration: "45 min" },
          { name: "Deep Calm Hydration", description: "Moisture surge treatment for sensitive complexions.", price: "$175", duration: "75 min" },
        ],
      },
    ],
  },
  {
    id: "wellness",
    title: "Holistic Wellness",
    intro: "Spa rituals and therapeutic massage designed for whole-body renewal.",
    groups: [
      {
        label: "Body Rituals",
        items: [
          { name: "Serenity Massage", description: "Rhythmic Swedish massage with warmed aromatherapy oils.", price: "$140", duration: "60 min" },
          { name: "The Ritual Package", description: "Full body scrub, facial, and hot stone therapy.", price: "$380", duration: "3 hr" },
          { name: "Reflexology Path", description: "Targeted pressure point therapy for hands and feet.", price: "$95", duration: "45 min" },
        ],
      },
    ],
  },
];

export const testimonials = [
  {
    quote: "The moment I step through the doors of AD Unisex Salon, the noise of the city disappears.",
    name: "Elena V.",
    role: "Fashion Designer",
  },
  {
    quote: "Unparalleled service and attention to detail. My weekly manicure has become a non-negotiable ritual.",
    name: "Marcus K.",
    role: "Creative Director",
  },
  {
    quote: "The consultation was thoughtful, the color was exact, and the entire visit felt calm from start to finish.",
    name: "Priya S.",
    role: "Founder",
  },
];

export const team = [
  { name: "Elena Voss", role: "Creative Director", text: "Architectural cutting and dimensional color shaped by 15 years in Paris and London.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_VPSuWp9m03Zi2u1jnDVajNxSWmNcsDX4q6dh-sXxVI2kSo1VeErY865F9OF1PQEn828Dc54OWSRqZRk1B524OfDDYx3bybHWlp_sLaq72rtZZgvi44Jd8sj7ph0CPbxI85H3SF0qfomy_nRTHgVwfgf_rJFwVqumcGYKEo8fVCl-j0jP6UUDsuI5S84QUKUW1xDMk2Sc4X-cGtO7l_pAaUgWq9K6Jft1sKSybTqLtiwitwcMynIXYA" },
  { name: "Julian Thorne", role: "Senior Colorist", text: "Master of lived-in blondes and hand-painted balayage.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAuaGfp9LQtGdJX5MlOLPQvDmYi5wX8uMGCgcodkb4h3KqCeqW0c8fddfa_VNHwKxmaZ8XOFPvg7V66l3I9ay49NLRdwMq2F3Jvp7x0OkVrnDHmY8wobAkvEacMcE_pXBQvzu_GMkLtRF0GgSmZPafS2fC2BKNa-WTUlOsK8jCFQnBxWyahjvGcd61uWa21bS0VpzINi4r2_0XV8AfYTzumS2Mx4hQp04T4dgWs-PlqQrCvzp7-fmpAQw" },
  { name: "Maya Kalu", role: "Textural Specialist", text: "Dedicated to enhancing the natural movement of curls and coils.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMcYbFvqz1fIV3mKhrxyjbzo0y1bDt6fTduy7SDH9Wm4wcTRYrfDPa_gjbNV8DpYk42WOvZUuNIgzblmHm2UNTlAwMk9Mwjig7M1q7dH88MU3Ud340a5SxvefB6xxgI1ywJ42kTIDOyQ5TIJGg766GE24wqRD5P8s2aeiqlKfNrYS_gTCjPKBizQJOgmvVttKBCO_yNnoLcZuD2pSkRRrFqIOWPtFMJEQZYRzaP_U-Nw_c4IphJknCuA" },
];

export const faqs = [
  { question: "How quickly will my appointment be confirmed?", answer: "Our concierge reviews requests during business hours and replies within two hours." },
  { question: "Can I choose a specific specialist?", answer: "Yes. Select your preferred specialist in the form, or choose no preference for the soonest match." },
  { question: "Do you accept same-day appointments?", answer: "Same-day availability changes often. Submit a request or call the salon for urgent openings." },
];
