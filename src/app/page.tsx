import { client } from "@/lib/client";
import { mashanzheng } from "./layout";
import Members from "@/components/Members";
import { Member, RecentPhoto } from "@/lib/types";
import { AlertRecentActivity } from "@/components/AlertRecentActivity";
import { Metadata } from "next";
import CarouselImage from "@/components/CarouselImage";

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

async function getPhotos(): Promise<RecentPhoto> {
  return await client.fetch<RecentPhoto>(`
  *[_type=="recentPhoto"]{
    photo
  }
`);
}

export default async function Home() {
  const members = await getMembers();
  const recentPhotos = await getPhotos();
  return (
    <main className=" min-h-screen max-w-5xl px-4 pt-12 mx-auto">
      <div className={`flex justify-center flex-col `}>
        <AlertRecentActivity />
        <div className={mashanzheng.className}>
          <h1 className="text-center text-[14rem] lg:text-[28rem]">脆</h1>
        </div>

        <div className="mt-12 items-center ">
          <h3 className={`${mashanzheng.className} text-2xl lg:text-5xl`}>
            回忆
          </h3>
          <p className="mt-4 lg:mt-8 mx-auto text-md lg:text-md text-neutral-600 dark:text-neutral-400">
            向所有美好的旧时光致谢，感谢你们赋予了大家一个难以忘怀的曾经。
          </p>
          <div className="mt-4 lg:mt-12 max-w-xl  lg:max-w-3xl  mx-auto">
            <CarouselImage recentPhotos={recentPhotos} />
          </div>
        </div>
      </div>

      <div className="mt-28 items-center ">
        <h3 className={`${mashanzheng.className} text-2xl lg:text-5xl`}>
          历史
        </h3>
        <p className="mt-4 lg:mt-8 mx-auto text-md lg:text-md text-neutral-600 dark:text-neutral-400">
          &quot;脆&quot;文化起源于2023年7月10日，由麦索阁同志启发。初始成员约15位
          first intake 的KMNS同志组成。过后由 second intake 和 third intake
          的同志组成一个大约50位属于男人的团体。
        </p>
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

export const metadata: Metadata = {
  metadataBase: new URL("https://kmnscui.vercel.app"),
  title: "脆",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: ["kmns", "KMNS", "脆", "cui"],
  description: "脆的官方认证网页",
  openGraph: {
    title: "脆|官方网站",
    description: "脆的官方认证网页",
    images: [{ url: "/cui-og.png", type: "png" }],
    url: "https://kmnscui.vercel.app",
    type: "website",
  },
  authors: [
    {
      name: "Ezra Chai",
    },
  ],
};
