"use client";

import { Article } from "@/lib/types";
import moment from "moment";
import Image from "next/image";
import { ReactLenis } from "@studio-freight/react-lenis";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import { getRandomAnimationData } from "@/lib/utils";
import animationData from "@/lib/lottie/animation_3.json";

const ArticleDetails = ({ article }: { article: Article }) => {
  //   const [animationData, setAnimationData] = useState(null);

  //   useEffect(() => {
  //     const randomData = getRandomAnimationData();
  //     setAnimationData(randomData);
  //   }, []);

  const articleSource = article?.source_name;
  const articlePublishedAt = moment(article?.published_at).format(
    "MMMM Do YYYY"
  );
  return (
    <ReactLenis root options={{ lerp: 0.05, touchMultiplier: 1 }}>
      <section className="flex flex-col gap-6">
        <div className="flex items-center justify-between container">
          <h1 className="text-5xl font-semibold max-w-5xl">{article.title}</h1>
          <div className="flex flex-col gap-3">
            <p className="text-sm text-right">By: {article.author}</p>
            <div className="flex items-center justify-between gap-3">
              <div className="relative w-10 h-10 rounded-full border border-stone-700 dark:border-stone-300">
                <Image
                  src={
                    articleSource?.includes("Guardian")
                      ? "/the-guardian.jpeg"
                      : articleSource?.includes("BBC")
                      ? "/bbc.webp"
                      : "/espn.png"
                  }
                  alt={article.source_name}
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <p className="text-sm">{articlePublishedAt}</p>
            </div>
          </div>
        </div>
        <div className="relative w-full h-[70vh]">
          <Image
            priority
            src={article.url_to_image}
            alt={article.title}
            className="object-cover"
            fill
          />
        </div>
        <div className="container relative overflow-x-hidden">
          <article className="prose lg:prose-xl 2xl:prose-2xl text-stone-600 dark:text-stone-400">
            {article.content}
          </article>
          <div className="w-[40%] absolute -right-16 top-10">
            <Lottie animationData={getRandomAnimationData()} />
          </div>
          <div className="w-[40%] absolute -right-16 top-1/2">
            <Lottie animationData={getRandomAnimationData()} />
          </div>
        </div>
      </section>
    </ReactLenis>
  );
};

export default ArticleDetails;
