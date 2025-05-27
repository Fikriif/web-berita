import React from "react";
import { getNewsSearch } from "../../api";
import { removeDuplicateData } from "../../utils";
import Article from "../../components/Article";

const Indonesia = async () => {
  const newsIndonesia = await getNewsSearch("indonesia");
  const filterArticles = removeDuplicateData(newsIndonesia);
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

export default Indonesia;
