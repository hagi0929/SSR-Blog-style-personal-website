import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Link from "next/link";
import Heading from "@/components/Heading";
import { getWritings, getWritingSeriesList } from "@/api/writings";
import WritingCarousel from "@/components/WritingCarousel";

export default async function Writings() {
  const articles = await getWritings();
  const seriesList = await getWritingSeriesList();

  return (
    <div className="w-full flex flex-col min-h-screen gap-8">
      <Heading
        heading="Writings"
        subheading="These are list of my writings. Most of them would be technical stuff"
      />
      <div className="flex flex-col gap-4">
        <span className="text-2xl font-bold">
          Series
        </span>
        <div className="md:px-10">
          <WritingCarousel articles={seriesList} />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <span className="text-2xl font-bold">
          Posts
        </span>
        <BentoGrid>
          {articles.map(({ id, slug, title, previewText, tags }, index) => {
            const url = "/writings/post/" + slug;
            // const style = index % 3 == 0 ? "col-span-2" : "col-span-1";
            return (
              <BentoGridItem
                key={slug}
                title={title}
                // className={style}
                description={previewText}
                href={url}
                tags={tags}
              />
            )
          })}
        </BentoGrid>
        <Link href={"/writings/all"} className="font-bold self-center hover:underline hover:underline-offset-4">
          View All Posts
        </Link>
      </div>
    </div>
  );
}
