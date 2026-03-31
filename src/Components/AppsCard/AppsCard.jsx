import React from 'react'
import { Link } from 'react-router';

export const AppsCard = ({apps}) => {
    const {id, app_title, img, download_count, rating } = apps;
  return (
    <Link to={`/appdetails/${id}`}>
    <div  className='card bg-base-100 shadow-sm'>
      <figure>
        <img className="h-70" src={img} alt='Shoes' />
      </figure>
      <div className='p-6'>
        <h2 className='text-2xl font-medium'>{app_title}</h2>
        <div className="flex justify-between mt-2">
            <p className="btn bg-green-200">{download_count}</p>
            <p className="btn bg-orange-200">{rating}</p>
        </div>
      </div>
    </div>
    </Link>
  )
}
