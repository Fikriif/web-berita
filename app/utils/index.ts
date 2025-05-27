import { newsAPI } from "../types"

export const removeDuplicateData = (articles: any) => {
    const randomArticles:newsAPI[] = articles?.articles
    const filterArticles = randomArticles.filter(
      (articles) => articles.title && articles.url
    );

    return filterArticles
}