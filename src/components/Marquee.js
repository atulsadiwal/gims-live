import logo from './logo.svg';
import "./css/style.css"
import Marquee from 'react-fast-marquee';

function Marquee() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-[#181818] text-neutral-200">
      <div className='w-[50%] flex flex-col'>
        <div className='flex space-y-2 flex-col text-center mb-14'>
          <span className='text-5xl font-bold'>
            Marquee Effect
          </span>
        </div>
        <Marquee autoFill pauseOnClick>
          <div className='bg-[#202020] m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer text-sky-400'>
            Tailwindcss
          </div>
          <div className='bg-[#202020] m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer text-purple-700'>
            Bootstrap
          </div>
          <div className='bg-[#202020] m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer text-orange-700'>
            HTML
          </div>
          <div className='bg-[#202020] m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer text-sky-500'>
            CSS
          </div>
          <div className='bg-[#202020] m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer text-yellow-500'>
            Javascript
          </div>
          <div className='bg-[#202020] m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer text-green-500'>
            Node JS
          </div>
        </Marquee>
        
      </div>
    </div>
  );
}

export default Marquee;