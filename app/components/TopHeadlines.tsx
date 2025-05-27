import { getNewsTopHeadlines } from "../api";
import { removeDuplicateData } from "../utils";
import Article from "./Article";

const TopHeadlines = async() => {
    const NewsHeadlines = await getNewsTopHeadlines();
    const filterArticles = removeDuplicateData(NewsHeadlines);
  return (
    <div className="w-[700px]">
        {filterArticles.map((article,index) => 
        <div key={`${article.title}-${index}`}>
            <Article data={article}/>
        </div>
        )}
    </div> 
  )
}

export default TopHeadlines
