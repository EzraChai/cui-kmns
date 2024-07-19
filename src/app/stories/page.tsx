import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { client } from "@/lib/client";
import { Story } from "@/lib/types";
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
    <div className="pt-12 max-w-5xl mx-auto ">
      <div className="mt-32 px-6 md:px-0 ">
        <div className="columns-1 md:columns-3 mt-8 pb-8 space-y-8 gap-8 ">
          {stories.map((story, index) => (
            <Card
              key={index}
              className="group break-inside-avoid-column w-full border-black dark:border-white border-2"
            >
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
          ))}
        </div>
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "脆 | 故事",
};
