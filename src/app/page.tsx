import { client } from "@/lib/client";
import { Member } from "@/lib/types";
import MemberCard from "@/components/MemberCard";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { mashanzheng } from "./layout";
import { Suspense } from "react";

async function MembersIndex() {
  return await client.fetch<Member[]>(`*[_type=="member"]{
  ...,
}`);
}

// "blurHash":profileImage.asset -> metadata.blurHash

export default async function Home() {
  const members: Member[] = await MembersIndex();

  if (!!members) {
    return (
      <main className=" min-h-screen max-w-5xl px-4 pt-12 mx-auto">
        <div className={`flex justify-center flex-col `}>
          <div className={mashanzheng.className}>
            <h1 className="text-center text-[14rem] lg:text-[28rem]">脆</h1>
          </div>
          <div className="col-span-2 items-center ">
            <h3 className={`${mashanzheng.className} text-2xl lg:text-5xl`}>
              历史
            </h3>
            <p className="mt-4 lg:mt-8 mx-auto text-md lg:text-md text-neutral-600 dark:text-neutral-400">
              &quot;脆&quot;文化起源于2023年7月10日，由麦索阁同志启发。初始成员约15位
              first intake 的KMNS同志组成。过后由 second intake 和 third intake
              的同志组成一个大约50位属于男人的团体。
            </p>
          </div>
        </div>

        <div className="mt-28 mb-14">
          <h3 className={`${mashanzheng.className} text-2xl lg:text-5xl`}>
            成员介绍
          </h3>
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
        </div>
      </main>
    );
  }
}
