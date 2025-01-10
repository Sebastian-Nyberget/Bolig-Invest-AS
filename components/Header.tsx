import { FaHouse } from "react-icons/fa6";
import { Button } from "./ui/button";
import Link from "next/link";

const Header = () => {
  return (
    <nav className="flex justify-between my-8 mx-24">
      <div className="w-60">
        <Link href="/" className="flex space-x-2 justify-center items-center">
          <FaHouse />
          <span className="font-semibold">Bolig Invest AS</span>
        </Link>
      </div>
      <div className="w-60">
        <ul className="flex space-x-4">
          <Link href="/">Hjem</Link>
          <Link href="/om-oss">Om oss</Link>
          <Link href="/prosjekter">Prosjekter</Link>
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