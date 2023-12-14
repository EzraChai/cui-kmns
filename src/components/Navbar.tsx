"use client";

import { mashanzheng } from "@/app/layout";
import { ModeToggle } from "@/components/darkmode-button";
import { Separator } from "@/components/ui/separator";
import CuiLogo from "../../public/cui-logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathName = usePathname();
  return (
    <nav className="fixed z-10 w-screen bg-white dark:bg-inherit">
      <div className="max-w-5xl py-2 mx-auto px-4 md:px-6 lg:px-0">
        <ul className="flex justify-between items-center">
          <li className={mashanzheng.className}>
            <Link href={"/"}>
              <Image
                className="w-12 h-12 lg:w-14 lg:h-14 dark:invert-0 invert"
                src={CuiLogo}
                priority={true}
                alt="Cui's Logo"
              />
            </Link>
          </li>
          <li className="flex justify-between gap-4 items-center">
            <Link
              className={`text-xs dark:hover:text-white transition hover:text-neutral-900 lg:text-md text-neutral-500 dark:text-neutral-400 ${
                pathName === "/" && " text-neutral-900 dark:text-white"
              }`}
              href="/"
            >
              首页
            </Link>
            <Link
              className={` text-xs dark:hover:text-white transition hover:text-neutral-900 lg:text-md text-neutral-500 dark:text-neutral-400 ${
                pathName === "/activities" && "text-neutral-900 dark:text-white"
              }`}
              href="/activities"
            >
              活动
            </Link>

            <ModeToggle />
          </li>
        </ul>
      </div>
      <Separator />
    </nav>
  );
}
