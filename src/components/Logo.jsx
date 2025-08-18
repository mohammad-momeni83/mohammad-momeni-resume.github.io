import MyLogo from '../assets/media/Logo.png'

const Logo = () =>{
    return(
        <div className='flex items-center text-2xl space-x-3 text-gray-300 '>
            <img onClick={() => window.scrollTo(0, 0)} className="w-15 h-15 rounded-full hover:scale-110 delay-100 duration-300 ease-in-out border-2 border-slate-600" src={MyLogo} alt="Logo" />
            <p className='text-[#ecf0ff] capitalize font-semibold max-lg:text-sm whitespace-nowrap'>.software engineer</p>
        </div>
    )

}

export default Logo