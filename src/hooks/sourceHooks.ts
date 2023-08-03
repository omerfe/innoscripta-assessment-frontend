import { Source, SourceFilteringOption, PaginatedResponse } from "@/lib/types";
import { getBaseAPIUrl } from "@/lib/utils";

type SearchParams = {
  [key in SourceFilteringOption]?: string | number | null;
};

const baseUrl = getBaseAPIUrl();

export async function getSources(searchParams: SearchParams = { page: 1 }) {
  let queryParams = new URLSearchParams();
  for (const key in searchParams) {
    const value = searchParams[key as keyof SearchParams];
    if (value !== null && value !== undefined) {
      queryParams.set(key, value.toString());
    }
  }
  try {
    const res = await fetch(`${baseUrl}/sources?${queryParams.toString()}`);
    const sourceData = (await res.json()) as PaginatedResponse<Source>;
    return { data: sourceData.data, error: null };
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
      return { data: null, error: { message: error.message } };
    }
    return { data: null, error: { message: "Failed to fetch Source data" } };
  }
}

export async function getSourceById(id: number) {
  try {
    const res = await fetch(`${baseUrl}/sources/${id}`);
    const SourceData = (await res.json()) as Source;
    return { data: SourceData, error: null };
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
      return { data: null, error: { message: error.message } };
    }
    return { data: null, error: { message: "Failed to fetch Source data" } };
  }
}
