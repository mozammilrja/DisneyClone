import Image from "next/image";
import React,{useEffect} from "react"
import { useRouter } from "next/router";
import { ThumbDownIcon } from "@heroicons/react/solid";

function MovieThumbnail({ result }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  const router = useRouter();

  useEffect(() => {
    window.scroll(200, 550);
    // eslint-disable-next-line
}, []);


  return (
    <div  
    // ref={ref}
      onClick={() => router.push(`/movie/${result.id}`)}
    className="group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50 ">
        <Image
            src={
                `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
                `${BASE_URL}${result.poster_path}`
            }
            width={330}
            height={210}
            objectFit="cover"
            className="rounded-lg " alt=""
        />
        <div className="p-2">
            <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold "> {result.title || result.original_name} </h2>
            <p className=" truncate max-w-md "> {result.overview}</p>
            <p className="flex items-center opacity-0 group-hover:opacity-100 ">
                {result.media_type && `${result.media_type}`} {result.release_date || result.first_air_date}
                <ThumbDownIcon className="h-5 mx-2" />{result.vote_count}
            </p>

        </div>
    </div>
  );
}

export default MovieThumbnail;
