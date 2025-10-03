import { OfficeSpace } from "../types/officeSpace.types";

export const officeSpaces: OfficeSpace[] = [
    {
        id: "1",
        title: "Angga Park Central Master Silicon Valley Star Class",
        slug: "kantor-pusat-gama-tower",
        price: 150000,
        duration: "month",
        address: "Jl. Jend. Sudirman No.Kav 21, RT.5/RW.3, Karet Semanggi, Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12930",
        about: "Gama Tower adalah gedung pencakar langit yang terletak di Jakarta, Indonesia. Dengan ketinggian 310 meter (1.017 kaki) dan 69 lantai, gedung ini merupakan salah satu yang tertinggi di Indonesia dan Asia Tenggara. Gama Tower berfungsi sebagai gedung perkantoran, hotel, dan fasilitas komersial lainnya. Gedung ini dirancang dengan arsitektur modern dan dilengkapi dengan berbagai fasilitas mewah, termasuk restoran, pusat kebugaran, dan ruang konferensi. Gama Tower juga dikenal karena pemandangan spektakuler yang dapat dinikmati dari puncaknya, menawarkan panorama kota Jakarta yang menakjubkan.",
        location: "Jakarta, Indonesia",
        rating: 4.8,
        tags: ["Popular"],
        image: "/assets/images/thumbnails/thumbnails-2.png",
        images: [
            "/assets/images/thumbnails/thumbnail-detail-3.png",
            "/assets/images/thumbnails/thumbnail-detail-4.png",
        ],
        features: [
            "High-speed internet",
            "Meeting rooms",
        ],
        salesContacts: [
            {
                name: "John Doe",
                role: "Sales Manager",
                photo: "/assets/images/photos/photo-1.png",
            },
            {
                name: "Jane Smith",
                role: "Sales Executive",
                photo: "/assets/images/photos/photo-2.png",
            },
        ],
        isFullBooked: false,
    },
    {
        id: "2",
        title: "Kantor Pusat Menara BCA Silicon Valley Star Class",
        slug: "kantor-pusat-menara-bca",
        price: 120000,
        duration: "month",
        address: "Jl. M.H. Thamrin No.1, RT.1/RW.5, Kebon Sirih, Menteng, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10310",
        about: "Menara BCA adalah gedung pencakar langit yang terletak di Jakarta, Indonesia. Dengan ketinggian 230 meter (755 kaki) dan 56 lantai, gedung ini merupakan salah satu yang tertinggi di Indonesia. Menara BCA berfungsi sebagai kantor pusat Bank Central Asia (BCA) dan juga menampung berbagai perusahaan dan organisasi lainnya. Gedung ini dirancang dengan arsitektur modern dan dilengkapi dengan berbagai fasilitas, termasuk ruang pertemuan, restoran, dan pusat kebugaran. Menara BCA dikenal karena desainnya yang elegan dan pemandangan kota Jakarta yang menakjubkan dari lantai atasnya.",
        location: "Jakarta, Indonesia",
        rating: 4.6,
        tags: ["Recommended"],
        image: "/assets/images/thumbnails/thumbnails-1.png",
        images: [
            "/assets/images/thumbnails/thumbnail-detail-1.png",
            "/assets/images/thumbnails/thumbnail-detail-2.png",
        ],
        features: [
            "Cafeteria",
            "Air conditioning",
        ],
        salesContacts: [
            {
                name: "Alice Johnson",
                role: "Sales Manager",
                photo: "/assets/images/photos/photo-1.png",
            },
            {
                name: "Bob Brown",
                role: "Sales Executive",
                photo: "/assets/images/photos/photo-2.png",
            },
        ],
        isFullBooked: false,
    },
];
    