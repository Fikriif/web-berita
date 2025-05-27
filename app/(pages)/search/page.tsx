"use client";

import Article from "@/app/components/Article";
import { newsAPI } from "@/app/types";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const Search = () => {
  const [newsData, setNewsData] = useState<newsAPI[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const searchParams = useSearchParams();
  const search = searchParams ? searchParams.get("q") : null;

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const getNews = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=${search}&apiKey=${process.env.NEXT_PUBLIC_API_TOKEN_NEWS}`,
          { signal }
        );
        const articles: newsAPI[] = response.data.articles || [];
        const filterArticles = articles.filter(
          (article) => article.urlToImage !== null
        );
        setNewsData(filterArticles);
        setLoading(false);
      } catch (error) {
        if (typeof error === "object" && error !== null) {
          console.log(error.toString());
        } else {
          console.log("unexpected error", error);
        }
      }
    };
    getNews();
    return () => {
      controller.abort();
    };
  }, [search]);

  return (
    <div className="w-[700px]">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {newsData.map((article, index: number) => (
            <div
              key={`${article.title}-${index}`}
              className="py-2 border-b border-gray-300 mb-4"
            >
              <Article data={article} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
