import bannar from "../../assets/hero.png";
import play from "../../assets/play-store.jpg";
import app from "../../assets/App_Store.png";
import { Link } from "react-router";

export const Bannar = () => {
  return (
    <div className=' bg-base-200 '>
      <div className='text-center space-y-6 pt-16'>
        <h2 className='text-6xl font-bold px-20'>
          We Build <br />
          <span className='text-[#9F62F2]'>Productive</span> Apps
        </h2>
        <p>
          At HERO.IO , we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. <br />
          Our goal is to turn your ideas into digital experiences that truly
          make an impact.
        </p>
        <div className='space-x-6'>
          <a
            className='btn'
            href='https://play.google.com/store/games?hl=en&pli=1'
          >
            {" "}
            <img className='h-6' src={play} />
            Google Play
          </a>

          <a className='btn' href='https://www.apple.com/app-store/'>
            {" "}
            <img className='h-6' src={app} />
            App Store
          </a>
        </div>
      </div>
      <div className='mt-10'>
        <img className='mx-auto' src={bannar} alt='' />
      </div>
    </div>
  );
};
