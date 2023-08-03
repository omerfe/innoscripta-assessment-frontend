import { Article } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

const Headline = ({ article }: { article: Article }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 container mt-6">
      <Link href={`/articles/${article.id}`} className="relative w-full h-[60vh]">
        <Image
          priority
          src={article.url_to_image}
          alt={article.title}
          className="rounded-md object-cover object-top"
          fill
        />
      </Link>
      <h2 className="text-3xl font-semibold">{article.title}</h2>
      <p className="text-lg text-center max-w-7xl">{article.description}</p>
    </div>
  );
};

export default Headline;
