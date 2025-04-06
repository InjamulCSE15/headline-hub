import { useEffect, useState } from "react";
import { FaRegEye, FaStar, FaShareAlt } from "react-icons/fa";

const NewsCard = ({ news }) => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => setLoading(false), 1500);
    }, []);    

    return (
        <div className="card bg-base-100 shadow-xl p-4 border border-gray-200 mb-3">
            {loading ? (
                <div className="animate-pulse space-y-3">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                        <div className="w-24 h-4 bg-gray-300 rounded"></div>
                    </div>
                    <div className="w-full h-6 bg-gray-300 rounded"></div>
                    <div className="w-full h-52 bg-gray-300 rounded"></div>
                    <div className="w-full h-4 bg-gray-300 rounded"></div>
                </div>
            ) : (
                <>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <img
                                src={news.author.img}
                                alt={news.author.name}
                                className="w-10 h-10 rounded-full"
                            />
                            <div>
                                <p className="font-semibold">{news.author.name}</p>
                                <p className="text-sm text-gray-500">{news.author.published_date}</p>
                            </div>
                        </div>
                        <FaShareAlt className="text-gray-500 cursor-pointer" />
                    </div>
                    <h2 className="font-bold text-lg mt-3">{news.title}</h2>
                    <img src={news.image_url}
                        alt="news-thumbnail"
                        className="w-full h-full object-cover rounded-lg mt-3"
                    />
                    <p className="text-gray-600 mt-3">{news.details.slice(0, 150)}...</p>
                    <a href="#" className="text-orange-600 font-semibold mt-2 inline-block">
                        Read More
                    </a>
                    <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center gap-1 text-orange-500">
                            <FaStar />
                            <span className="font-semibold">{news.rating.number}</span>
                        </div>
                        <div className="flex items-center gap-1 text-gray-500">
                            <FaRegEye />
                            <span>{news.total_view}</span>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default NewsCard;