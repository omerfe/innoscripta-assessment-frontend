import { getCategories } from "@/hooks/categoryHooks";
import Link from "next/link";
import { Search } from "lucide-react";
import { Input } from "./ui/input";
import Image from "next/image";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Skeleton } from "./ui/skeleton";

const Navbar = async () => {
  const { data: categories, error } = await getCategories({ per_page: 5 });
  return (
    <nav className="border-t border-b border-stone-400 dark:border-stone-300 container flex items-center justify-between  py-6">
      <Link className="text-2xl font-bold" href="/">
        AllTheNews
      </Link>
      {categories && (
        <ul className="flex items-center gap-5 capitalize">
          {categories.map((category) => (
            <li key={category.id}>
              <Link href={`/categories/${category.name.toLowerCase()}`}>
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
      {(error || categories.length <= 0) && (
        <ul className="flex items-center gap-5 capitalize">
          {Array.from(Array(5).keys()).map((i) => (
            <li key={i}>
              <Skeleton className="w-20 h-8 bg-stone-100 dark:bg-stone-700" />
            </li>
          ))}
        </ul>
      )}
      <div className="flex items-center gap-3">
        <div className="relative">
          <Input
            type="text"
            placeholder="Search articles..."
            className="h-10 bg-stone-100"
          />
          <Search className="absolute top-1/2 right-3 transform -translate-y-1/2 w-4 h-4" />
        </div>
        <Popover>
          <PopoverTrigger className="relative w-10 h-10 rounded-full bg-stone-300"></PopoverTrigger>
          <PopoverContent className="bg-stone-100 dark:bg-stone-700 w-52 ">
            Place content for the popover here.
          </PopoverContent>
        </Popover>
      </div>
    </nav>
  );
};

export default Navbar;
