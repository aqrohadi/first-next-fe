import Navbar from "@/components/Navbar";
import { cities } from "@/features/cities/data/cities.mock";
import { notFound } from "next/navigation";
import { OfficeSpaceCard } from "@/features/offices/components/OfficeSpaceCard";
import { officeSpace } from "@/features/offices/data/officeSpace.mock";
import Image from "next/image";
import { Metadata } from "next";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    
    const { slug } = await params;

    const city = cities.find((items) => items.slug === slug);

    if (!city) {
        return {
            title: "City not found",
            description: "The requested city could not be found.",
        }
    }

    const fullImageUrl = city.image.startsWith('http')
        ? city.image
        : `https://imamaqrom.com${city.image}`;

    return {
        title: {
            absolute: `${city.name} - Office`,
        },
        description: `Cari Kantor Terbaik Di ${city.name}.`,
        openGraph: {
            title: `${city.name} - Office Space`,
            description: `Temukan Ruang Kantor Di Kota ${city.name}.`,
            images: [fullImageUrl],
        },
        twitter: {
            card: 'summary_large_image',
            title: `${city.name} - Office Space`,
            description: `Temukan Ruang Kantor Di Kota ${city.name}.`,
            images: [fullImageUrl],
        },
        alternates: {
            canonical: `https://imamaqrom.com/city/${city.slug}`,
        },
    };
}

export default async function CityPage({ params }: Props) {
    const { slug } = await params;

    const city = cities.find((c) => c.slug === slug);

    if (!city) return notFound();

    const cityOffices = officeSpace.filter(
        (space) => space.location === city.name
    );

    return (
        <>
            <Navbar />
            <header className="flex flex-col w-full">
                <section id="Hero-Banner" className="relative flex h-[434px]">
                <div
                    id="Hero-Text"
                    className="relative flex flex-col w-full max-w-[650px] h-fit rounded-[30px] border border-[#E0DEF7] p-10 gap-[30px] bg-white mt-[70px] ml-[calc((100%-1130px)/2)] z-10"
                >
                    <h1 className="font-extrabold text-[50px] leading-[60px]">
                    Great Office in <br />{" "}
                    <span className="text-[#0D903A]">({city.name}) City</span>
                    </h1>
                    <p className="text-lg leading-8 text-[#000929]">
                    Kantor yang tepat dapat memberikan impact pekerjaan menjadi lebih baik
                    dan sehat dalam tumbuhkan karir.
                    </p>
                </div>
                <div
                    id="Hero-Image"
                    className="absolute right-0 w-[calc(100%-((100%-1130px)/2)-305px)] h-[434px] rounded-bl-[40px] overflow-hidden"
                >
                    <Image
                    src="/assets/images/thumbnails/thumbnail-details-4.png"
                    className="w-full h-full object-cover"
                    width={500}
                    height={500}
                    alt="hero background"
                    />
                </div>
                </section>
            </header>
            <section
                id="Fresh-Space"
                className="flex flex-col gap-[30px] w-full max-w-[1130px] mx-auto mt-[70px] mb-[120px]"
            >
                <h2 className="font-bold text-[32px] leading-[48px] whitespace-nowrap">
                    Browse Offices
                </h2>
                {cityOffices.length > 0 ? (
                    <div className="grid grid-cols-3 gap-[30px]">
                        {cityOffices.map((space) => (
                            <OfficeSpaceCard key={space.id} space={space} />
                        ))}
                    </div>
                ) : (
                    <p className="text-lg leading-8 text-[#000929]">
                        No office spaces available in this city.
                    </p>
                )}
            </section>
        </>
    );
}
