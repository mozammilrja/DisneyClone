import Thumbnail from "./Thumbnail";
import FlipMove from 'react-flip-move';


const Results = ({ results}) => {

    return (
        <>
        <FlipMove className=" px-7 my-10 sm:grid md:grid-cols-2 lg:grid-cols-4 3xl:flex flex-wrap justify-center ">
            {results.map((result) =>(
                <Thumbnail key={result.id} result={result} />
            ))}
        </FlipMove>

          </>
    )
}

export default Results
