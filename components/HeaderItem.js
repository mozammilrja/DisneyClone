const HeaderItem = ({title,Icon}) => {
    return (
        <div className="flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-white ">
            <Icon  className="h-8  group-hover:animate-bounce "/>
            <p className=" mt-3 opacity-0 group-hover:opacity-100 translate-widest  text-center "> {title}</p>
        </div>
    )
}

export default HeaderItem
