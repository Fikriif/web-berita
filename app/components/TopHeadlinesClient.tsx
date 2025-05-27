"use client";

import { removeDuplicateData } from "../utils";
import Article from "./Article";
import { newsAPI } from "../types";

type Props = {
  data: newsAPI[];
};

const TopHeadlinesClient = ({ data }: Props) => {
  const filteredArticles = removeDuplicateData({ articles: data });

  return (
    <div className="w-[700px]">
      {filteredArticles.map((article, index) => (
        <div key={`${article.title}-${index}`}>
          <Article data={article} />
        </div>
      ))}
    </div>
  );
};

export default TopHeadlinesClient;
