import React from "react";
import error from "../../assets/error-404.png";
import { useNavigate } from "react-router";

export const Errorpage = () => {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col justify-center items-center '>
      <img src={error} alt='' />
     <div className="space-y-2">
       <h1 className='text-4xl'>Opps!!!!</h1>
      <p>Page Not Found...</p>
      <button className='btn btn-primary' onClick={() => navigate("/")}>
        Go Home
      </button>
     </div>
    </div>
  );
};
