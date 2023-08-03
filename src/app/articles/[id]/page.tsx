import ArticleDetails from "@/components/ArticleDetails";
import ArticleDetailsSkeleton from "@/components/skeletons/ArticleDetailsSkeleton";
import { getArticleById } from "@/hooks/articleHooks";
import { Article } from "@/lib/types";
import moment from "moment";
import Image from "next/image";

export default async function ArticlePage({
  params,
}: {
  params: { id: string };
}) {
  const { data: article, error: articleError } = await getArticleById(
    Number(params.id)
  );
  return (
    <main className="flex flex-col min-h-screen py-6">
      {(articleError || !article) && <ArticleDetailsSkeleton />}
      {article && <ArticleDetails article={article} />}
    </main>
  );
}
