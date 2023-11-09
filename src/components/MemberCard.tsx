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
              src={urlFor(member.profileImage)
                .width(200)
                .height(200)
                .quality(40)
                .url()}
              alt={`Profile Image for ${member.englishName}`}
            />
          </div>

          <CardContent>
            <CardTitle>{member.chineseName}</CardTitle>
            <CardDescription className="capitalize">
              {member.englishName}
            </CardDescription>
            <div className="flex justify-center lg:flex-wrap flex-wrap flex-grow-0 gap-1 mt-4">
              {member.tags.slice(0, 2).map((tag) => (
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
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              <div className="flex lg:block justify-center items-center">
                <Image
                  className="border-2 border-black dark:border-white rounded-lg"
                  width={300}
                  height={300}
                  src={urlFor(member.profileImage)
                    .width(300)
                    .height(300)
                    .auto("format")
                    .url()}
                  alt={`Profile Image for ${member.englishName}`}
                />
              </div>
              <div className=" mt-12 lg:mt-0 relative">
                <Label htmlFor="chineseName">名字</Label>
                <div
                  className="text-black capitalize dark:text-white mb-2 text-xl font-semibold"
                  id="chineseName"
                >
                  {member.chineseName} {member.englishName}
                </div>

                <Label htmlFor="from">来自</Label>
                <p
                  className="text-black mb-2 dark:text-white text-lg font-semibold"
                  id="from"
                >
                  {member.hometown}
                </p>

                <Label htmlFor="from">我是</Label>
                <div className="flex justify-center lg:justify-start mt-1 gap-1 dark:text-white text-black mb-4">
                  {member.tags.map((tag) => (
                    <div
                      key={tag._key}
                      className="border-black border-2 dark:border-white text-xs font-extrabold px-2 py-1 rounded-lg"
                    >
                      {tag.tag}
                    </div>
                  ))}
                </div>

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
