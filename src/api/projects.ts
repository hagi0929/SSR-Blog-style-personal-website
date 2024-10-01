import { metadata } from "@/app/layout";
import { ProjectCategoryModel, ProjectModel, ProjectTechStackModel } from "@/models/models";
import { getItemsByItemName, getPropertiesByItemName, getArticleContentFromSlug } from "@/utils/api/supabase";
import { log } from "console";
import { NextURL } from "next/dist/server/web/next-url";
import { ExtendedRecordMap } from "notion-types";

export async function getProjects(
  categoryLabel: string | null = null,
  techStackLabel: string | null = null,
): Promise<ProjectModel[]> {
  const { data: items, error } = await getItemsByItemName("Project");
  if (error) {
    // TODO: Handle error
    throw new Error("Error while fetching: " + error);
  }
  // console.log(items);

  const parsedItems = items.map((item) => {
    return {
      id: item.notionId,
      slug: item.slug,
      title: item.label,
      description: item.metadata?.description || "",
      thumbnail: item.metadata?.thumbnail || "",
      links: item.metadata?.links || [],
      techStacks: item.properties?.filter((property) => property.name === "Techstack") || [],
      categories: item.properties?.filter((property) => property.name === "Category") || [],
    } as ProjectModel;
  })

  return parsedItems as ProjectModel[];
}

export const getProjectContent = async (slug: string) : Promise<ExtendedRecordMap> => {
  let { data, error } = await getArticleContentFromSlug("Project", slug);

  if (error) {
      // TODO: Handle error
      throw new Error("Error while fetching : " + error + " data: " + data);
  }
  
  if (!data) {
      throw new Error("No data found for slug: " + slug);
  }

  return JSON.parse(data.content) as ExtendedRecordMap;
};

export async function getProjectCategoryList(): Promise<ProjectCategoryModel[]> {
  const { data, error } = await getPropertiesByItemName("Project", "Category");

  if (error) {
    throw new Error(`Failed to fetch tags: ${error.message}`);
  }

  return data.map((singleData: any) => {
    return {

      id: singleData.id,
      label: singleData.label,
      slug: singleData.slug,
      count: singleData.itemCount,
    } as ProjectCategoryModel;
  });
}

export async function getProjectTechStackList(): Promise<ProjectTechStackModel[]> {
  const { data, error } = await getPropertiesByItemName("Project", "Techstack");

  if (error) {
    throw new Error(`Failed to fetch tags: ${error.message}`);
  }

  return data.map((singleData: any) => {
    return {
      id: singleData.id,
      label: singleData.label,
      slug: singleData.slug,
      count: singleData.itemCount,
    } as ProjectTechStackModel;
  });
}