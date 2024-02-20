import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { client } from "@/lib/client";
import { Story } from "@/lib/types";
import { mashanzheng } from "../layout";
import { Metadata } from "next";

async function getStory(): Promise<Story[]> {
  return await client.fetch<Story[]>(`
  *[_type=="story"]| order(_createdAt desc){
    title,
    story,
    date
  }
`);
}

export default async function StoryPage() {
  const stories = await getStory();
  return (
    <div className="pt-12 max-w-5xl mx-auto">
      <div className="mt-24 px-6 md:px-0 min-h-max">
        <h3 className={`${mashanzheng.className} text-2xl lg:text-5xl`}>
          小故事
        </h3>
        <div className="grid md:grid-cols-3 mt-8 pb-8">
          {stories.map((story) => (
            <>
              <Card className=" border-black dark:border-white border-2">
                <CardHeader>
                  <CardTitle>{story.title}</CardTitle>
                  <CardDescription>{story.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-800 dark:text-neutral-200 whitespace-pre-line">
                    {story.story}
                  </p>
                </CardContent>
              </Card>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "脆 | 故事",
};
