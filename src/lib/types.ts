export type Article = {
  id: number;
  title: string;
  description: string;
  author: string;
  published_at: string;
  url: string;
  url_to_image: string;
  content: string;
  source_id: Source['id'];
  source_name: Source['name'];
  category_id: Category['id'];
};

export type NormalizedArticle = Omit<
  Article,
  "url" | "content" | "source_id" | "source_name" | "category_id"
>;

export type Source = {
    id: number;
    name: string;
    description: string;
    url: string;
}

export type Category = {
    id: number;
    name: string;
    created_at: string;
}

export type ArticleFilteringOption = 'page' | 'source' | 'category' | 'author'
export type CategoryFilteringOption = 'page' | 'name'
export type SourceFilteringOption = 'page' | 'name' | 'description' | 'url'

export type User = {
    id: number;
    name: string;
    email: string;
}

export type UserFavArticle = {
    article_id: Article['id'];
}

export type UserFavCategory = {
    category_id: Category['id'];
}

export type PaginatedResponse<T> = {
    data: T[];
    total: number;
    per_page: number;
    current_page: number;
    last_page: number;
    from: number;
    to: number;
    first_page_url: string;
    last_page_url: string;
    next_page_url: string | null;
    prev_page_url: string | null;
}
