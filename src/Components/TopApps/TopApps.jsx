import React from "react";

export const TopApps = ({ TopApp }) => {
  const { app_title, img, download_count, rating } = TopApp;
  return (
    <div className='card bg-base-100 shadow-sm'>
      <figure>
        <img className="h-70" src={img} alt='Shoes' />
      </figure>
      <div className='p-6'>
        <h2 className='card-title'>{app_title}</h2>
        <div className="flex justify-between">
            <p>{download_count}</p>
            <p>{rating}</p>
        </div>
      </div>
    </div>
  );
};
