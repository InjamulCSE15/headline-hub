import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get("https://openapi.programming-hero.com/api/news/categories")
            .then(res => 
                // console.log(res.data.data.news_category)
                setCategories(res.data.data.news_category)
            )
            .catch(err => console.log(err))
    })
    return (
        <div>
            <h1 className="font-semibold">All Categories</h1>  
            <div className="mt-5 flex flex-col">
                {
                    categories.map(category => <NavLink to={`/category/${category.category_id}`} key={category.category_id} className="justify-start mb-2 btn rounded-none"> {category.category_name} </NavLink>)
                }
            </div>          
        </div>
    );
};

export default LeftSideNav;