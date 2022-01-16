import Image from "next/image"
import {
  HomeIcon,
  SearchIcon,
  PlusIcon,
  StarIcon,
} from '@heroicons/react/solid'
import { signIn, signOut, useSession, getSession } from "next-auth/react";
import { useRouter } from "next/router";

function Header() {
  const { data: session, status } = useSession()
  const loading = status === "loading"
  const router = useRouter();

  // if (status === "authenticated") {
  //   return <p>Signed in as</p>
  // }
  return (
    <header className="sticky bg-[#040714] top-0 z-[1000] items-center px-10 flex h-[72px]  ">
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
          <div className="hidden ml-10 md:flex items-center space-x-6">
            <a href="/" className="header-link group">
              <HomeIcon className="h-4" />
              <span className="span">Home</span>
            </a>
            <a href="/" className="header-link group">
              <SearchIcon className="h-4" />
              <span className="span">Search</span>
            </a>
            <a className="header-link group">
              <PlusIcon className="h-4" />
              <span className="span">WatchList</span>
            </a>
            <a className="header-link group">
              <StarIcon className="h-4" />
              <span className="span">Originals</span>
            </a>
            <a className="header-link group">
            <img src="/images/movie-icon.svg" alt="" className="h-5" />
            <span href="movie" className="span">Movies</span>
          </a>
          <a className="header-link group">
            <img src="/images/series-icon.svg" alt="" className="h-5" />
            <span className="span">Series</span>
          </a>
          </div>
        )
      }

      {
        !session ? (
          <button className="ml-auto uppercase border px-4 py-1 rounded font-medium tracking-wide hover:bg-white hover:text-black transition duration-200 "
            onClick={() => signIn()}
          >Login</button>
        ) : (
          <img
            src={session.user.image}
            className="ml-auto h-12 w-12 rounded-full object-cover cursor-pointer"
            onClick={signOut}
          />
        )
      }

    </header>
  )
}

export default Header

