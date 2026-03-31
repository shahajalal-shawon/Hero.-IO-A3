import React from "react";
import { useLoaderData, useParams } from "react-router";

export const AppDetails = () => {
  const details = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const app = details.find((app) => app.id === idInt);
  //   console.log(app);
  return (
    <div className='max-w-7xl mx-auto mt-10'>
      <div className='lg:flex gap-10'>
        <img className='h-60 flex items-center' src={app.img} alt='' />
        <div>
          <h2 className='text-2xl font-semibold'>{app.app_title}</h2>
          <div className='flex justify-between mt-2'>
            <p className='btn bg-green-200'>{app.download_count}</p>
            <p className='btn bg-orange-200'>{app.rating}</p>
          </div>
        </div>
      </div>
      <div>
        <p className="text-xl font-semibold">Description</p>
        <p>{app.description}</p>
      </div>
    </div>
  );
};
