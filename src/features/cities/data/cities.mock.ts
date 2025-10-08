import { officeSpace } from "@/features/offices/data/officeSpace.mock";
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
    const officeCount = officeSpace.filter((space) => space.location === name).length;
    return {
        id: i + 1,
        name,
        image: `/assets/images/thumbnails/thumbnails-${(i % 7) + 1}.png`,
        officeCount: officeCount,
        slug: name.toLowerCase().replace(/ /g, '-'),
    };
});