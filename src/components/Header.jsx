import myprofile from '../assets/media/m6.png'

const Header = () => {
  return (
    <header className="container m-auto   w-screen flex px-10 flex-row items-center justify-center  tracking-widest max-lg:flex-col max-lg:mt-10" >
      <div className='text-left space-y-10 max-lg:space-y-7  max-lg:text-center flex-4/5 max-lg:flex-1/2 '>

        <p className='text-2xl font-mono max-lg:hidden animate-slide-in-left '>
          <span className='text-[#468499] '>const</span>
          <span className='text-[#b9c20d]'> MyResume</span>
          {" = () =>{"}
          <br />
          <span className='text-[#9e2a9c] pl-12'>{`return (`}</span>
          </p>
        <p className='text-2xl font-mono pl-18 max-lg:pl-0 animate-slide-in-left [animation-delay:0.5s]'>
          <span className='text-[#305ec2] max-lg:hidden '>{"<span> "}</span>
          Hello, World! 
          <span className='text-[#305ec2] max-lg:hidden'>{" </span>"}</span>
          <br />
          <span className='text-[#305ec2] max-lg:hidden'>{"<span> "}</span>
          My name is 
          <span className='text-[#305ec2] max-lg:hidden'>{" </span>"}</span>
        </p>
        <h1 className='opacity-0 text-6xl font-bold pl-18 text-slate-800 max-md:text-5xl max-lg:pl-0 animate-fade-in [animation-delay:1.5s]  after:animate-bounce'>
          <span className='text-[#305ec2] text-2xl font-normal max-lg:hidden'>{"<h1>"}</span>
          Mohammad Momeni
          <span className='text-[#305ec2] text-2xl font-normal max-lg:hidden'>{"</h1>"}</span>
        </h1>      

        <p className='text-gray-500 pl-18 max-lg:pl-0 animate-fade-in [animation-delay:1.5s]'>Enthusiastic front-end developer with react.js and tailwindcss</p>

        <div className=' text-center justify-items-start flex flex-row gap-4 max-lg:justify-center pl-18 max-lg:pl-0 animate-fade-in [animation-delay:1.5s] '>
          <a className='p-5 w-40 font-semibold border-2 text-slate-800 border-slate-800  rounded-xl hover:bg-slate-800 hover:text-white duration-150' href="#about-me">About me</a>
          <a className='p-5 w-40 font-semibold border-2 bg-slate-800 text-white border-slate-800 rounded-xl hover:bg-white hover:text-black duration-150' href="#contact">Contact</a>
        </div>
      </div>
      <div className='items-center w-1/2 p-10 animate-slide-in-right max-lg:w-2/3 '>
        <img src={myprofile} alt="mohammad-momeni-profile" className="flex-1 hover:rotate-15 ease-in-out duration-500 select-none brightness-80 max-lg:w-full " />
      </div>
    </header>
  )
}


export default Header