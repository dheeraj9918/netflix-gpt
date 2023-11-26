import { useDispatch } from "react-redux";
import { addPapularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { options } from "../utils/constants";

const usePapularMovies = () => {
    const dispatch = useDispatch();

    const getPapularMovies = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", options);
        const json = await data.json();
        dispatch(addPapularMovies(json.results))
        // console.log(json);
    }

    useEffect(() => {
        getPapularMovies();
    }, []);

}


export default usePapularMovies;