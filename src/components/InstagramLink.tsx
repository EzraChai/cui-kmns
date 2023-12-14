import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { RecentActivity } from "@/lib/types";
import Link from "next/link";

export default function InstagramRecentActivity({
  recentActivity,
}: {
  recentActivity: RecentActivity;
}) {
  return (
    <>
      <Link
        className="lg:hidden"
        referrerPolicy="no-referrer"
        target="_blank"
        href={`instagram://media?id=${recentActivity.instagramPostID}`}
      >
        <AlertItems recentActivityTitle={recentActivity.title} />
      </Link>
      <Link
        className="hidden w-1/2 mx-auto lg:block"
        referrerPolicy="no-referrer"
        target="_blank"
        href={`https://instagram.com/p/${recentActivity.instagramPostID}`}
      >
        <AlertItems recentActivityTitle={recentActivity.title} />
      </Link>
    </>
  );
}

function AlertItems({ recentActivityTitle }: { recentActivityTitle: string }) {
  return (
    <Alert className="mt-16 bg-transparent relative overflow-hidden rounded-none border-2 dark:border-white border-black">
      <AlertTitle className={`text-lg font-bold leading-none tracking-tight`}>
        近期大条事件
      </AlertTitle>
      <div className=" left-0 top-0 w-10 h-10 -z-10  rounded-full bg-purple-500 absolute blur-xl "></div>
      <div className=" left-0 bottom-0 w-5 h-5 -z-10  rounded-full bg-blue-500 absolute blur-xl "></div>
      <div className=" top-0 right-0 -z-10 w-5 h-5 rounded-full bg-orange-500 absolute blur-xl "></div>
      <div className=" bottom-0 right-0 -z-10 w-10 h-10 rounded-full bg-red-500 absolute blur-xl "></div>
      <AlertDescription className="text-md lg:text-md text-neutral-600 dark:text-neutral-400">
        {recentActivityTitle}
      </AlertDescription>
    </Alert>
  );
}
