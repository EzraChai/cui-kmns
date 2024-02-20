import { client } from "@/lib/client";
import { RecentActivity } from "@/lib/types";
import { Metadata } from "next";
import Link from "next/link";
import { mashanzheng } from "../layout";

async function getRecentActivities(): Promise<RecentActivity[]> {
  return await client.fetch<RecentActivity[]>(`
    *[_type=="recentActivity"]| order(_createdAt desc){
        title,
        description,
        _id,
        instagramPostID
    }
`);
}

export default async function ActivityPage() {
  const recentActivities = await getRecentActivities();
  return (
    <div className="pt-12 max-w-5xl mx-auto">
      <div className="mt-16 px-6 md:px-0 min-h-max">
        <h3 className={`${mashanzheng.className} text-2xl lg:text-5xl mb-6`}>
          活动
        </h3>
        {recentActivities.map((recentActivity: RecentActivity) => (
          <div
            key={recentActivity._id}
            className="border-b border-black dark:border-white"
          >
            <Link
              className="lg:hidden "
              referrerPolicy="no-referrer"
              target="_blank"
              href={`instagram://media?id=${recentActivity.instagramPostID}`}
            >
              <Activity recentActivity={recentActivity} />
            </Link>
            <Link
              className="hidden lg:block "
              referrerPolicy="no-referrer"
              target="_blank"
              href={`https://instagram.com/p/${recentActivity.instagramPostID}`}
            >
              <Activity recentActivity={recentActivity} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

function Activity({ recentActivity }: { recentActivity: RecentActivity }) {
  return (
    <>
      <div className="pt-12 text-2xl lg:text-3xl font-bold">
        {recentActivity.title}
      </div>
      <div className="mb-12 text-md mt-2 lg:mt-4 text-neutral-700 dark:text-neutral-300">
        {recentActivity.description}
      </div>
    </>
  );
}

export const metadata: Metadata = {
  title: "脆 | 活动",
};
