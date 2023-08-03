import { NormalizedArticle } from "@/lib/types";
import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ArticleCard = ({ article }: { article: NormalizedArticle }) => {
  return (
    <div className="flex flex-col gap-3 relative">
      <Link
        href={`/articles/${article.id}`}
        className="relative w-full h-[20vh] group"
      >
        <Image
          priority
          src={article.url_to_image}
          alt={article.title}
          className="rounded-md object-cover object-top"
          fill
        />
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-stone-900 to-transparent group-hover:hidden" />
      </Link>
      <button className="absolute top-0 right-0 w-12 h-12 flex border border-transparent hover:border-stone-400 rounded-md transition-colors duration-300">
        <Heart className="m-auto w-6 h-6 text-stone-300" />
      </button>
      <h2 className="text-2xl font-semibold">{article.title}</h2>
      <p>{article.description}</p>
    </div>
  );
};

export default ArticleCard;
