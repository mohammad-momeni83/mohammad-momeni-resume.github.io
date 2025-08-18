


const Divider = (props) => {
    return(
        <div id={props.id} className="flex w-full items-center rounded-full py-10 ">
            <div className="flex-1 border-b border-gray-300 "></div>
                <span className="text-slate-800 text-lg font-mono  leading-8 pl-8 pr-4 py-3">{props.title}</span>
                {/* <img src={props.icon} alt="" className="w-6 h-6 mr-8 " /> */}
            <div className="flex-1 border-b border-gray-300 "></div>
        </div>
    )
}

export default Divider