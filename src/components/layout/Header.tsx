import Image from "next/image";
import Link from "next/link";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="grid grid-cols-[1fr_auto_auto] md:grid-cols-[auto_1fr_auto] gap-4 md:gap-8 items-center p-8">
      <Link href="/" className="">
        <span>Jon Doe</span>
        {/* <Image src="" alt="" /> */}
      </Link>
      <Nav/>
      <Link href="#booking" className="bg-brand text-deep font-semibold px-4 py-2 md:px-6 md:py-3 rounded-full">Book Now</Link>
    </header>
  );
};

export default Header;
