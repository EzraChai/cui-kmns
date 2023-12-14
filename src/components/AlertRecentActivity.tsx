import { client } from "@/lib/client";
import InstagramRecentActivity from "./InstagramLink";
import { RecentActivity } from "@/lib/types";

async function getRecentActivity(): Promise<RecentActivity> {
  return await client.fetch<RecentActivity>(`
    *[_type=="recentActivity"][0]{
        title,
        description,
        _id,
        instagramPostID
    }
`);
}

export async function AlertRecentActivity() {
  const recentActivity = await getRecentActivity();

  return <InstagramRecentActivity recentActivity={recentActivity} />;
}
