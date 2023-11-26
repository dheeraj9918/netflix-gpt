import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {addTrailerVideo} from "../utils/moviesSlice";
import {options} from "../utils/constants";

const useMoviesTrailer = (moviesId) => {
    const dispatch = useDispatch();
    const getVideoBackground = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/"+ moviesId +"/videos?language=en-US", options);
        const json = await data.json();
        // console.log(json);
        const filterData = json.results.filter((video) => video.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0];
        // console.log(trailer);
        dispatch(addTrailerVideo(trailer));

    }
    useEffect(() => {
        getVideoBackground();
    }, []);

}

export default useMoviesTrailer;