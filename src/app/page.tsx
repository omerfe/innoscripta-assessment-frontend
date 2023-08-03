import { Skeleton } from "@/components/ui/skeleton";
import { getArticleById, getArticles } from "@/hooks/articleHooks";
import { Article } from "@/lib/types";
import Image from "next/image";

export default async function Home() {
  // const { data, error } = await getArticles();
  const { data: article, error: articleError } = await getArticleById(3);
  return (
    <main className="flex flex-col min-h-screen mt-6">
      <h1 className="text-5xl font-semibold mx-auto">Today&apos;s Headline</h1>
      {article && (
        <div className="flex flex-col items-center justify-center gap-3 container mt-6">
          <div className="relative w-full h-[60vh]">
            <Image
              priority
              src={article.url_to_image}
              alt={article.title}
              className="rounded-md"
              fill
              objectFit="cover"
              objectPosition="top"
            />
          </div>
          <h2 className="text-3xl font-semibold">{article.title}</h2>
          <p className="text-lg">{article.description}</p>
        </div>
      )}
      {(articleError || !article) && (
        <div className="flex flex-col items-center justify-center gap-3 container mt-6">
          <Skeleton className="relative w-full h-[60vh] rounded-md bg-stone-100 dark:bg-stone-700" />
          <Skeleton className="w-3/4 h-8 bg-stone-100 dark:bg-stone-700" />
          <Skeleton className="w-1/2 h-8 bg-stone-100 dark:bg-stone-700" />
        </div>
      )}
    </main>
  );
}
