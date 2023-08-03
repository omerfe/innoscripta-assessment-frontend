import { getCategories } from "@/hooks/categoryHooks";
import Link from "next/link";
import { Search } from "lucide-react";
import { Input } from "./ui/input";

import { Skeleton } from "./ui/skeleton";
import AuthModal from "./AuthModal";
import UserNav from "./UserNav";

const Navbar = async () => {
  const { data: categories, error } = await getCategories({ per_page: 5 });
  const user = null;
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
          <Search className="absolute top-1/2 right-3 transform -translate-y-1/2 w-4 h-4 text-stone-700" />
        </div>
        {user ? <UserNav /> : <AuthModal />}
      </div>
    </nav>
  );
};

export default Navbar;
