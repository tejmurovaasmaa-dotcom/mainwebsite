

export interface Plots{
    id: number;
    name ?: string;
    city: string;
    location: string;
    locationLink ?: string;
    type: string;
    image: string;
    description?: string;
    size ?: string[];
    price: string;
    area: string;
    facing ?: string;
    highlights: string[];
}

export const plotsDetails: Plots[] = [
    {
        id:1,
        name:"Ace Estate",
        city: "yamuna-expressway",
        location: "Sector 22D, Yamuna Expressway, Greater Noida",
        locationLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7270.889474557004!2d77.55800059640245!3d28.282070865232612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cb70014d829db%3A0xc10405d179da24a6!2sACE%20Estate!5e1!3m2!1sen!2sin!4v1771753580387!5m2!1sen!2sin",
        type: "Residential Plot",
        image: "https://res.cloudinary.com/dkgo71mgz/image/upload/v1771759805/estte_srs1dg.webp",
        description: "Logix ACE Estate is a premium plotted residential township located in Sector 22D along the Yamuna Expressway, Greater Noida. Spread across approximately 68 acres, the project offers well-planned residential plots within a gated community environment. Strategically positioned near upcoming infrastructure developments including Jewar International Airport, the project is designed for both end-use and long-term investment appreciation.",
        size:["1350sq.ft.","1800sq.ft.","2700sq.ft.","4500sq.ft."],
        price: "Starting approx ₹2 Cr* (varies by plot size & availability)",
        area: "",
        highlights: [
            "RERA Registered Project",
            "Spread over ~68 Acres",
            "Approx 388 Residential Plots",
            "Strategic Yamuna Expressway Location",
            "Close to Upcoming Jewar International Airport",
            "Gated Township with Internal Roads",
            "Investment-Focused Growth Corridor"
        ]
    },
    
]

