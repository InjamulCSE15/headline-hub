import { createBrowserRouter, Navigate } from "react-router-dom"
import HomeLayout from "../layouts/HomeLayout"
import axios from "axios"
import CategoryNews from "../layouts/pages/CategoryNews"
import AuthLayout from "../layouts/AuthLayout"
import Login from "../layouts/pages/Login"
import Register from "../layouts/pages/Register"
import NewsDetails from "../layouts/pages/NewsDetails"
import toast from "react-hot-toast"
import { PrivateRoute } from "./PrivateRoute"

const router = createBrowserRouter ([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "",
                element: <Navigate to={"/category/01"} ></Navigate>
            },
            {
                path: "/category/:id",
                element: <CategoryNews/>,
                loader: async ({ params }) => {
                    try {
                        const response = await axios.get(`https://openapi.programming-hero.com/api/news/category/${params.id}`);                        
                        return response.data.data; // ✅ Ensure you return `data`, not just `id`
                    } catch (err) {
                        console.error(err);
                        return []; // ✅ Return an empty array if there's an error
                    }
                },
            },
        ]
    },
    {
        path: "/news/:id",
        element: <PrivateRoute> <NewsDetails/></PrivateRoute>,
        loader: async ({ params }) => {
            try {
                const response = await axios.get(`https://openapi.programming-hero.com/api/news/${params.id}`);
                console.log("API Response:", response.data); // Debugging: check the full response
                return response.data.data; // ✅ Ensure you return `data`, not just `id`
            } catch (err) {
                toast.error(err.message);
                console.error(err);
                return []; // ✅ Return an empty array if there's an error
            }
        }
        
    },
    {
        path: "auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: "/auth/login",
                element: <Login></Login>
            },
            {
                path: "/auth/register",
                element: <Register></Register>
            }
        ]
    },
    {
        path: "*",
        element: <h1>Error</h1>
    }
])

export default router