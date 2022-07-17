import React from 'react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  

export const Main = () => {

  const notify = () => {
    toast('🔮 Building in progress', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  }

  let personalIG = 'https://www.instagram.com/Haris.one';
  let linkedin = 'https://in.linkedin.com/in/haris-kumar-5b1894220'
  let twitter = 'https://www.twitter.com/Haris_ETH';
  let portfolio = '';
  let pfp = 'https://pbs.twimg.com/profile_images/1532907455986155520/9xPXuMQR_400x400.jpg'

  return (
    <div className='min-h-screen w-full bg-yellow-400 flex flex-col justify-equal items-center py-8 md:py-10'>
      <ToastContainer
        position="top-right"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      
      <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-white border-4 pfp-styler border-black">
        <img src={pfp} alt="Profile Picture of Haris" className='rounded-full w-full h-full' />
      </div>

      <div className="names flex flex-col mt-4 ">
        <h1 className='text-black font-semibold text-2xl tracking-tight font-clash text-center'>Haris Kumar</h1>
        <h6 className=' font-medium text-lg font-clash'>WebDev && Physicist</h6>

      </div>

      <div className="links w-full flex flex-col justify-center items-center font-clash gap-10 mt-8 mb-5 sm:mb-0 md:w-3/4 px-6">
        <a href='https://www.twitter.com/Haris_ETH' target={'_blank'} className="twitter w-full bg-blue-500 box-styler md:w-9/12 brutal-btn">
          <h2 className='font-medium text-custom sm:text-xl'>Follow me on Twitter</h2>
          <h4>🐦</h4>

        </a >

        <a href='https://www.instagram.com/Four39_Codes' target={'_blank'} className="brutal-btn box-styler w-full md:w-9/12  bg-red-500 " >
          <h2 className='font-medium text-custom sm:text-xl'>Visit my IG Page </h2>
          <h4>🐦</h4>

        </a>

        <button className="brutal-btn box-styler w-full  md:w-9/12 bg-purple-500"  >
          <h2 className='font-medium text-custom sm:text-xl'>My Github</h2>
          <h4>🐦</h4>

        </button>

        <a className="brutal-btn box-styler bg-yellow-300 w-full  md:w-9/12" href='https://www.linkedin.com/in/haris-kumar-5b1894220'>
          <h2 className='font-medium text-custom sm:text-xl'>Connect on LinkedIn</h2>
          <h4>🐦</h4>

        </a>

        <a href='https://www.haris.one' className="brutal-btn box-styler bg-green-500 w-full md:w-9/12"  >
          <h2 className='font-medium text-custom sm:text-xl'>My Portfolio</h2>
          <h4>🐦</h4>

        </a>


      </div>

    </div>
  )
}
