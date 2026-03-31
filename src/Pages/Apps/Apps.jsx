import React, { useEffect, useState } from "react";
import { AppsCard } from "../../Components/AppsCard/AppsCard";

export const Apps = () => {

   const [allApp, setAllApp] = useState([]);
  
    useEffect(() => {
      fetch("allApps.json")
        .then((res) => res.json())
        .then((data) => setAllApp(data));
    }, []);
  return (
    <div className='max-w-7xl mx-auto'>
      <div className='text-center mt-8 space-y-2 '>
        <h2 className='text-5xl font-bold'>Our All Applications</h2>
        <p>Explore All Trending Apps on the Market developed by us</p>
      </div>
      <div className='flex justify-between max-w-7xl mx-auto mt-10'>
        <div>
          <p className="text-xl font-semibold">(132) Apps Found</p>
        </div>
        <div className='flex items-center border border-gray-300 rounded-lg px-3 py-2 max-w-md'>
          <input
            type='text'
            placeholder='Search apps...'
            className='w-full outline-none'
          />
        </div>
      </div>
      {/* all apps  */}
      <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-6 mt-12 p-4'>
        {
          allApp.map((apps) => <AppsCard key={apps.id} apps={apps}></AppsCard>)
        }
      </div>

    </div>
  );
};
