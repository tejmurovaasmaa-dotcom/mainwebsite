import type { StaticImageData } from "next/image";
// import { totalProjects } from "./totalProjects";

export interface Property {
    id: string;
    slug: string;
    name: string;
    type: 'Residential' | 'Commercial';
    description: string;
    image: string | StaticImageData;
    videoLink?:string;
    location: string;
    price: string;
    size: string;
    floors?: string;
    highlights?: string[];
    city: string;
    locationLink?:string;
    possession: string;
    area?: string;
    unit: string[];
    rera?: string;
    amenities: string[];
    gallery: string[];
}

export const properties: Property[] = [
    {
        id: "1",
        slug: "splendor-onyx",
        name: "Onyx By Splendor",
        type: "Commercial",
        description: "Onyx By Splendor is a premium commercial project in Sector 142, Noida, developed by Splendor Group. Spread over 10 acres, it offers modern office spaces, retail, and IT/ITES units with excellent connectivity to the Noida Expressway and Aqua Line Metro.",
        image: "https://res.cloudinary.com/dkgo71mgz/image/upload/v1770201641/h2_img2_1_e2uhx6.webp",
        location: "Sector 142, Noida",
        price: "Starting at ₹25 lacs",
        size: "starting at 112 sq.ft.",
        highlights:["Well-connected to Noida-Greater Noida Expressway","Nearby 142 Metro Station","Close to Jewar Airport","Close to Advant Navis Business Park","Close to Noida-Greater Noida Expressway"],
        city: "noida",
        locationLink:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.000!2d77.4126648!3d28.5032121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce99389290e23%3A0xe241c2b9a1561f8f!2sONYX%20by%20Splendor!5e0!3m2!1sen!2sin!4v1",
        possession: "June 2029(Expected)",
        area:"10 acres",
        unit: ["Retail shops", "food court", "office space", "business suites"],
        rera: "UPRERAPRJ920006/03/2024",
        amenities: ["High-speed Elevators", "24/7 Security", "50 Seats Auditorium", "Gaming Zone"],
        gallery: [
            "https://res.cloudinary.com/dkgo71mgz/image/upload/v1767605870/onyx_geu5sx.png",
            "https://res.cloudinary.com/dkgo71mgz/image/upload/v1770201790/about-pic2_2_uhpnga.webp",
            "https://res.cloudinary.com/dkgo71mgz/image/upload/v1770201641/h2_img2_1_e2uhx6.webp"
        ]
    },  
    {
        id:"2",
        slug:"experion-saatori",
        name:"Experion Saatori",
        type:"Residential",
        description:"Experion Saatori on sector 151 Noida Expressway🌟. This is a newly launched ultra luxury residential project on Noida Expressway. Spread across 5 acres of prime land in Sector 151, this limited-edition development offers an elevated lifestyle experience crafted for those who value space, sophistication, and serenity.",
        image:"https://res.cloudinary.com/dkgo71mgz/image/upload/v1770197893/wmwelfzkrto7vnojmsru_hvjt7o.webp",
        videoLink:"https://res.cloudinary.com/dkgo71mgz/video/upload/v1770202235/WhatsApp_Video_2026-02-03_at_2.10.50_PM_yqui9v.mp4",
        location:"Sector 151, Noida",
        price:"Starting at ₹3.5 Cr",
        size:"starting at 2100 sq.ft.",
        floors:'35-38 floors',
        city:"noida",
        locationLink:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3708.559084908491!2d77.45784831529266!3d28.446265740231644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc37a8f4b5c73%3A0xe628ec1bef381184!2sExperion%20Sector%20151%20Noida!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
        possession:"December 2029(Expected)",
        area:"5 acres",
        unit:["3BHK + 3T", "3BHK + Utility", "4BHK + Utility"],
        rera:"UPRERAPRJ747628/01/2026",
        amenities:["Exclusive 50,000 sq.ft. Clubhouse","Water Cascading Features","State-of-the-art fitness zone","*Infinity-edge swimming pool","Advanced security system with 24x7 surveillance"],
        gallery:[
            "https://res.cloudinary.com/dkgo71mgz/image/upload/v1770197893/wmwelfzkrto7vnojmsru_hvjt7o.webp",
        ]
    },
    {
        id:"3",
        slug:"godrej-arden",
        name:"Godrej Arden",
        type:"Residential",
        description:"Godrej Arden Sigma 3 is a premium residential development by Godrej Properties in Sector Sigma 3, Greater Noida. The project offers thoughtfully designed apartments with modern architecture, lush green surroundings, and world-class amenities, ensuring a refined urban lifestyle with excellent connectivity.",
        image:"https://res.cloudinary.com/dkgo71mgz/image/upload/v1770460051/firstPage_bhp1cl.webp",
        location:"Sigma 3, Greater Noida",
        price:"Starting at ₹2.3 Cr",
        size:"starting at 1375 sq.ft.",
        highlights:["10 minutes from Pari Chowk",
        "14 minutes from Noida–Greater Noida Expressway",
        "9 minutes from Yamuna Expressway",
        "40 minutes from Noida International Airport (Jewar)",
        "Close proximity to leading institutions: DPS, Amity, and Galgotias",
        "Easy access to top healthcare facilities: Fortis and GIMS",
        "Near upcoming IT hubs: Microsoft, TCS, and Wipro campuses"],
        city:"greater-noida",
        locationLink:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1814.887261787533!2d77.55238322007867!3d28.44771823400521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc10000ac1bb5%3A0x41b6e9bdfec5e52!2sGodrej%20Arden%2C%20Greater%20Noida!5e1!3m2!1sen!2sin!4v1770459341745!5m2!1sen!2sin",
        possession:"May 2030(Expected)",
        area:"9.58 acres + 10 acre green belt",
        unit:["2 BHK + Study (1375 sq.ft.) ",
        "3 BHK (1850 sq.ft.)",
        "3 BHK + Study (2100 sq.ft.)",
        "3 BHK + Servant Room (2450 sq.ft.)",
        "4 BHK (2700 sq.ft.)"],
        rera:"UPRERAPRJ110163/08/2025",
        amenities:["Most premium neighbourhood in its micro-market",
        "Spread across 9.58 acres + 10-acre green belt",
        "50%+ landscaped greens & 1000+ trees",
        "Elevated landscape podium (2.7 acres)",
        "Verdantia Club for wellness & community living",
        "No high-rise clutter around - pure openness & privacy"],
        gallery:["https://res.cloudinary.com/dkgo71mgz/image/upload/v1770460051/firstPage_bhp1cl.webp"]
    },
    {
        id:"4",
        slug:"numbus-arista",
        name:"The Arista Luxe",
        type:"Residential",
        description:"Nimbus Arista is a premium residential project in Sector 168, Noida, offering beautifully designed apartments with modern amenities, green landscapes and excellent connectivity. It blends contemporary living with comfort, making it ideal for families and investors alike.",
        image:"https://res.cloudinary.com/dkgo71mgz/image/upload/v1770467412/Untitled_design_kmavl0.webp",
        videoLink:"https://res.cloudinary.com/dkgo71mgz/video/upload/v1770527585/ARISTA_video_cexbiv.mp4",
        location:"Sector 168, Noida",
        price:"Starting at ₹3.5 Cr",
        size:"Starting at 2353 Sqft",
        floors:'ground + 31 floors',
        highlights:["Sector 142 and Sector 137 Metro Stations (Aqua Line) within 5–7 minutes.","Shiv Nadar School and Shriram Millennium school at walking distance.","Close proximity to major office hubs like Advant Navis, MetLife, and Genpact.","Jewar International Airport approximately 40–45 minutes away."],
        city:"noida",
        locationLink:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4314.672522152447!2d77.40610693170612!3d28.493772733884175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce91b3e61e28b%3A0x3f6a24aa65fee5c6!2sThe%20Arista%20Luxe!5e1!3m2!1sen!2sin!4v1770527759414!5m2!1sen!2sin",
        possession:"Jan 2030(Expected)",
        area:"10 acres",
        unit:["3 BHK+3 Toilet +Servent.2353 Sqft",
        "3 BHK+3 Toilet+Servent.2367 Sqft",
        "3 BHK+3 Toilet+Servent.2393 Sqft",
        "4 BHK+4 Toilet+Servent.3098 Sqft",
        "4 BHK+4 Toilet+Servent.4025 Sqft",
        "5 BHK+5 Toilet+Servent+Family Long.5026 Sqft"],
        rera:"UPRERAPRJ11625",
        amenities:["Tennis court","Badminton court","Squash court","Rooftop jogging track","Italian marble flooring","VRV air-conditioning","Modular kitchen option"],
        gallery:["https://res.cloudinary.com/dkgo71mgz/image/upload/v1770467412/Untitled_design_kmavl0.webp"]
    },
    {
        id: "5",
        slug: "eldeco-7-peaks-residences",
        name: "Eldeco 7 Peaks Residences",
        type: "Residential",
        description:
            "Eldeco 7 Peaks Residences is a newly launched ultra-luxury residential project in Sector Omicron 1A, Greater Noida. Inspired by the world’s seven highest mountain peaks, the project focuses on oxygen-rich living, low-density planning, expansive green spaces, and premium lifestyle amenities for refined urban living.",
        image:
            "https://res.cloudinary.com/dkgo71mgz/image/upload/v1770529810/ud_eqtdrz.webp",
        videoLink:"https://res.cloudinary.com/dkgo71mgz/video/upload/v1770543464/eldeco_822026_zjah9w.mp4",
        location: "Sector Omicron 1A, Greater Noida",
        price: "Starting at ₹2.10 Cr",
        size: "Starting at 1750 Sqft",
        floors: "G + 30 / 31 Floors",
        highlights: [
            "New launch premium project inspired by the world’s seven highest mountain peaks.",
            "Nearly 80% open and green area ensuring excellent ventilation and natural light.",
            "Ultra-low density living with only high-rise luxury towers.",
            "Close to Noida–Greater Noida Expressway and Yamuna Expressway.",
            "30–40 minutes drive to upcoming Noida International Airport (Jewar).",
            "Aqua Line metro connectivity via Delta 1 and Knowledge Park II stations."
        ],
        city: "greater-noida",
        locationLink:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4316.20552235277!2d77.56182395266366!3d28.456247164229296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cbfc3d742294b%3A0x54eb8c3b5feb8305!2sEldeco%207%20Peaks%20Residences!5e1!3m2!1sen!2sin!4v1770529537421!5m2!1sen!2sin",
        possession: "Dec 2030(Expected)",
        area: "Approx. 7.5–8 Acres",
        unit: [
            "3 BHK + 3 Toilets | 1750 – 2100 Sqft",
            "4 BHK + 4 Toilets | 2600 – 3200 Sqft",
            "Penthouse | 3500 – 5000 Sqft"
        ],
        rera: "UPRERAPRJ106523/01/2026",
        amenities: [
            "Grand clubhouse (approx. 1 lakh sq. ft.)",
            "Swimming pool",
            "Modern gymnasium",
            "Banquet hall",
            "Cricket pitch",
            "Basketball court",
            "Tennis court",
            "Skating rink",
            "Reflexology path",
            "Rain garden",
            "Orchard gardens",
            "Tree-rich campus with 240+ trees",
            "24/7 CCTV surveillance",
            "Biometric access",
            "Smart visitor management system"
        ],
        gallery: [
           "https://res.cloudinary.com/dkgo71mgz/image/upload/v1770529810/ud_eqtdrz.webp"
        ]
    },
    {
        id: "ace-hive-yamuna-expressway",
        slug: "ace-hive-sector-22a-yamuna-expressway",
        name: "ACE Hive",
        type: "Commercial",
        description:
            "ACE Hive is an upcoming premium commercial and mixed-use development by ACE Group, located alongside the Yamuna Expressway in Sector 22A, Greater Noida. Positioned within the ACE AcreVille integrated township, the project blends high-street retail shops, business suites, studio apartments, food & dining zones, and entertainment spaces — creating a vibrant hub designed for investors, entrepreneurs, and businesses seeking high visibility and long-term growth potential. It enjoys excellent connectivity to Jewar International Airport and major NCR infrastructure corridors, making it a strategic commercial destination. :contentReference[oaicite:0]{index=0}",
        image: "https://res.cloudinary.com/dkgo71mgz/image/upload/v1770546261/hero_bg_ttgvvq.webp",
        location: "Sector 22A, Yamuna Expressway, Greater Noida",
        price: "Starting from ₹76.77 Lac", // approximate market range :contentReference[oaicite:1]{index=1}
        size: "Retail & Studio Apartments (approx. 48 sq.ft – 800 sq.ft)", // typical ranges :contentReference[oaicite:2]{index=2}
        floors: "G+17 Floors", // typical configuration :contentReference[oaicite:3]{index=3}
        highlights: [
            "Located on the Yamuna Expressway growth corridor",
            "Part of the integrated ACE AcreVille 100-acre township",
            "Expressway-facing site with high visibility",
            "Close proximity to Jewar International Airport and Buddh International Circuit",
            "Mixed use: high-street retail, studio apartments, food & entertainment zones",
            "Strong rental and investment potential in fast-developing NCR market"
        ],
        city: "yamuna-expressway",
        locationLink: "https://www.google.com/maps?q=ACE+Hive+Sector+22A+Yamuna+Expressway+Greater+Noida",
        possession: "Sep 2028(Expected)", // based on RERA timeline :contentReference[oaicite:4]{index=4}
        area: "Approx. 5 Acres", // development land size :contentReference[oaicite:5]{index=5}
        unit: [
            "Retail Shops – varying sizes",
            "Studio Apartments – approx. 700–800 sq.ft",
            "Business Suites / Social Dining & F&B Zones"
        ],
        rera: "UPRERAPRJ939595/03/2025", // registered RERA :contentReference[oaicite:6]{index=6}
        amenities: [
            "High-street retail frontage",
            "Studio living units",
            "Food courts & restaurants",
            "Entertainment & gaming zones",
            "Modern lifts & escalators",
            "24×7 power backup",
            "CCTV security & surveillance",
            "Ample multi-level parking"
        ],
        gallery: [
            "https://res.cloudinary.com/dkgo71mgz/image/upload/v1770546261/hero_bg_ttgvvq.webp"
        ],
    },
    {
  id: "ace-terra-yamuna-expressway",
  slug: "ace-terra-sector-22d-yamuna-expressway",
  name: "ACE Terra",
  type: "Residential",
  description:
    "ACE Terra is a premium forest-themed residential project by ACE Group, located in Sector 22D along the Yamuna Expressway, Greater Noida. Spread across approximately 11 acres, the project is designed as a low-density luxury development with over 80% open green spaces. Positioned near the upcoming Noida International Airport (Jewar), Film City, and major infrastructure corridors, ACE Terra offers spacious 3 and 4 BHK residences built with Mivan construction technology, making it a strong choice for both end-users and long-term investors.",
  image: "https://res.cloudinary.com/dkgo71mgz/image/upload/v1770555928/ACETERRA_mgalyk.webp",
  videoLink: "", // replace if actual video exists
  location: "Sector 22D, Yamuna Expressway, Greater Noida",
  price: "Starting from ₹1.77 Cr* onwards",
  size: "3 & 4 BHK Apartments (Super Area: 1,770 – 3,025 sq.ft.)",
  floors: "G+25 Floors",
  highlights: [
    "Forest-themed luxury residential project with over 80% open green area",
    "Low-density development with approx. 106 units per acre",
    "Close proximity to Noida International Airport (Jewar)",
    "Located near the proposed 1000-acre Film City and Olympic City",
    "Spacious 3 & 4 BHK apartments with servant room options",
    "Mivan construction for superior quality and durability",
    "Strong price appreciation of 15–17% in the last year"
  ],
  city: "yamuna-expressway",
  locationLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d82347.42126782968!2d77.57536673222265!3d28.169632899281023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cb9b82435d3a3%3A0xfc0759ebf8e31756!2sACE%20TERRA!5e1!3m2!1sen!2sin!4v1770556339388!5m2!1sen!2sin",
  possession: "Dec 2028 (expected)",
  area: "Approx. 11 Acres",
  unit: [
    "3 BHK + 3T",
    "3 BHK + 3T + Servant",
    "4 BHK + 4T + Servant"
  ],
  rera: "UPRERAPRJ683816",
  amenities: [
    "60,000 sq.ft. signature clubhouse",
    "Multi-cuisine restaurant, bakery & café",
    "Swimming pool with water features",
    "Fully equipped gym & yoga center",
    "Squash, tennis & basketball courts",
    "Jogging tracks & senior citizen park",
    "Kids’ play zone & library",
    "EV charging stations",
    "Rainwater harvesting & solar lighting",
    "24×7 security with CCTV surveillance"
  ],
  gallery: [
    "https://res.cloudinary.com/dkgo71mgz/image/upload/v1770555928/ACETERRA_mgalyk.webp"
  ],
}
];
