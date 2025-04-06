import Marquee from "react-fast-marquee"
import { Link } from "react-router-dom"

const LatestNews = () => {
    return (
        <div className="flex items-center gap-2 bg-slate-200 px-3 py-2">
            <p className="bg-red-500 text-white px-4 py-2 rounded-sm">Latest</p>
            <Marquee pauseOnHover={true} className="flex items-center gap-2">
                <Link to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, dolor!</Link>
                <Link to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, aliquam aspernatur! Odio.</Link>
            </Marquee>
            
        </div>
    )
}

export default LatestNews