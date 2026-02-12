

export interface Plots{
    id: number;
    name: string;
    city: string;
    location: string;
    type: string;
    image: string;
    description?: string;
    price: string;
    area: string;
    facing: string;
    highlights: string[];
}

export const plotsDetails: Plots[] = [
    {
        id: 1,
        name: "Plots",
        city: "noida",
        location: "Sector 90",
        type: "Plots",
        image: "/images/plots.webp",
        description: "Plots in Noida",
        price: "1000000",
        area: "1000",
        facing: "East",
        highlights: ["Plots in Noida", "Plots in Noida", "Plots in Noida"]
    }
]

