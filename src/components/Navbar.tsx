import { mashanzheng } from "@/app/layout";
import { ModeToggle } from "@/components/darkmode-button";

export function Navbar() {
  return (
    <nav className="fixed w-full py-2 border-b-2">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-0">
        <ul className="flex justify-between items-center">
          <li className={mashanzheng.className}>
            <h1 className="text-[2rem] lg:text-[2.50rem]">脆</h1>
          </li>
          <li>
            <ModeToggle />
          </li>
        </ul>
      </div>
    </nav>
  );
}
