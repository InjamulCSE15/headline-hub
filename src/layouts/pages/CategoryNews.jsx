import { useLoaderData } from "react-router-dom";
import NewsCard from "../../components/NewsCard";

const CategoryNews = () => {
    const newsData  = useLoaderData(); 
    if (!newsData || newsData.length === 0) {
        return (
            <div className=" p-4  text-center mt-8">
                <p className="text-gray-500 font-semibold">No news available at the moment.</p>
                <button className="btn btn-ghost border border-gray-200 mt-2" onClick={() => window.location.reload()}>
                    Reload
                </button>
                <br />
                <h6 className="text-gray-400 font-semibold mt-2"> Or try another category. </h6>
            </div>
        );
    }
    return (
        <div className="my-3"> 
            <h3 className=" font-semibold mb-4">Recent News</h3>
             <div>
                {
                    newsData.map((news) => (
                    <NewsCard key={news._id} news={news}></NewsCard>
                    ))
                }
             </div> 
        </div>
    );
};

export default CategoryNews;