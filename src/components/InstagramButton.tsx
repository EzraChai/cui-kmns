"use client";
import { atom, useAtom } from "jotai";

const isLaptopAtom = atom(
  /Windows NT|Macintosh|Linux x86_64/i.test(navigator.userAgent)
);

export default function InstagramButton({
  instagramAccount,
}: {
  instagramAccount: string;
}) {
  const [isLaptop] = useAtom<boolean>(isLaptopAtom);
  return (
    <a
      referrerPolicy="no-referrer"
      target="_blank"
      href={
        !isLaptop
          ? `instagram://user?username=${instagramAccount}`
          : `https://www.instagram.com/_u/${instagramAccount}`
      }
    >
      @{instagramAccount}
    </a>
  );
}
