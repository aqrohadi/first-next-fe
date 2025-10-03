import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return ( 
        <nav className="bg-white">
            <div className="flex items-center justify-between w-full max-w-[1130px] py-[22px] mx-auto">
                <Link href="/">
                <Image width={165} height={36} src="/assets/images/logos/logo.svg" alt="logo" />
                </Link>
                <ul className="flex items-center gap-[50px] w-fit">
                <li>
                    <Link href="">Browse</Link>
                </li>
                <li>
                    <Link href="">Popular</Link>
                </li>
                <li>
                    <Link href="">Categories</Link>
                </li>
                <li>
                    <Link href="">Events</Link>
                </li>
                <li>
                    <Link href="view-booking-details.html">My Booking</Link>
                </li>
                </ul>
                <Link
                href="#"
                className="flex items-center gap-[10px] rounded-full border border-[#000929] py-3 px-5"
                >
                <Image
                    src="/assets/images/icons/call.svg"
                    className="w-6 h-6"
                    width={24}
                    height={24}
                    alt="icon"
                />
                <span className="font-semibold">Contact Us</span>
                </Link>
            </div>
        </nav>
  );
};

export default Navbar;