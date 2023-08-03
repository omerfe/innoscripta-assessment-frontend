import {
  Category,
  CategoryFilteringOption,
  PaginatedResponse,
} from "@/lib/types";
import { getBaseAPIUrl } from "@/lib/utils";

type SearchParams = {
  [key in CategoryFilteringOption]?: string | number | null;
};

const baseUrl = getBaseAPIUrl();

export async function getCategories(searchParams: SearchParams = { page: 1 }) {
  let queryParams = new URLSearchParams();
  for (const key in searchParams) {
    const value = searchParams[key as keyof SearchParams];
    if (value !== null && value !== undefined) {
      queryParams.set(key, value.toString());
    }
  }
  try {
    const res = await fetch(`${baseUrl}/categories?${queryParams.toString()}`);
    const categoryData = (await res.json()) as PaginatedResponse<Category>;
    return { data: categoryData.data, error: null };
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
      return { data: null, error: { message: error.message } };
    }
    return { data: null, error: { message: "Failed to fetch Category data" } };
  }
}

export async function getCategoryById(id: number) {
  try {
    const res = await fetch(`${baseUrl}/categories/${id}`);
    const CategoryData = (await res.json()) as Category;
    return { data: CategoryData, error: null };
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
      return { data: null, error: { message: error.message } };
    }
    return { data: null, error: { message: "Failed to fetch Category data" } };
  }
}
