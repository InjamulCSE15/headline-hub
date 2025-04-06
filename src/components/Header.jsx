import { useState, useEffect } from "react";
const Header = () => {
    const [currentDT, setCurrentDT] = useState(new Date());

    
      const formattedDate = currentDT.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });    

    return (
        <div className='text-center py-10'>
            <h1 className="text-3xl md:text-5xl font-bold">The Headline Hub</h1>
            <h2 className='text-gray-500 py-3'>Journalism Without Fear or Favour</h2>
            <h3 className='text-gray-600'><b>{formattedDate}</b></h3>
        </div>
    )
}

export default Header