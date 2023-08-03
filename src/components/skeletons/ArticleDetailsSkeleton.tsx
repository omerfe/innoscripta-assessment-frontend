import { Skeleton } from "../ui/skeleton";

const ArticleDetailsSkeleton = () => {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex items-center justify-between container">
        <Skeleton className="w-1/2 h-24 bg-stone-100 dark:bg-stone-700" />
        <Skeleton className="w-1/6 h-8 bg-stone-100 dark:bg-stone-700" />
      </div>
      <Skeleton className="w-full h-[70vh] bg-stone-100 dark:bg-stone-700" />
      <div className="container">
        <Skeleton className="w-full h-[40vh] bg-stone-100 dark:bg-stone-700" />
      </div>
    </section>
  );
};

export default ArticleDetailsSkeleton;
