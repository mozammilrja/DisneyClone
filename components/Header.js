import Image from "next/image";
import React, { useState } from "react"
import HeaderItem from './HeaderItem'
import Navbar from './Navbar'

import {
  HomeIcon,
  BadgeCheckIcon,
  LightBulbIcon, SearchIcon, UserIcon, CollectionIcon
} from '@heroicons/react/outline'
import { signIn, signOut, useSession, getSession } from "next-auth/react";
import { useRouter } from "next/router";
import Search from "./Search";



function Header() {
  const { data: session, status } = useSession()
  const loading = status === "loading"
  const router = useRouter();
  const [searchText, setSearchText] = useState("");

  return (
    <header className="sticky bg-[#040714] top-0 z-[1000] items-center px-10 flex h-[106px]">
      <Image
        src="/images/logo.svg"
        alt=""
        width={80}
        height={80}
        className="cursor-pointer"
        onClick={() => router.push("/")}
      />

      {
        session && (
          <div className="flex flex-col justify-between sm:flex-row  items-center">
            <div className="flex flex-grow justify-evenly max-w-2xl mt-9 "
              onClick={() => router.push("/")}
            >
              <HeaderItem title="Home" Icon={HomeIcon} />
              <HeaderItem title="Trending" Icon={LightBulbIcon} />
              <HeaderItem title="Verified" Icon={BadgeCheckIcon} />
              <HeaderItem title="Collection" Icon={CollectionIcon} />
              {/* <HeaderItem title="Search" Icon={SearchIcon} /> */}
              <HeaderItem title="Account" Icon={UserIcon} />
            </div>
            <div className="mt-3 flex justify-center items-center  ">            
            <input 
            className="shadow rounded  py-1.5 px-3 text-gray-900 leading-tight focus:outline-none" placeholder="Search"
            onChange={(e) => setSearchText(e.target.value)}
            type="text"/>
            <button>
                    <SearchIcon className="h-8 ml-2" />
                </button>
                </div>
          </div>
        )
      }

      {
        !session ? (
          <button className="ml-auto uppercase border px-4 py-1 rounded font-medium tracking-wide hover:bg-white hover:text-black transition duration-200 "
            onClick={() => signIn()}
          >Login</button>
        ) : (
          <div className="ml-auto flex justify-between">
            <h1 className="text-white pt-3 mr-2 " >{session.user.name}</h1>
            <img
              src={session.user.image}
              className="ml-auto h-12 w-12 rounded-full object-cover cursor-pointer"
              onClick={signOut} alt=""
            />
          </div>
        )
      }

    </header>
  )
}

export default Header

