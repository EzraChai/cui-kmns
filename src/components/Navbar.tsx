import { mashanzheng } from "@/app/layout";
import { ModeToggle } from "@/components/darkmode-button";
import { Separator } from "@/components/ui/separator";
import CuiLogo from "../../public/cui-logo.png";
import Image from "next/image";

export function Navbar() {
  return (
    <nav className="fixed z-10 w-screen bg-white dark:bg-inherit">
      <div className="max-w-5xl py-2 mx-auto px-4 md:px-6 lg:px-0">
        <ul className="flex justify-between items-center">
          <li className={mashanzheng.className}>
            <Image
              className="w-12 h-12 lg:w-14 lg:h-14 dark:invert-0 invert"
              src={CuiLogo}
              priority={true}
              alt="Cui's Logo"
            />
          </li>
          <li>
            <ModeToggle />
          </li>
        </ul>
      </div>
      <Separator />
    </nav>
  );
}
