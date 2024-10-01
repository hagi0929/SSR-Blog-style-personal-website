import Heading from "@/components/Heading";
import { getWritings } from "@/api/writings";
import BackButton from "@/components/BackButton";
import AllPostItem from "@/components/AllPostItem";

export default async function Writings() {
  const articles = await getWritings();
  // const tags = await getArticleTagList();

  return (
    <div className="w-full flex flex-col max-w-[720px] mx-auto gap-8">
      <div>
        <BackButton />
      </div>
      <Heading
        heading="All Writing Posts"
        subheading="These are list of my writings. Most of them would be technical stuff"
      />
      <div className="flex flex-col gap-4">
        {articles.map(({ id, title, slug, createdAt, previewText, tags }) => {
          const url = "/writings/post/" + slug;
          return (
            <AllPostItem
              key={id}
              title={title}
              description={previewText}
              date={new Date(createdAt)}
              url={url}
              tags={tags}
            />
          )
        })}
      </div>
    </div>
  );
}
