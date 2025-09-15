"use client";
import Link from "next/link";
import Image from "next/image";
import { Calendar } from "lucide-react";
import { Logo, Logo1 } from "@/asset/logo";

const Header = () => {
  return (
    <header className="w-full shadow-sm">
      <div className="px-6 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Image src={Logo} width={150} height={54} alt="Navhim Healthcare" />
          {/* <Image src="/src/asset/logo" alt="Navhim Healthcare" width={200} height={100} /> */}
        </div>
        <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-800 gap-5">
          <Link className="text-base" href="/">
            Home
          </Link>
          <Link className="text-base" href="/about">
            About
          </Link>
          <Link className="text-base" href="/service">
            Services
          </Link>
          <Link className="text-base" href="/department">
            Department
          </Link>
          <Link className="text-base" href="/franchise">
            Franchise
          </Link>
          <Link className="text-base" href="/support">
            Support
          </Link>
        </nav>
        <Link
          href="/schedule"
          className="flex bg-blue-900 items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
        >
          Book an Appointment <Calendar size={16} />
        </Link>
      </div>
      
    </header>
  );
};

export default Header;
