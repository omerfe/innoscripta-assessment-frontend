import { Skeleton } from "../ui/skeleton";

const ArticleCardSkeleton = () => {
  return (
    <div className="flex flex-col gap-3 relative">
      <Skeleton className="w-full h-[20vh] bg-stone-100 dark:bg-stone-700" />
      <Skeleton className="w-1/2 h-8 bg-stone-100 dark:bg-stone-700" />
      <Skeleton className="w-3/4 h-8 bg-stone-100 dark:bg-stone-700" />
    </div>
  );
};

export default ArticleCardSkeleton;
