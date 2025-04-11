import { FaFacebookF, FaTwitter, FaGoogle, FaGithub } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";
import Header from "../../components/Header";
import RightSideNav from "../../components/layoutComponents/RightSideNav";
const NewsDetails = () => {
  return (
    <div>
      <header><Header></Header></header>
      <main className="w-10/12 mx-auto grid grid-cols-12 gap-6">
        <section className="col-span-9">
        <div className="bg-white rounded-md border border-gray-200 p-4">
            <img src="/news-image.jpg" alt="News" className="rounded-md mb-4 w-full" />
            <h2 className="text-xl font-bold mb-2">
              Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet
            </h2>
            <p className="text-sm text-gray-500 mb-2">
              Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military,
              News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News)
            </p>
            <p className="text-gray-700 text-sm">
              U.S. President Joe Biden has announced nearly $3 billion in new U.S. military aid for Kyiv as Ukraine
              marked its independence day six months after Russia invaded the country... The United States of America
              is committed to supporting the people of Ukraine as they continue the fight to defend their sovereignty.
            </p>
            <button className="btn bg-[#D72050] text-white text-xl rounded-none mt-4 hover:bg-[#d72045] ">← All news in this category</button>
          </div>
        </section>
        <aside className="col-span-3">
          <RightSideNav/>
        </aside>
      </main>
      <div className="max-w-6xl mx-auto p-4 space-y-8">         

          <main className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Main Article */}
            <section className="md:col-span-2">
              
            </section>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="space-y-2">
                <p className="font-semibold">Login With</p>
                <button className="btn btn-outline w-full flex items-center gap-2">
                  <FaGoogle /> Login with Google
                </button>
                <button className="btn btn-outline w-full flex items-center gap-2">
                  <FaGithub /> Login with Github
                </button>
              </div>

              <div className="space-y-2">
                <p className="font-semibold">Find Us On</p>
                <div className="space-y-2">
                  <button className="btn btn-outline w-full flex items-center justify-start gap-2">
                    <FaFacebookF /> Facebook
                  </button>
                  <button className="btn btn-outline w-full flex items-center justify-start gap-2">
                    <FaTwitter /> Twitter
                  </button>
                  <button className="btn btn-outline w-full flex items-center justify-start gap-2">
                    <FaTwitter /> Twitter
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <p className="font-semibold">Q-Zone</p>
                <img src="/swimming.jpg" alt="Swimming" className="rounded-md w-full" />
                <img src="/class.jpg" alt="Class" className="rounded-md w-full" />
                <img src="/playground.jpg" alt="Playground" className="rounded-md w-full" />
              </div>
            </aside>
          </main>

          {/* Editors Insight */}
          <section>
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
          </section>
        </div>
    </div>
  );
};

export default NewsDetails;