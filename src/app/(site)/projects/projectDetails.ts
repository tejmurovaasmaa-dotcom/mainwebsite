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
    unit: string[]; //type of property like 3 bhk, retail shop etc
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
        floors:'38 floors',
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
        id: "6",
        slug: "ace-hive-sector-22a-yamuna-expressway",
        name: "ACE Hive",
        type: "Commercial",
        description:
            "ACE Hive is an upcoming premium commercial and mixed-use development by ACE Group, located alongside the Yamuna Expressway in Sector 22A, Greater Noida. Positioned within the ACE AcreVille integrated township, the project blends high-street retail shops, business suites, studio apartments, food & dining zones, and entertainment spaces — creating a vibrant hub designed for investors, entrepreneurs, and businesses seeking high visibility and long-term growth potential. It enjoys excellent connectivity to Jewar International Airport and major NCR infrastructure corridors, making it a strategic commercial destination. :contentReference[oaicite:0]{index=0}",
        image: "https://res.cloudinary.com/dkgo71mgz/image/upload/v1770546261/hero_bg_ttgvvq.webp",
        location: "Sector 22A, Yamuna Expressway, Greater Noida",
        price: "Starting at ₹76.8 Lac", // approximate market range :contentReference[oaicite:1]{index=1}
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
        id: "7",
        slug: "ace-terra-sector-22d-yamuna-expressway",
        name: "ACE Terra",
        type: "Residential",
        description:
            "ACE Terra is a premium forest-themed residential project by ACE Group, located in Sector 22D along the Yamuna Expressway, Greater Noida. Spread across approximately 11 acres, the project is designed as a low-density luxury development with over 80% open green spaces. Positioned near the upcoming Noida International Airport (Jewar), Film City, and major infrastructure corridors, ACE Terra offers spacious 3 and 4 BHK residences built with Mivan construction technology, making it a strong choice for both end-users and long-term investors.",
        image: "https://res.cloudinary.com/dkgo71mgz/image/upload/v1770555928/ACETERRA_mgalyk.webp",
        videoLink: "", // replace if actual video exists
        location: "Sector 22D, Yamuna Expressway, Greater Noida",
        price: "Starting at ₹1.77 Cr*",
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
    },
    {
        id: "8",
        slug:"smartworl-le-courtyard",
        name:"Le Courtyard Residences",
        type:"Residential",
        description: "Smartworld ES Residences & Suites is an ultra-luxury mixed-use development located in Sector 98, Noida, right on the Noida–Greater Noida Expressway. Spread across 6 acres, the project features branded 3 & 4 BHK residences, premium service suites, and high-end high-street retail (Le Courtyard). Designed for CXOs, HNIs, and premium investors, the development offers low-density living with only 3 apartments per floor, expansive layouts, a 50,000 sq.ft. state-of-the-art clubhouse, and curated luxury retail and dining experiences.",
        image:"https://res.cloudinary.com/dkgo71mgz/image/upload/v1771136186/ellsa_ch4zen.webp",
        videoLink:"",
        location:"Sector 98, Noida",
        price:"Starting at ₹9.12 Cr",
        size:"3 & 4 BHK Residences",
        floors:"G+ 30 Floors",
        highlights: [
        "6-acre mixed land-use development",
        "3 ultra-luxury residential towers with only 203 units",
        "Only 3 apartments per floor for exclusivity",
        "50,000 sq.ft. elite clubhouse",
        "Located on prime Noida–Greater Noida Expressway frontage",
        "High-street luxury retail: Le Courtyard",
        "Premium fine dining & nightlife zone (No food court concept)",
        "Strong appreciation potential in a high-growth corridor"
        ],
        city:"noida",
        locationLink:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2095.095658102687!2d77.35611625528433!3d28.53531521266614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce74ba6d0c731%3A0x521fc3e5840a23!2sSmartworld%20Residences%20by%20Elie%20Saab%2C%20Sector%2098%2C%20Noida!5e1!3m2!1sen!2sin!4v1771138318394!5m2!1sen!2sin",
        possession:"December 2030 (Expected)",
        area: "6 Acres",
        unit: [
            "3BHK + S – 2850 sq.ft.",
            "3BHK + S + PWD Room – 3355 sq.ft.",
            "4BHK + S + PWD Room – 3810 sq.ft.",
            "1BHK Suite – 695 sq.ft.",
            "2BHK Suite – 1665 sq.ft."
        ],
        rera:"UPRERAPRJ300532/12/2025",
        amenities: [
        "50,000 sq.ft. state-of-the-art clubhouse",
        "Luxury spa, salon & wellness zones",
        "Premium high-street retail boulevard",
        "Fine dining restaurants & lounges",
        "Alfresco dining spaces",
        "24×7 security & access control",
        "Dedicated parking",
        "Low-density branded residences",
        "Modern architecture & premium specifications"
       ],
       gallery:["https://res.cloudinary.com/dkgo71mgz/image/upload/v1771136186/ellsa_ch4zen.webp"]
    },
    {
        id:"9",
        slug:"smartworld-es-commercial",
        name:"Le Courtyard Commercial",
        type:"Commercial",
        description:"Le Courtyard is a luxury high-street commercial development in Sector 98, Noida, located on the Noida–Greater Noida Expressway. It features three curated floors dedicated to premium retail, lifestyle brands, spa & wellness concepts, and fine dining—without a traditional food court model. Designed for strong visibility, high footfall, and affluent catchment from the adjoining branded residences and service suites, it offers strong potential for rental income, brand positioning, and long-term appreciation.",
        image:"https://res.cloudinary.com/dkgo71mgz/image/upload/v1771147182/elsaab_ihluqh.webp",
        videoLink:"",
        location:"Sector 98, Noida",
        price:"Starting at ₹1.5 Cr*",
        size:"1BHK &2BHK Suites",
        floors:"3 Floors",
        highlights:[
        "Luxury high-street commercial development",
        "Located on Noida–Greater Noida Expressway frontage",
        "Part of the 6-acre Smartworld ES Residences & Suites development",
        "Curated retail, lifestyle, spa & fine dining concepts",
        "High visibility & footfall from adjoining branded residences",
        "Strong rental income & brand positioning potential"
        ],
        city:"noida",
        locationLink:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2095.095658102687!2d77.35611625528433!3d28.53531521266614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce74ba6d0c731%3A0x521fc3e5840a23!2sSmartworld%20Residences%20by%20Elie%20Saab%2C%20Sector%2098%2C%20Noida!5e1!3m2!1sen!2sin!4v1771138318394!5m2!1sen!2sin",
        possession:"December 2030 (Expected)",
        area: "Approx. 6 Acres",
        unit:["1BHK Suite – 695 sq.ft.",
        "2BHK Suite – 1665 sq.ft."],
        rera:"UPRERAPRJ300532/12/2025",
        amenities:[
        "Curated retail, lifestyle, spa & fine dining concepts",
        "High visibility & footfall from adjoining branded residences",
        "24×7 security & access control",
        "Dedicated parking",
        "Modern architecture & premium specifications"
        ],
        gallery:["https://res.cloudinary.com/dkgo71mgz/image/upload/v1771147182/elsaab_ihluqh.webp"]
    },
    {
        id:"10",
        slug:"great-value-ekanam-sector-107",
        name:"Great Value Ekanam",
        type:"Residential",
        description:"Great Value Ekanam is an ultra-luxury, low-density residential development in Sector 107, Noida, designed by globally renowned firm Benoy. Spread across ~4 acres, the project features three iconic G+46 towers with only around 279–289 exclusive residences. Positioned as a high-end vertical green development, it offers Noida’s highest infinity pool, expansive clubhouse facilities, large-format apartments with 11–12 ft ceilings, and premium international specifications.",
        image:"https://res.cloudinary.com/dkgo71mgz/image/upload/v1771149375/eknm_zsiavr.webp",
        videoLink:"",
        location:"Sector 107, Noida",
        price:"Starting at ₹7.1 Cr*",
        size:"3 & 4 BHK Ultra-Luxury Residences",
        floors:"G+46 Floors (3 Towers)",
        highlights:[
            "Designed by internationally acclaimed architect Benoy",
            "Ultra low-density project with only ~279–289 units",
            "Noida’s highest infinity pool at 40th floor (Sky Hub)",
            "Large-format homes with 11–12 ft ceiling height",
            "Approx. 80% open green area with vertical green concept",
            "Premium clubhouse (40,000–100,000 sq.ft.) with luxury amenities"
        ],
        city:"noida",
        locationLink:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d339.60116425809144!2d77.3718034809748!3d28.542820562503497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce7104037aa19%3A0xecdec86fd99c2c25!2sEkanam%20by%20Great%20Value!5e1!3m2!1sen!2sin!4v1771148913179!5m2!1sen!2sin",
        possession:"June 2030 (Expected)",
        area:"Approx. 4 Acres",
        unit:[
            "3 BHK + SQ + Lounge – 3,525 sq.ft.",
            "4 BHK + SQ + Lounge – 5,525 sq.ft."
        ],
        rera:"UPRERAPRJ510056/09/2025",
        amenities:[
            "40th-floor infinity pool with rooftop dining deck & sky lounge",
            "Horizontal Gardens on refuge floors(16th ,24th ,32nd)",
            "Indoor all-weather swimming pool",
            "Luxury spa, gym, cigar lounge & private theatre",
            "Home automation in every apartment",
            "VRV/VRF air-conditioning system",
            "PM 2.5 air filtration system",
            "Imported German modular kitchen with chimney, hob, microwave",
            "Walk-in closets & imported marble flooring",
            "Only 3 units per floor with 5 high-speed lifts per tower",
            "24×7 security & controlled access"
        ],
        gallery:[
            "https://res.cloudinary.com/dkgo71mgz/image/upload/v1771149375/eknm_zsiavr.webp",
        ]
    },
    {
        id:"11",
        slug:"ace-verde",
        name:"Ace Verde",
        type:"Residential",
        description:"ACE Verde is a premium residential development by ACE Group located on the Yamuna Expressway in Sector 22A, Greater Noida. Spread over ~8 acres, it offers spacious luxury apartments with wide green views, modern amenities, and excellent regional connectivity. The project is positioned as a future-forward living destination benefiting from upcoming infrastructure like the Noida International Airport, Film City, and major sports & entertainment hubs. It is RERA approved and designed for families and investors seeking comfort, convenience, and strong appreciation potential.",
        image:"https://res.cloudinary.com/dkgo71mgz/image/upload/v1771667241/verda_jikuqr.webp",
        location:"Sector 22A, Yamuna Expressway, Greater Noida, Uttar Pradesh, India",
        price:"Starting at 86 Lacs",
        size:"Starting at 420 sq.ft.",
        floors:"25 Floors",
        highlights:[
            "Prime expressway frontage with green park views",
            "20 minutes from Noida International (Jewar) Airport",
            "Low-density configuration with modern design",
            "RERA approved residential community"
        ],
        city:"yamuna-expressway",
        locationLink:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12222.368657754665!2d77.54594552723155!3d28.332201380752874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc755d8766215%3A0x4b32b29e6e46a5a6!2sACE%20VERDE!5e1!3m2!1sen!2sin!4v1771666008012!5m2!1sen!2sin",
        possession:"March/April 2029",
        area:"8 Acres",
        unit:[
            "1BHK - 420 - 727 sq.ft.",
            "2BHK - 1022 - 1407 sq.ft.",
            "3BHK - 1005 - 1694 sq.ft.",
            "Studio - 308 - 405 sq.ft."
        ],
        rera:"UPRERAPRJ913692/03/2025",
        amenities:[
            "Clubhouse",
            "Swimming Pool",
            "Gym & Fitness Center",
            "Jogging & Cycling Tracks",
            "Landscaped Gardens",
            "Kids Play Area",
            "24×7 Security & CCTV",
            "Power Backup",
            "Water Supply",
            "Sports Courts",
            "Senior Citizen & Meditation Zones"
        ],
        gallery:[
            "https://res.cloudinary.com/dkgo71mgz/image/upload/v1771667241/verda_jikuqr.webp"
        ]
    },
    {
        id: "12",
        slug: "gaur-yamuna-city",
        name: "Gaur Yamuna City",
        type: "Residential",
        description: "Gaur Yamuna City is a large integrated residential township by Gaursons India located on the Yamuna Expressway in Sector 22D, Greater Noida. Spread across approx. 250 acres, the development includes apartments, villas, plotted development and commercial spaces with extensive open green areas, modern amenities, and strong connectivity to planned infrastructure such as Jewar International Airport and Formula 1 Race Track. The township is designed for families and investors seeking quality living and long-term appreciation. The master plan was prepared with international collaboration and emphasizes open space, lifestyle amenities, and future-ready infrastructure.",
        image: "https://res.cloudinary.com/dkgo71mgz/image/upload/v1771675067/ymncty_vohnwt.webp",
        location: "Sector 22D, Yamuna Expressway, Greater Noida, Uttar Pradesh, India",
        price: "Starting around ₹ 1.05 Cr",
        size: "Plot options, villas and apartments available over the township area",
        floors: "Typical building heights vary by phase",
        highlights: [
            "Integrated 250 acre township with approx. 65% open and green space",
            "Close proximity to Jewar International Airport and major infrastructure",
            "Master plan developed with international design input",
            "Range of residential typologies including apartments, villas, plots"
        ],
        city: "yamuna-expressway",
        locationLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6112.448757464664!2d77.56009030959!3d28.310206545296477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc782e3a4a123%3A0xaa21f263577b63e5!2sGaur%20Yamuna%20City!5e1!3m2!1sen!2sin!4v1771675266134!5m2!1sen!2sin",
        possession: "Varies by project phase",
        area: "Approx. 250 Acres",
        unit: [
            "Plots – multiple size options",
            "Villas – various configurations",
            "2/3/4 BHK apartments"
        ],
        rera: "UPRERAPRJ342117",
        amenities: [
            "Clubhouse & Recreational Zones",
            "Swimming Pool",
            "Gym & Fitness Centre",
            "Sports Facilities (Cricket, Football, Tennis etc.)",
            "Jogging/Walking Tracks & Landscaped Gardens",
            "Kids Play Areas",
            "24×7 Security & CCTV",
            "Water Supply & Power Backup",
            "Retail Outlets & Community Spaces",
            "Rainwater Harvesting / STP",
            "Wi-Fi Enabled Township"
        ],
        gallery: [
            "https://res.cloudinary.com/dkgo71mgz/image/upload/v1771675067/ymncty_vohnwt.webp"
        ]
    },
    {
        id: "13",
        slug:"lnt-green-reserve",
        name:"L&T Green Reserve",
        type:"Residential",
        description:"L&T Green Reserve is an ultra-luxury residential development by L&T Realty in Sector 128, Noida. Set on approximately 6.1 acres, the project offers premium 3, 4 & 5 BHK apartments with expansive layouts, panoramic golf course views and world-class amenities. Designed with contemporary architecture and lush green surroundings, Green Reserve combines luxury living with seamless connectivity to Noida Expressway and key NCR hubs.",
        image:"https://res.cloudinary.com/dkgo71mgz/image/upload/v1771764631/ltgrn_aliiyo.webp",
        location:"Sector 128, Noida",
        price:"Starting at ₹6.30 Cr*",
        size:"Staring at 2850 sq.ft.",
        floors:"G+45 Floors",
        highlights:[
        "Premium golf course-facing apartments",
        "6 Acres land 4 Towers",
        "Surrounded by 110 acres of golf course and green spaces",
        "World-class clubhouse & lifestyle amenities",
        "Panoramic views & landscaped green spaces",
        "Designed by top architects",
        "Strategic location on Noida Expressway"
        ],
        city:"noida",
        locationLink:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d641.2011502114689!2d77.3607668708949!3d28.523177292411546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce70043c259bf%3A0xdbefc6f96bb90b80!2sL%26T%20Green%20Reserve!5e1!3m2!1sen!2sin!4v1771765542742!5m2!1sen!2sin",
        possession:"May 2028 (Expected)",
        area:"6.1 Acres",
        unit:[
            "3BHK (2004 - 2163 sq.ft.)",
            "4BHK (2501 sq.ft.)",
        ],
        rera:"UPRERAPRJ459796/09/2025",
        amenities:[
        "Grand Clubhouse (~65,000 sq.ft.)",
        "Swimming Pool",
        "Gymnasium & Fitness Center",
        "Jogging & Cycling Tracks",
        "Kids’ Play Area",
        "Sports Courts",
        "Landscaped Gardens",
        "24×7 Security"
        ],
        gallery:[
            "https://res.cloudinary.com/dkgo71mgz/image/upload/v1771764631/ltgrn_aliiyo.webp"
        ]
    }
];
  