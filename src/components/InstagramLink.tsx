import { mashanzheng } from "@/app/layout";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { RecentActivity } from "@/lib/types";

export default function InstagramRecentActivity({
  recentActivity,
}: {
  recentActivity: RecentActivity;
}) {
  return (
    <>
      <a
        className="lg:hidden"
        referrerPolicy="no-referrer"
        target="_blank"
        // href={`https://instagram.com/p/${recentActivity.instagramPostID}`}
        href={`instagram://p/${recentActivity.instagramPostID}`}
      >
        <Alert className="mt-16 bg-transparent relative overflow-hidden rounded-none border-2 dark:border-white border-black">
          <AlertTitle className={mashanzheng.className}>
            近期大条事情
          </AlertTitle>
          <div className=" left-0 bottom-0 w-10 h-10 -z-10  rounded-full bg-purple-500 absolute blur-xl "></div>
          <div className=" top-0 right-0 -z-10 w-10 h-10 rounded-full bg-red-500 absolute blur-xl "></div>
          <AlertDescription className="text-md lg:text-md text-neutral-600 dark:text-neutral-400">
            {recentActivity.description}
          </AlertDescription>
        </Alert>
      </a>
      <a
        className="hidden lg:block"
        referrerPolicy="no-referrer"
        target="_blank"
        href={`https://instagram.com/p/${recentActivity.instagramPostID}`}
      >
        <Alert className="mt-16 bg-transparent relative overflow-hidden rounded-none border-2 dark:border-white border-black">
          <AlertTitle className={mashanzheng.className}>
            近期大条事情
          </AlertTitle>
          <div className=" left-0 bottom-0 w-10 h-10 -z-10  rounded-full bg-purple-500 absolute blur-xl "></div>
          <div className=" top-0 right-0 -z-10 w-10 h-10 rounded-full bg-red-500 absolute blur-xl "></div>
          <AlertDescription className="text-md lg:text-md text-neutral-600 dark:text-neutral-400">
            {recentActivity.description}
          </AlertDescription>
        </Alert>
      </a>
    </>
  );
}
