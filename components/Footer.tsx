import Link from "next/link";
import { Separator } from "./ui/separator";

const Footer = () => {
  return (
    <footer className="w-full px-36 py-16">
      <div className="flex justify-between">
        <div>
          <h1 className="font-bold text-4xl">Bolig Invest AS</h1>
          <p className="pt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut <br /> enim ad minim veniam, quis nostrud exercitation ullamco laboris <br /> nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className="flex space-x-16">
          <ul className="flex flex-col">
            <li>Ressurser</li>
            <Link href="/">Blog</Link>
            <Link href="/">Newsletter</Link>
            <Link href="/">Prosjekter</Link>
            <Link href="/">Help centre</Link>
            <Link href="/">Tutorials</Link>
            <Link href="/">Support</Link>
          </ul>
          <ul className="flex flex-col">
            <li>Ressurser</li>
            <Link href="/">Blog</Link>
            <Link href="/">Newsletter</Link>
            <Link href="/">Prosjekter</Link>
            <Link href="/">Help centre</Link>
            <Link href="/">Tutorials</Link>
            <Link href="/">Support</Link>
          </ul>
        </div>
      </div>

      <div className="py-10">
        <Separator />
      </div>

      <div></div>
    </footer>

  );
}
 
export default Footer;