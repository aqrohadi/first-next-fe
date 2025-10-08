export type OfficeSpace = {
    id: string;
    title: string;
    slug: string;
    price: number;
    phone: string;
    duration: string;
    address: string;
    about: string;
    location: string;
    rating: number;
    tags: string[];
    image: string;
    images: string[];
    features: string[];
    salesContacts: SalesContact[];
    isFullBooked: boolean;
};

export type SalesContact = {
    name: string;
    role: string;
    photo: string;
};

export type Contact = {
    name: string;
    role: string;
    photo: string;
}