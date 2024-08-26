import { NextResponse } from 'next/server';
import { ArticleTagModel, ArticleModel } from '@/models/models';
import {mockArticles, mockArticleTags} from "@/data/mockData";

export async function GET() {
  const tagsWithCount = mockArticleTags.map(tag => {
    const count = mockArticles.filter(article =>
      article.tags.some(articleTag => articleTag.id === tag.id)
    ).length;
    return { ...tag, count };
  });

  return NextResponse.json(tagsWithCount);
}
