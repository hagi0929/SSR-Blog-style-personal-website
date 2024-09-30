import { Card, CardContent } from "@/components/ui/card"
import Heading from "@/components/Heading";
import BackButton from "@/components/BackButton";

import { getWritings, getWritingSeriesList } from "@/api/writings";

import { ProjectTechStackModel } from "@/models/models";

export const dynamicParams = false;

export async function generateStaticParams() {
  const seriesList: ProjectTechStackModel[] = await getWritingSeriesList();
  console.log(seriesList);
  return seriesList.map(series => ({
    series: series.slug,
  }));
}

export default async function Writings({ params }: { params: { series: string } }) {
  const projects = await getWritings(params.series);

  console.log(projects);

  return (
    <div className="w-full h-full flex flex-col gap-16">
      <div className="flex -mb-10">
        <BackButton />
      </div>

      <Heading
        heading={`Series: ${params.series}`}
        subheading="These are list of my writings. Most of them would be technical stuff"
      />

      <div className="flex flex-grow flex-col gap-4">
        {projects && projects.length > 0 ? (
          projects.map(({ id, title, slug, createdAt, previewText }, index) => {
            const url = "/post/" + slug;
            const style = index % 3 == 0 ? "col-span-2" : "col-span-1";
            return (
              <div key={id} className={style}>
                <Card>
                  <CardContent>
                    <a href={url}>
                      <h3 className="font-bold">{title}</h3>
                      <p>{createdAt.toString()}</p>
                      <p>{previewText}</p>
                    </a>
                  </CardContent>
                </Card>
              </div>
            );
          })
        ) : (
          <div className="flex flex-grow items-center justify-center">
            <p className="text-center text-lg">No articles found in the series &quot;{params.series}&quot;</p>
          </div>
        )}
      </div>
    </div>
  );
}
