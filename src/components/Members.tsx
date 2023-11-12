import { Member } from "@/lib/types";
import MemberCard from "./MemberCard";
import { client } from "@/lib/client";
import { Suspense } from "react";
import { Card, CardContent } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

async function MembersIndex(): Promise<Member[]> {
  return await client.fetch<Member[]>(`*[_type=="member"]{
  ...,
  profileImage{
       asset -> {
      metadata {
        lqip
      },
    "_ref": _id,
    }
  }
}`);
}

export default async function Members() {
  const members = await MembersIndex();
  return (
    <div className="mt-4 lg:mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <Suspense
        fallback={
          <>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <Card
                key={num}
                className=" flex justify-center items-center flex-col border-2 border-black dark:border-white hover:cursor-pointer"
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
        {members.map((member: Member) => (
          <MemberCard key={member._id} member={member} />
        ))}
      </Suspense>
    </div>
  );
}
