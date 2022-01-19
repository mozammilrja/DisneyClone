import requests from "../utils/request"
import React, { useEffect } from "react"
import { useRouter } from "next/router"

function Navbar() {
    const router = useRouter();

    useEffect(() => {
        // window.scrollTo(200, 400);
    }, [])

    return (

        <div className="flex px-10 sm:px-20  py-3 text-[20px] whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide ">
            {Object.entries(requests).map(([key, { title, url }]) => (
                <h2 key={key}
                    onClick={() => router.push(`/?genre=${key}`)}
                    className=" last:pr-20 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:bg-blue-600">{title}</h2>
            ))}
            {/* <div className="absolute top-0 right-0 bg-gradient-to-l from-[#6202A] h-10 w-1/12 " /> */}
        </div>
    )
}

export default Navbar
