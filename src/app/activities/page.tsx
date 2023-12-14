import { client } from "@/lib/client";
import { RecentActivity } from "@/lib/types";
import Link from "next/link";

async function getRecentActivities(): Promise<RecentActivity[]> {
  return await client.fetch<RecentActivity[]>(`
    *[_type=="recentActivity"]{
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
    <div className="px-6 max-w-5xl mx-auto min-h-max">
      <div className="pt-24">
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
      <div className="mb-12 text-md mt-4 text-neutral-700 dark:text-neutral-300">
        {recentActivity.description}
      </div>
    </>
  );
}
