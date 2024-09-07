import {ProjectCategoryModel, ProjectModel, ProjectTechStackModel} from "@/models/models";
import {NextURL} from "next/dist/server/web/next-url";

export async function getProjects(categoryLabel: string | null = null,
                                  techStackLabel: string | null = null,
):
  Promise<ProjectModel[]> {
  const url = new URL(`${process.env.NEXT_PUBLIC_SITE_URL}/api/item`);
  url.searchParams.append("itemName", "Project");
  if (categoryLabel) {
    url.searchParams.append("category", categoryLabel);
  }
  if (techStackLabel) {
    url.searchParams.append("techStack", techStackLabel);
  }
  const response = await fetch(url.toString());

  if (!
    response.ok
  ) {
    throw new Error(`Failed to fetch projects: ${response.statusText}`);
  }

  const data = await response.json();
  return data as ProjectModel[];
}

export async function getProjectCategoryList(): Promise<ProjectCategoryModel[]> {
  const url = new NextURL(`${process.env.NEXT_PUBLIC_SITE_URL}/api/item`);
  url.searchParams.append("itemName", "Project");
  url.searchParams.append("propertyName", "Category");

  const response = await fetch(url.toString());

  if (!response.ok) {
    throw new Error(`Failed to fetch categories: ${response.statusText}`);
  }

  const data = await response.json();

  return data.map((singleData: any) => {
    return {
      id: singleData.id,
      label: singleData.label,
      count: singleData.itemCount,
    } as ProjectCategoryModel;
  });
}

export async function getProjectTechStackList(): Promise<ProjectTechStackModel[]> {
  const url = new NextURL(`${process.env.NEXT_PUBLIC_SITE_URL}/api/property`);
  url.searchParams.append("itemName", "Project");
  url.searchParams.append("propertyName", "Techstack");

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch categories: ${response.statusText}`);
  }

  const data = await response.json();

  return data.map((singleData: any) => {
    return {
      id: singleData.id,
      label: singleData.label,
      count: singleData.itemCount,
    } as ProjectTechStackModel;
  });
}