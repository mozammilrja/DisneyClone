import SearchThumbnail from "./SearchThumbnail";
import React, { useState, useEffect } from "react"
import { SearchIcon, } from '@heroicons/react/outline'
import axios from "axios";
import FlipMove from 'react-flip-move';
import CustomPagination from "./CustomPagination";


function Search() {
    const [type, setType] = useState(0);
    const [searchText, setSearchText] = useState("");
    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    const [numOfPages, setNumOfPages] = useState();

    const fetchSearch = async () => {
        try {
            const { data } = await axios.get(
                `https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=07ed9f845a6cd3911548b0b45b8f182e&language=en-US&query=${searchText}&page=${page}&include_adult=true`

            );
            setContent(data.results);
            setNumOfPages(data.total_pages);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        window.scroll(0, 550);
        fetchSearch();
        // eslint-disable-next-line
    }, [type, page]);
    return (
        <>
            <div className="mt-5 flex justify-center items-center  ">
                <input
                    onChange={(e) => setSearchText(e.target.value)}
                    className="shadow appearance-none border rounded  py-1.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Search"
                />
                <button onClick={fetchSearch}>
                    <SearchIcon className="h-8 ml-2" />
                </button>
            </div>
           
            <FlipMove className=" px-7 my-10 sm:grid md:grid-cols-2 lg:grid-cols-4 3xl:flex flex-wrap justify-center ">
            {content.map((result) =>(
                <SearchThumbnail key={result.id} result={result} />
            ))}
        </FlipMove>
        {numOfPages > 1 && (
        <CustomPagination setPage={setPage} numOfPages={numOfPages} />
      )}
        </>
    );
}

export default Search;
