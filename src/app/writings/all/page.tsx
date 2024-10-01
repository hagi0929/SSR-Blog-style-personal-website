import Heading from "@/components/Heading";
import { getWritings, getWritingTagList } from "@/api/writings";
import BackButton from "@/components/BackButton";
import AllPostItem from "@/components/AllPostItem";
import Tags from "@/components/Tags";

export default async function Writings() {
  const articles = await getWritings();
  const tags = await getWritingTagList();

  return (
    <div className="w-full flex flex-col max-w-[720px] mx-auto gap-8">
      <div>
        <BackButton />
      </div>
      <Heading
        heading="All Writing Posts"
      />
      <div className="flex flex-col gap-4 pb-10">
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
