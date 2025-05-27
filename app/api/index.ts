import axios from "axios";

export const getNewsTopHeadlines = async () => {
  try {
    const newsData = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEXT_PUBLIC_API_TOKEN_NEWS}`
    );
    return newsData.data;
  } catch (error) {
    
  }
};


export const getNewsSearch = async (keyword: string) => {
  const newsData = await axios.get(
    `https://newsapi.org/v2/everything?apiKey=${process.env.NEXT_PUBLIC_API_TOKEN_NEWS}&q=${keyword}&pageSize=10`
  );
  return newsData.data;
};