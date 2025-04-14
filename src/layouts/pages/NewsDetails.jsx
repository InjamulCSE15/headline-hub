import { FaFacebookF, FaTwitter, FaGoogle, FaGithub } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";
import Header from "../../components/Header";
import RightSideNav from "../../components/layoutComponents/RightSideNav";
import { Link, useLoaderData } from "react-router-dom";
const NewsDetails = () => {
  const detailsData = useLoaderData();
  const newsData = detailsData[0];
  return (
    <div>
      <header><Header></Header></header>
      <main className="w-10/12 mx-auto grid grid-cols-12 gap-6">
        <section className="col-span-9">
          <div className="bg-white rounded-md border border-gray-200 p-4">
            <img src={newsData?.image_url} alt="News" className="rounded-md mb-4 w-full" />
            <h2 className="text-2xl font-bold mb-2">{newsData?.title}</h2>
            <p className=" text-gray-700 mb-2 text-justify">{newsData?.details}</p>
            <Link to={`/category/${newsData?.category_id}`} className="btn bg-[#D72050] text-white text-xl rounded-none mt-4 hover:bg-[#d72045] ">← All news in this category</Link>
          </div>

          {/* Editors Insight */}
          <article className="mt-6 lg:mt-10">
            <h3 className="text-lg font-semibold mb-4">Editors Insight</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[1, 2, 3].map((item) => (
                <div className="bg-white shadow-md rounded-md p-4 space-y-2" key={item}>
                  <img src={`/editor-${item}.jpg`} alt="Editor insight" className="rounded-md w-full" />
                  <h4 className="font-semibold text-base">21 The Most Stylish Wedding Guest Dresses For Spring</h4>
                  <div className="flex items-center text-sm text-gray-500">
                    <CiCalendar className="w-4 h-4 mr-1" /> Jan 4, 2022
                  </div>
                </div>
              ))}
            </div>
          </article>
        </section>
        <aside className="col-span-3">
          <RightSideNav />
        </aside>
      </main>
       
    </div>
  );
};

export default NewsDetails;