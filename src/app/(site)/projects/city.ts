import type { StaticImageData } from "next/image";
import { totalProjects } from "./totalProjects";


export interface City {
    name: string;
    slug: string;
    image: string | StaticImageData;
    description: string;
    projectCount: number;
}

export const cities: City[] = [
    {
        name: "Noida",
        slug: "noida",
        image: "https://images.pexels.com/photos/11310605/pexels-photo-11310605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        description: "A rapidly growing hub with modern amenities and planned infrastructure.",
        projectCount: totalProjects()[0]
    },
    {
        name: "Greater Noida",
        slug: "greater-noida",
        image: "https://res.cloudinary.com/dkgo71mgz/image/upload/v1768114079/gnoida_r9z62v.jpg",
        description: "Experience the perfect blend of heritage and modern luxury in Greater Noida.",
        projectCount: totalProjects()[1]
    },
    {
        name: "Yamuna Expressway",
        slug: "yamuna-expressway",
        image: "https://res.cloudinary.com/dkgo71mgz/image/upload/v1768114095/yamuna_rd5wqy.jpg",
        description: "The Future of Connectivity, home to stunning skylines and luxury living.",
        projectCount: totalProjects()[2]
    },
];