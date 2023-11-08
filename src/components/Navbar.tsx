import { mashanzheng } from "@/app/layout";
import { ModeToggle } from "@/components/darkmode-button";
import { Separator } from "@/components/ui/separator";

export function Navbar() {
  return (
    <nav className="fixed w-full bg-white dark:bg-inherit">
      <div className="max-w-7xl py-2 mx-auto px-4 md:px-6 lg:px-0">
        <ul className="flex justify-between items-center">
          <li className={mashanzheng.className}>
            <h1 className="text-[2rem] lg:text-[2.50rem]">脆</h1>
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
