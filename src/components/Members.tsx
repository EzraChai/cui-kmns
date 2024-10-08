"use client";

import { Batch, Member } from "@/lib/types";
import MemberCard from "./MemberCard";
import { Suspense, useEffect, useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Skeleton } from "./ui/skeleton";
import { Input } from "./ui/input";
import { useDebounce } from "@/lib/hooks";
import { CloudCog } from "lucide-react";

export default function Members({ batches }: { batches: Batch[] }) {
  const [newMembers, setNewMembers] = useState<Batch[]>(batches);
  const [search, setSearch] = useState("");
  const [isLaptop, setIsLaptop] = useState(false);
  const debouncedSearch = useDebounce(search);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setIsLaptop(
      /Windows NT|Macintosh|Linux x86_64/i.test(navigator?.userAgent),
    );
  }, [isLaptop]);

  useEffect(() => {
    let count = 0;
    batches.forEach((batch) => {
      count += batch.members.length;
    });
    setCount(count);
  }, [batches]);

  useEffect(() => {
    if ("" === debouncedSearch) {
      setNewMembers(batches);
    }
    if ("" !== debouncedSearch) {
      const newBatches: Batch[] = [];
      batches.forEach((batch) => {
        newBatches.push({
          members: batch.members.filter(
            (member) =>
              member.englishName
                .toLowerCase()
                .includes(debouncedSearch.toLowerCase()) ||
              member.chineseName.includes(debouncedSearch),
          ),
          year: batch.year,
        });
      });
      setNewMembers(newBatches);
    }
  }, [debouncedSearch, batches]);

  return (
    <>
      <div className="flex justify-between items-baseline">
        <Input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          className=" mt-4 first-letter:lg:mt-8 focus-visible:border-black transition dark:focus-visible:border-white rounded-none focus-within:ring-0 mb-2 md:max-w-[14rem] border-b-2"
          type="text"
          placeholder="寻找帅哥成员"
        />
        <div className="hidden md:block text-xs text-foreground">
          <p>
            共{count}
            注册成员
          </p>
        </div>
      </div>
      {newMembers.map((batch, index) => (
        <div key={index}>
          <div className="mt-12 mb-6 relative w-full flex justify-center">
            <p className=" w-max text-5xl text-center font-black px-12 bg-white dark:bg-black">
              {batch.year}
            </p>
            <div className="absolute top-6 -z-10 border w-full h-[2px] border-black  dark:border-white " />
          </div>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <Suspense
              fallback={
                <>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <Card
                      key={num}
                      className="flex justify-center items-center flex-col border-2 border-black dark:border-white hover:cursor-pointer"
                    >
                      <div className="p-4">
                        <Skeleton className="w-[100px] h-[100px] lg:w-[200px] lg:h-[200px]"></Skeleton>
                      </div>

                      <CardContent>
                        <Skeleton className="w-[60px] lg:w-[180px] h-[20px]"></Skeleton>
                        <Skeleton className="mt-4 w-[60px] lg:w-[180px] h-[20px]"></Skeleton>
                      </CardContent>
                    </Card>
                  ))}
                </>
              }
            >
              {batch.members.map((member: Member) => (
                <MemberCard
                  isLaptop={isLaptop}
                  key={member._id}
                  member={member}
                />
              ))}
              {newMembers.length === 0 && (
                <div className="text-center col-span-4 pt-12 pb-4">
                  找不到此帅哥成员😭
                </div>
              )}
            </Suspense>
          </div>
        </div>
      ))}

      <div className="mt-6 pr-1 flex w-full justify-end md:hidden text-xs text-foreground">
        <p>共{batches.length}注册成员</p>
      </div>
    </>
  );
}
