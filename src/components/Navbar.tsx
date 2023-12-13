import { mashanzheng } from "@/app/layout";
import { ModeToggle } from "@/components/darkmode-button";
import { Separator } from "@/components/ui/separator";
import CuiLogo from "../../public/cui-logo.png";
import Image from "next/image";

export function Navbar() {
  return (
    <nav className="fixed z-10 w-full bg-white dark:bg-inherit">
      <div className="max-w-5xl py-2 mx-auto px-4 md:px-6 lg:px-0">
        <ul className="flex justify-between items-center">
          <li className={mashanzheng.className}>
            <Image
              className="w-14 h-14 lg:w-16 lg:h-16 dark:invert-0 invert"
              src={CuiLogo}
              rel="preload"
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
