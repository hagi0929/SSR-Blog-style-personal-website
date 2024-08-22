import { BentoGrid, BentoGridItem } from "../ui/bento-grid";


export default async function ProjectList() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={cn("[&>p:text-lg]", item.className)}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </main>
  );
}

