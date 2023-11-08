import Image from "next/image";
import { client } from "@/lib/client";
import { Member } from "@/lib/types";
import MemberCard from "@/components/MemberCard";
import { mashanzheng } from "./layout";

export async function MembersIndex() {
  return await client.fetch<Member[]>(`*[_type == "member"]`);
}

export default async function Home() {
  const members: Member[] = await MembersIndex();

  if (!!members) {
    return (
      <main className=" min-h-screen max-w-7xl px-4 pt-12 mx-auto">
        <div
          className={`${mashanzheng.className} flex justify-center flex-col `}
        >
          <div className="">
            <h1 className="text-center text-[14rem] lg:text-[28rem]">脆</h1>
          </div>
          <div className="col-span-2 flex  items-center ">
            <p className=" lg:w-4/5 mx-auto text-lg lg:text-xl text-neutral-700 dark:text-neutral-300">
              &quot;脆&quot;文化起源于2023年7月10日,由麦索阁同志启发。初始成员约15位
              first intake 的KMNS同志组成。过后由second intake 和 third intake
              的同志组成一个大约50位属于男人的团体。
            </p>
          </div>
        </div>

        <div className="mt-28 mb-14">
          <h3 className={`${mashanzheng.className} text-2xl lg:text-5xl`}>
            成员介绍
          </h3>
          <div className="mt-4 lg:mt-12 grid grid-cols-2 lg:grid-cols-5 gap-4">
            {members.map((member: Member) => (
              <MemberCard key={member._id} member={member} />
            ))}
          </div>
        </div>
      </main>
    );
  }
}
