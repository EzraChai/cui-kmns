import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Instagram } from "lucide-react";

import { Member } from "../lib/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { urlFor } from "@/lib/client";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function MemberCard({ member }: { member: Member }) {
  return (
    <Dialog>
      <DialogTrigger>
        <Card className=" flex justify-center items-center flex-col border-2 border-black dark:border-white hover:cursor-pointer">
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
            <div className="flex justify-center lg:flex-wrap flex-wrap gap-1 mt-4">
              {member.tags.map((tag) => (
                <div
                  key={tag._key}
                  className="border-black border-2 dark:border-white text-xs font-extrabold px-2 py-1 rounded-lg"
                >
                  {tag.tag}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="w-[94%] lg:w-full">
        <DialogHeader>
          <DialogDescription>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="flex lg:block justify-center items-center">
                <Image
                  className="border-2 border-black dark:border-white rounded-lg"
                  width={200}
                  height={200}
                  src={urlFor(member.profileImage)
                    .width(200)
                    .height(200)
                    .auto("format")
                    .url()}
                  alt={`Profile Image for ${member.englishName}`}
                />
              </div>
              <div className=" mt-12 lg:mt-0 relative">
                <Label htmlFor="chineseName">中文名</Label>
                <p
                  className="text-black dark:text-white mb-2 text-xl font-semibold"
                  id="chineseName"
                >
                  {member.chineseName}
                </p>
                <Label htmlFor="englishName">英文名</Label>
                <p
                  className="text-black dark:text-white mb-2 text-lg font-semibold"
                  id="englishName"
                >
                  {member.englishName}
                </p>
                <Label htmlFor="from">我来自</Label>
                <p
                  className="text-black mb-2 dark:text-white text-lg font-semibold"
                  id="from"
                >
                  {member.hometown}
                </p>

                <Label htmlFor="from">自我介绍</Label>
                <p className="mb-16 dark:text-white text-black">
                  {member.description}
                </p>

                <div className="absolute bottom-0 flex items-center">
                  <Instagram />
                  <Button variant={"link"}>
                    <a
                      href={`https://www.instagram.com/${member.instagramAccount}`}
                    >
                      @{member.instagramAccount}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
