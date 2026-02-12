import { properties } from "./projectDetails";

export const totalProjects = () => {
    return [properties.filter((property) => property.city === "noida").length,properties.filter((property) => property.city === "greater-noida").length,properties.filter((property) => property.city === "yamuna-expressway").length]
}