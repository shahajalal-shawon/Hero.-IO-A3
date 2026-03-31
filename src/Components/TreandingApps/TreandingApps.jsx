import React, { useEffect, useState } from "react";
import { TopApps } from "../TopApps/TopApps";
import { useNavigate } from "react-router";

export const TreandingApps = () => {
   const navigate = useNavigate();
  const [topApp, setTopApp] = useState([]);

  useEffect(() => {
    fetch("topApp.json")
      .then((res) => res.json())
      .then((data) => setTopApp(data));
  }, []);

  return (
    <div className='max-w-7xl mx-auto'>
      <div className='text-center mt-16 space-y-2 '>
        <h2 className='text-5xl font-bold'>Trending Apps</h2>
        <p>Explore All Trending Apps on the Market developed by us</p>
      </div>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-6 mt-12 p-4'>
        {topApp.map((TopApp) => (
          <TopApps key={topApp.id} TopApp={TopApp}></TopApps>
        ))}
      </div>
      <div className='flex justify-center mt-10'>
        <button onClick={() => navigate("/apps")} className='bg-[#9F62F2] text-white px-4 py-2 rounded'>
          Show All
        </button>
      </div>
    </div>
  );
};
