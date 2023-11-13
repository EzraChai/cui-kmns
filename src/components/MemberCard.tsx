import {
  Dialog,
  DialogContent,
  DialogDescription,
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
import { ScrollArea } from "./ui/scroll-area";
import InstagramButton from "./InstagramButton";

function shortenName(name: string) {
  let nameArray = name.trim().split(" ");
  if (nameArray.length >= 4) {
    return `${nameArray[0] + " " + nameArray[1]}`;
  }
  return name;
}

export default function MemberCard({
  member,
  isLaptop,
}: {
  member: Member;
  isLaptop: boolean;
}) {
  if (member.profileImage.asset.metadata?.lqip) {
    return (
      <Dialog>
        <DialogTrigger>
          <Card className="hover:bg-neutral-100 hover:dark:bg-neutral-800 transition flex justify-center items-center flex-col border-2 border-black dark:border-white hover:cursor-pointer">
            <div className="p-4">
              <Image
                className="border-2 border-black dark:border-white rounded-lg"
                width={200}
                height={200}
                src={urlFor(member.profileImage.asset)
                  .width(200)
                  .height(200)
                  .url()}
                placeholder="blur"
                blurDataURL={member.profileImage.asset.metadata.lqip}
                alt={`Profile Image for ${member.englishName}`}
              />
            </div>

            <CardContent>
              <CardTitle>{member.chineseName}</CardTitle>
              <CardDescription className="capitalize text-[0.75rem] md:text-sm">
                {shortenName(member.englishName)}
              </CardDescription>
            </CardContent>
          </Card>
        </DialogTrigger>

        <DialogContent className="py-0 px-2 w-[85%] md:w-full rounded-lg">
          <ScrollArea className="max-h-[580px] px-2 md:h-full w-full">
            <DialogDescription
              asChild
              className="my-4 text-center md:text-left"
            >
              <div className="grid grid-cols-1 md:gap-6 md:grid-cols-2">
                <div className="flex justify-center items-center">
                  <div className="relative w-[200px] h-[200px] md:w-[300px] md:h-[300px]">
                    <Image
                      className="mt-2 md:mt-0 border-2 border-black dark:border-white rounded-lg"
                      fill
                      src={urlFor(member.profileImage)
                        .width(300)
                        .height(300)
                        .auto("format")
                        .url()}
                      placeholder="blur"
                      blurDataURL={member.profileImage.asset.metadata.lqip}
                      alt={`Profile Image for ${member.englishName}`}
                    />
                  </div>
                </div>
                <div className=" mt-6 md:mt-2 relative">
                  <Label htmlFor="chineseName">名字</Label>
                  <div
                    className="text-black capitalize dark:text-white mb-2 text-xl font-semibold"
                    id="chineseName"
                  >
                    {member.chineseName} {member.englishName}
                  </div>

                  <Label htmlFor="from">来自</Label>
                  <div
                    className="text-black mb-2 dark:text-white text-lg font-semibold"
                    id="from"
                  >
                    {member.hometown}
                  </div>

                  <Label htmlFor="from">特色</Label>
                  <div className="flex justify-center md:justify-start mt-1 gap-1 dark:text-white text-black mb-4">
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
                  <div className="mb-16 dark:text-white text-black">
                    {member.description}
                  </div>

                  <div className="absolute bottom-0 flex items-center">
                    <Instagram />
                    <Button variant={"link"}>
                      <InstagramButton
                        isLaptop={isLaptop}
                        instagramAccount={member.instagramAccount}
                      />
                    </Button>
                  </div>
                </div>
              </div>
            </DialogDescription>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    );
  }
}
