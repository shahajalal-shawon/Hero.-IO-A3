import React from "react";

export const Feature = () => {
  return (
    <div className='bg-[#9F62F2] text-white py-20'>
      <div className='mb-16'>
        <h2 className='lg:text-5xl text-2xl font-bold text-center'>
          Trusted by Millions, Built for You
        </h2>
      </div>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 lg:px-72 gap-16 text-center'>
        <div className='space-y-3'>
          <p>Total Download</p>
          <h2 className='text-6xl font-bold'>29.6M</h2>
          <p>21% More than Last Months</p>
        </div>
        <div className='space-y-3'>
          <p>Total Download</p>
          <h2 className='text-6xl font-bold'>906K</h2>
          <p>46% More than Last Months</p>
        </div>
        <div className='space-y-3'>
          <p>Total Download</p>
          <h2 className='text-6xl font-bold'>132+</h2>
          <p>31 More Will Launch</p>
        </div>
      </div>
    </div>
  );
};
