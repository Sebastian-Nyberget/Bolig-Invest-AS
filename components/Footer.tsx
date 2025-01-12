import Link from "next/link";
import { Separator } from "./ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full">
      <div className="px-36">
        <div className="py-10">
          <Separator />
        </div>
        <div className="flex justify-between">
          <div>
            <h1 className="font-bold text-4xl">Bolig Invest AS</h1>
            <p className="pt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut <br /> enim ad minim veniam, quis nostrud exercitation ullamco laboris <br /> nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className="flex space-x-20 pr-10">
            <ul className="flex flex-col">
              <li className="text-gray-400 font-medium pb-2">Ressurser</li>
              <Link href="/" className="hover:underline">Blog</Link>
              <Link href="/" className="hover:underline">Newsletter</Link>
              <Link href="/" className="hover:underline">Prosjekter</Link>
              <Link href="/" className="hover:underline">Support</Link>
            </ul>
            <ul className="flex flex-col">
              <li className="text-gray-400 font-medium pb-2">Legal</li>
              <Link href="/" className="hover:underline">Terms</Link>
              <Link href="/" className="hover:underline">Privacy</Link>
              <Link href="/" className="hover:underline">Cookies</Link>
              <Link href="/" className="hover:underline">Licenses</Link>
              <Link href="/" className="hover:underline">Kontakt</Link>
            </ul>
          </div>
        </div>
      </div>

      <div className="px-16">
        <div className="pt-12 pb-4">
          <Separator />
        </div>
  
        <div className="w-full h-auto flex justify-center pb-4">
          <p>© {currentYear} <Link href="/" className="hover:underline">Bolig Invest AS</Link>. All rights reserved.</p>
        </div>
      </div>
      
    </footer>

  );
}
 
export default Footer;