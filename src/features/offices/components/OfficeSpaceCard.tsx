import Image from "next/image";
import Link from "next/link";
import { OfficeSpace } from "../types/officeSpace.types";

interface OfficeSpaceCardProps {
    space: OfficeSpace;
}

export const OfficeSpaceCard = ({ space }: OfficeSpaceCardProps) => {
    return (
        <Link href={`/office/${space.slug}`} className="card">
          <div className="flex flex-col rounded-[20px] border border-[#E0DEF7] bg-white overflow-hidden">
            <div className="thumbnail-container relative w-full h-[200px]">
            {space.tags.map((tag) => (
              <p key={tag} 
              className="absolute top-5 right-5 w-fit rounded-full p-[6px_16px] bg-[#0D903A] font-bold text-sm leading-[21px] text-[#F7F7FD]">
                {tag}
              </p>
            ))}
              <Image
                src={space.image}
                className="w-full h-full object-cover"
                width={450}
                height={300}
                alt="thumbnails"
              />
            </div>
            <div className="card-detail-container flex flex-col p-5 pb-[30px] gap-4">
              <h3 className="line-clamp-2 font-bold text-[22px] leading-[36px] h-[72px]">
                {space.title}
              </h3>
              <div className="flex items-center justify-between">
                <p className="font-semibold text-xl leading-[30px]">
                  Rp {space.price.toLocaleString('id')}/month
                </p>
                <div className="flex items-center justify-end gap-[6px]">
                  <p className="font-semibold">20 days</p>
                  <Image
                    src="/assets/images/icons/clock.svg"
                    className="w-6 h-6"
                    width={24}
                    height={24}
                    alt="icon"
                  />
                </div>
              </div>
              <hr className="border-[#F6F5FD]" />
              <div className="flex items-center justify-between">
                <div className="flex items-center justify-end gap-[6px]">
                  <Image
                    src="/assets/images/icons/location.svg"
                    className="w-6 h-6"
                    width={24}
                    height={24}
                    alt="icon"
                  />
                  <p className="font-semibold">{space.location}</p>
                </div>
                <div className="flex items-center justify-end gap-[6px]">
                  <p className="font-semibold">{space.rating}</p>
                  <Image
                    src="/assets/images/icons/Star 1.svg"
                    className="w-6 h-6"
                    width={24}
                    height={24}
                    alt="icon"
                  />
                </div>
              </div>
              <hr className="border-[#F6F5FD]" />
              <div className="flex items-center justify-between">
                <div className="flex items-center justify-end gap-[6px]">
                  <Image
                    src="/assets/images/icons/wifi.svg"
                    className="w-6 h-6"
                    width={24}
                    height={24}
                    alt="icon"
                  />
                  <p className="font-semibold">{space.features[0]}</p>
                </div>
                <div className="flex items-center justify-end gap-[6px]">
                  <Image
                    src="/assets/images/icons/security-user.svg"
                    className="w-6 h-6"
                    width={24}
                    height={24}
                    alt="icon"
                  />
                  <p className="font-semibold">{space.features[1]}</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
    );
}