import Img from '../assets/media/About-model.png'
import Info from '../assets/icon/info-2.png'
import { useState } from "react";


const Information=(props)=>{    
    return(
        <div className='flex items-center justify-between my-5 bg-gray-200 w-full rounded-r-full max-lg:w-50'>
            <span className='bg-slate-800 font-semibold text-[#ecf0ff] p-2 pr-3 rounded-r-full max-lg:text-xs'>{props.label}</span>
            <span className='pr-5 font-semibold text-md max-lg:text-xs'>{props.value}</span>
        </div>
    )
}

var date = new Date();
const MyAge=()=>{
    return date.getFullYear() - 2005;
}



const Aboutme=()=>{
    return(

        <section className="flex flex-row mx-auto items-start px-10 gap-x-5 max-lg:flex-col">
            <div className='grid grid-cols-2 gap-x-5 w-3/8 max-lg:w-full'>
                <Information label="Resident" value="Iran" />
                <Information label="Location" value="Tehran, Iran" />
                <Information label="Age" value={MyAge()} />
                <Information label="Language" value="Persian, English" />
            </div>

            <div className='flex flex-row flex-1  '>
                <div className={'text-[#ecf0ff]  bg-slate-800 p-10 rounded-3xl text-xl tracking-wide space-y-10 max-lg:space-y-5'}>
                <p className='text-2xl font-bold flex bg-slate-700 p-5 items-center rounded-xl justify-center text-center max-lg:text-sm '>It is my pleasure that you are viewing my resume</p>
                <p className='max-lg:text-sm'>I’m Mohammad Momeni, a passionate Web Developer and 3D Mechanical Modeler with 2 years of hands-on experience in SolidWorks, especially in designing and modeling belt conveyors and industrial systems.</p>
                <p className='max-lg:text-sm'>I’m also skilled in JavaScript, React.js, TailwindCSS, jQuery, HTML/CSS, with practical experience in building interactive and dynamic web applications. Additionally, I have experience in Network Support, giving me broader technical insight into IT infrastructures.</p>
               </div>
            </div>
        </section>
    )
}

export default Aboutme