import Image from "next/image";
import { client } from "@/lib/client";
import { Member } from "@/lib/types";
import MemberCard from "@/components/MemberCard";

export async function MembersIndex() {
  return await client.fetch<Member[]>(`*[_type == "member"]`);
}

export default async function Home() {
  const members: Member[] = await MembersIndex();

  if (!!members) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <ul className="mt-20">
          {members.map((member: Member) => (
            <MemberCard key={member._id} member={member} />
          ))}
        </ul>
      </main>
    );
  }
}
