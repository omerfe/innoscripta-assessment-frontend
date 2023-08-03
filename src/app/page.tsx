import ArticleCard from "@/components/ArticleCard";
import Headline from "@/components/Headline";
import { getArticleById, getArticles } from "@/hooks/articleHooks";
import HeadlineSkeleton from "@/components/skeletons/HeadlineSkeleton";
import ArticleCardSkeleton from "@/components/skeletons/ArticleCardSkeleton";

export default async function Home() {
  const { data: articles, error: articlesError } = await getArticles({
    per_page: 12,
  });
  const { data: article, error: articleError } = await getArticleById(3);
  return (
    <main className="flex flex-col min-h-screen py-6">
      <h1 className="text-5xl font-semibold mx-auto">Today&apos;s Headline</h1>
      {article && <Headline article={article} />}
      {(articleError || !article) && <HeadlineSkeleton />}
      <h1 className="text-5xl font-semibold mx-auto mt-6">Top Stories</h1>
      {articles && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mt-6">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      )}
      {(articlesError || articles.length <= 0) && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mt-6">
          {Array.from(Array(12).keys()).map((i) => (
            <ArticleCardSkeleton key={i} />
          ))}
        </div>
      )}
    </main>
  );
}
