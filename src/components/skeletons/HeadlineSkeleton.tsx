import { Skeleton } from "../ui/skeleton";

const HeadlineSkeleton = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 container mt-6">
      <Skeleton className="relative w-full h-[60vh] rounded-md bg-stone-100 dark:bg-stone-700" />
      <Skeleton className="w-3/4 h-8 bg-stone-100 dark:bg-stone-700" />
      <Skeleton className="w-1/2 h-8 bg-stone-100 dark:bg-stone-700" />
    </div>
  );
};

export default HeadlineSkeleton;
