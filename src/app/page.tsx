import { client } from "@/lib/client";
import { mashanzheng } from "./layout";
import Members from "@/components/Members";
import { Member } from "@/lib/types";
import { AlertRecentActivity } from "@/components/AlertRecentActivity";

async function getMembers(): Promise<Member[]> {
  return await client.fetch<Member[]>(`
  *[_type=="member"]{
    ...,
    profileImage{
       asset -> {
        metadata {
          lqip
        },
      "_ref": _id,
      }
    }
  }
`);
}

export default async function Home() {
  const members = await getMembers();
  return (
    <main className=" min-h-screen max-w-5xl px-4 pt-12 mx-auto">
      <div className={`flex justify-center flex-col `}>
        <AlertRecentActivity />
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
        <Members members={members} />
      </div>
    </main>
  );
}
// }
