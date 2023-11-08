import { Member } from "../lib/types";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { urlFor } from "@/lib/client";
import Image from "next/image";

export default function MemberCard({ member }: { member: Member }) {
  console.log(member.profileImage);
  return (
    <Card className="border-2 border-black dark:border-white">
      <div className="p-4">
        <Image
          className="border-2 border-black dark:border-white rounded-lg"
          width={200}
          height={200}
          src={urlFor(member.profileImage).width(200).height(200).url()}
          alt={`Profile Image for ${member.englishName}`}
        />
      </div>

      <CardContent>
        <CardTitle>{member.chineseName}</CardTitle>
        <CardDescription>{member.englishName}</CardDescription>
        <div className="grid w-full items-center gap-4"></div>
        <div className="flex gap-1 mt-4">
          {member.tags.map((tag) => (
            <div
              key={tag._key}
              className="border-black border-2 dark:border-white text-xs font-extrabold px-2 py-1 rounded-lg"
            >
              {tag.tag}
            </div>
          ))}
        </div>
        <div className="flex flex-col space-y-1.5 mt-4">
          <a
            className="hover:underline font-bold"
            referrerPolicy="no-referrer"
            href={`https://www.instagram.com/@${member.instagramAccount}`}
          >
            @{member.instagramAccount}
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
