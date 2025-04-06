const FindUs = () => {


    return (
        <div className="mt-10">
            <h1 className="font-semibold">Find Us On</h1>
            <div className="join join-vertical rounded-none flex bg-white mt-3">
                <button className="btn join-item flex justify-start items-center hover:bg-white bg-white">
                    <div className="text-sky-600 bg-slate-200 rounded-full p-2">
                        <svg aria-label="Facebook logo" width="12" height="12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor">
                            <path d="M8 12h5V8c0-6 4-7 11-6v5c-4 0-5 0-5 3v2h5l-1 6h-4v12h-6V18H8z"></path>
                        </svg>
                    </div>
                    Facebook
                </button>
                <button className="btn join-item flex justify-start items-center hover:bg-white bg-white">
                    <div className="text-gray-600 bg-slate-200 rounded-full p-2">
                        <svg aria-label="X logo" width="12" height="12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 271" fill="currentColor">
                        <path fill="currentColor" d="m236 0h46l-101 115 118 156h-92.6l-72.5-94.8-83 94.8h-46l107-123-113-148h94.9l65.5 86.6zm-16.1 244h25.5l-165-218h-27.4z"/>
                        </svg>
                    </div>
                    Twitter
                </button>
                <button className="btn join-item flex justify-start items-center hover:bg-white bg-white">
                    <div className="text-orange-600 bg-slate-200 rounded-full p-2">
                        <svg aria-label="Instagram logo" width="12" height="12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M7.5 2C4.42 2 2 4.42 2 7.5v9C2 19.58 4.42 22 7.5 22h9c3.08 0 5.5-2.42 5.5-5.5v-9C22 4.42 19.58 2 16.5 2h-9zm0 2h9c1.93 0 3.5 1.57 3.5 3.5v9c0 1.93-1.57 3.5-3.5 3.5h-9c-1.93 0-3.5-1.57-3.5-3.5v-9C4 5.57 5.57 4 7.5 4zm9 1.5a1.5 1.5 0 100 3 1.5 1.5 0 100-3zM12 7a5 5 0 015 5 5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5zm0 2a3 3 0 100 6 3 3 0 000-6z"/>
                        </svg>
                    </div>
                    Instagram
                </button>


            </div>
        </div>
    );
};

export default FindUs;