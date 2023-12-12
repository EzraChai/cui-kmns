import { Button } from "./ui/button";

export default function Footer() {
  return (
    <div className="mt-24 mb-4 flex justify-center gap-4 text-neutral-600 dark:text-neutral-400 max-w-7xl px-4 font-sm text-xs mx-auto text-center">
      <div className="">©2023 脆</div>
      <a
        target="_blank"
        className="hover:text-white transition"
        referrerPolicy="no-referrer"
        href="https://www.instagram.com/cui_brittle2324/"
      >
        Instagram
      </a>
    </div>
  );
}
