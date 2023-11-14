"use client";

import { Member } from "@/lib/types";
import MemberCard from "./MemberCard";
import { Suspense, useEffect, useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Skeleton } from "./ui/skeleton";
import { Input } from "./ui/input";
import { useDebounce } from "@/lib/hooks";

export default function Members({ members }: { members: Member[] }) {
  const [newMembers, setNewMembers] = useState<Member[]>(members);
  const [search, setSearch] = useState("");
  const [isLaptop, setIsLaptop] = useState(false);
  const debouncedSearch = useDebounce(search);

  useEffect(() => {
    setIsLaptop(
      /Windows NT|Macintosh|Linux x86_64/i.test(navigator?.userAgent)
    );
  }, [isLaptop]);

  useEffect(() => {
    if ("" === debouncedSearch && members) {
      setNewMembers(members);
    }
    if ("" !== debouncedSearch && members) {
      let newMembers2 = members.filter(
        (member) =>
          member.englishName
            .toLowerCase()
            .includes(debouncedSearch.toLowerCase()) ||
          member.chineseName.includes(debouncedSearch)
      );
      setNewMembers(newMembers2);
    }
  }, [debouncedSearch, members]);

  return (
    <>
      <Input
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        className=" mt-4 first-letter:lg:mt-8 focus-visible:border-white rounded-none focus-within:ring-0 mb-2 md:max-w-[14rem] border-b-2"
        type="text"
        placeholder="寻找帅哥成员"
      />
      <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <Suspense
          fallback={
            <>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
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
          {newMembers.map((member: Member) => (
            <MemberCard isLaptop={isLaptop} key={member._id} member={member} />
          ))}
          {newMembers.length === 0 && (
            <div className="text-center col-span-4 pt-12 pb-4">
              找不到此帅哥成员😭
            </div>
          )}
        </Suspense>
      </div>
    </>
  );
}
