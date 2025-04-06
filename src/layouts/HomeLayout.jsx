import { Outlet } from "react-router-dom";
import Header from "../components/Header"
import LatestNews from "../components/LatestNews"
import LeftSideNav from "../components/layoutComponents/LeftSideNav"
import RightSideNav from "../components/layoutComponents/RightSideNav"
import Navbar from "../components/Navbar"

const HomeLayout = () => {
    return (
        <div>
            <header><Header></Header></header>
            <section className="w-11/12 mx-auto">
                <LatestNews/>
            </section>
            <nav className="w-11/12 mx-auto py-4">
                <Navbar/>
            </nav>
            <main className="w-11/12 mx-auto grid md:grid-cols-12 gap-3 py-4">
                <aside className="col-span-3 ">
                    <LeftSideNav></LeftSideNav>
                </aside>
                <section className="col-span-6 "><Outlet></Outlet></section>
                <aside className="col-span-3">
                    <RightSideNav></RightSideNav>
                </aside>
            </main>
        </div>
    )
}

export default HomeLayout