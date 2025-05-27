import React from "react";
import { getNewsSearch } from "../../api";
import { removeDuplicateData } from "../../utils";
import Article from "../../components/Article";

const Science = async () => {
  const newsScience = await getNewsSearch("science");
  const filterArticles = removeDuplicateData(newsScience);
  return (
    <div className="w-[700px]">
      {filterArticles.map((article, index) => (
        <div
          key={`${article?.title}-${index}`}
          className="py-2 border-b border-gray-300 mb-4 "
        >
          <Article data={article} />
        </div>
      ))}
    </div>
  );
};

export default Science;
