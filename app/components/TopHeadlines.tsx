import { getNewsTopHeadlines } from "../api";
import TopHeadlinesClient from "./TopHeadlinesClient";

const TopHeadlines = async () => {
  const NewsHeadlines = await getNewsTopHeadlines();

  return <TopHeadlinesClient data={NewsHeadlines} />;
};

export default TopHeadlines;
