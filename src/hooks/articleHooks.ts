import {
  Article,
  ArticleFilteringOption,
  NormalizedArticle,
  PaginatedResponse,
} from "@/lib/types";
import { getBaseAPIUrl } from "@/lib/utils";

type SearchParams = {
  [key in ArticleFilteringOption]?: string | number | null;
};

const baseUrl = getBaseAPIUrl();

export async function getArticles(searchParams: SearchParams = { page: 1 }) {
  let queryParams = new URLSearchParams();
  for (const key in searchParams) {
    const value = searchParams[key as keyof SearchParams];
    if (value !== null && value !== undefined) {
      queryParams.set(key, value.toString());
    }
  }
  try {
    const res = await fetch(`${baseUrl}/articles?${queryParams.toString()}`);
    const articleData =
      (await res.json()) as PaginatedResponse<NormalizedArticle>;
    return { data: articleData.data, error: null };
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
      return { data: null, error: { message: error.message } };
    }
    return { data: null, error: { message: "Failed to fetch Article data" } };
  }
}

export async function getArticleById(id: number) {
  try {
    const res = await fetch(`${baseUrl}/articles/${id}`);
    const articleData = (await res.json()) as Article;
    return { data: articleData, error: null };
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
      return { data: null, error: { message: error.message } };
    }
    return { data: null, error: { message: "Failed to fetch Article data" } };
  }
}
