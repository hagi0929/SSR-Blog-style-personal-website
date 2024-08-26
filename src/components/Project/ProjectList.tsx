import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {cn} from "@/lib/utils";
import {ProjectModel} from "@/models/models";

export interface ProjectListProps {
  items: ProjectModel[];
}
export default async function ProjectList({items} : ProjectListProps) {

  return (
      <BentoGrid className="mx-auto md:auto-rows-[20rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={""}
            className={cn("[&>p:text-lg]")}
            href={`/article/${item.id}`}
          />
        ))}
      </BentoGrid>
  );
}

