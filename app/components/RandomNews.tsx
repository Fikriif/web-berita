import React from "react";
import { getNewsSearch } from "../api";
import { removeDuplicateData } from "../utils";
import RandomArticles from "./RandomArticles";

const RandomNews = async () => {
  const randomNews = await getNewsSearch("random news");
  const filterArticles = removeDuplicateData(randomNews);
  return (
    <div className="mt-4 w-[450px] border-1 border-gray-300">
      <h1 className="pl-2 text-2xl font-bold underline">Random News</h1>
      {filterArticles.map((article, index) => (
        <div
          key={`${article?.title}-${index}`}
          className="py-2 border-b border-gray-300 mb-4 "
        >
          <RandomArticles data={article} />
        </div>
      ))}
    </div>
  );
};

export default RandomNews;
