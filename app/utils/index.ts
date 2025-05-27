import { newsAPI } from "../types";

interface NewsApiResponse {
  articles: newsAPI[];
}

export const removeDuplicateData = (articles: NewsApiResponse) => {
  const randomArticles: newsAPI[] = articles?.articles;
  const filterArticles = randomArticles.filter(
    (articles) => articles.title && articles.url
  );

  return filterArticles;
};
