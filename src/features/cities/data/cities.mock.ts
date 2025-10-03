import { City } from "../types/city.types";

const cityNames = [
    "Jakarta",
    "Surabaya",
    "Bandung",
    "Medan",
    "Bekasi",
    "Depok",
    "Tangerang",
    "Semarang",
    "Palembang",
    "Makassar",
];

export const cities: City[] = cityNames.map((name, i) => {
    return {
        id: i + 1,
        name,
        image: `/assets/images/thumbnails/thumbnails-${(i % 7) + 1}.png`,
        officeCount: 1,
        slug: name.toLowerCase().replace(/\s+/g, '-'),
    };
});