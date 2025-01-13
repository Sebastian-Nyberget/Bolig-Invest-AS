"use client";

import { FaHouse } from "react-icons/fa6";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  const navItems = [
    { name: "Hjem", path: "/" },
    { name: "Om oss", path: "/om-oss" },
    { name: "Prosjekter", path: "/prosjekter" },
  ];

  return (
    <nav className="flex justify-between my-8 mx-24">
      <div className="w-60">
        <Link href="/" className="flex space-x-2 justify-center items-center">
          <FaHouse />
          <span className="font-bold">Bolig Invest AS</span>
        </Link>
      </div>
      <div className="w-60">
        <ul className="flex space-x-4">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={`${
                  pathname === item.path
                    ? "font-bold"
                    : "hover:text-gray-400 hover:underline"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-60">
        <div className="flex justify-end">
          <Button asChild>
            <Link href="/kontakt">Kontakt oss</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
 
export default Header;