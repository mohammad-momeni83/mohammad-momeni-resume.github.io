import Logo from './Logo.jsx'
import { RiMenuFill } from "react-icons/ri";// import NavLink from 'react-router-dom'
import { useState } from 'react';


const Information=(props)=>{    
    return(
        <div className='flex items-center justify-between w-29/30 my-5 bg-gray-200 rounded-full '>
            <span className='bg-slate-800 font-semibold text-[#ecf0ff] p-2 pr-3 rounded-r-full ' >{props.label} </span>
            <span className='pr-5 font-semibold  '>{props.value}</span>
        </div>
    )
}





const NavLinks = ({visible})=>{
    return(
        <div className={`flex px-4 font-mono items-center h-full
        ${visible ? 'max-lg:absolute max-lg:top-full max-lg:left-0 max-lg:w-max max-lg:h-max max-lg:flex max-lg:flex-col max-lg:items-start max-lg:justify-start max-lg:bg-slate-800 max-lg:py-4 ' : 'max-lg:hidden'}`} id='nav-links'>
            <a href="#about" className='flex justify-start items-center text-[#ecf0ff] max-lg:w-full max-lg:pl-6 max-lg:py-2 hover:scale-110 duration-300 px-5 focus:bg-slate-600 h-full  rounded-f'><p>About</p></a>
            <a href="#skills" className='flex justify-start items-center text-[#ecf0ff] max-lg:w-full max-lg:pl-6 max-lg:py-2 hover:scale-110 duration-300 px-5 focus:bg-slate-600  h-full  rounded-f'><p>Skills</p></a>
            <a href="#experience" className='flex justify-start items-center text-[#ecf0ff] max-lg:w-full max-lg:pl-6 max-lg:py-2 hover:scale-110 duration-300 px-5 focus:bg-slate-600  h-full  rounded-f'><p>Experience</p></a>
            <a href="#education" className='flex justify-start items-center text-[#ecf0ff] max-lg:w-full max-lg:pl-6 max-lg:py-2 hover:scale-110 duration-300 px-5 focus:bg-slate-600  h-full  rounded-f'><p>Education</p></a>
            <a href="#licenses" className='flex justify-start items-center text-[#ecf0ff] max-lg:w-full max-lg:pl-6 max-lg:py-2 hover:scale-110 duration-300 px-5 focus:bg-slate-600 h-full   rounded-f'><p>Licenses & certifications</p></a>
        </div>
    )
}

const Navbar = ()=>{

    const [visible , setVisible] = useState(false);

    const toggleNav=()=>{
        setVisible(prev => !prev)
    }



    return(
        <nav className='flex px-10 bg-slate-800 sticky top-0 z-[20] w-screen h-20 items-center justify-between animate-fade-in '>
            <Logo />
            <NavLinks visible={visible} />
            <RiMenuFill 
            onClick={toggleNav} 
            className='w-10 h-10  hidden max-lg:block index-50 hover:cursor-pointer' 
            id='menu-icon' 
            style={{ color: '#ecf0ff' }} 
            />
        </nav>
    )
}

export default Navbar