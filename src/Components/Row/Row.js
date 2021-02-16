import { useEffect, useState } from 'react';
import "./styles/Row.css";
import axios from "../../helpers/axios";

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
    const [movies, setMovies] = useState([]);

    const base_url = "https://image.tmdb.org/t/p/original/";

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        };

        fetchData();
    }, [fetchUrl]);

    const truncate = (string, n) => string?.length > n ? string.substr(0, n - 1) + '...' : string;

    console.log(movies);

    return (
        <div className="row">
            <h1 className="row__title">{title}</h1>
            <div className="row__posters">
                {movies.map(movie => (
                    ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.poster_path)) && (
                        <div key={movie.id} className={`row__posterContainer ${isLargeRow && "row__posterLarge"}`}> 
                            <img
                                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                                src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                                alt={movie.name}
                            />
                            <h1 className="row__posterTitle">{truncate(movie.title, 20)}</h1>
                            <p className="row__posterYear">({movie.release_date})</p>
                        </div>
                    )))}
            </div>
        </div>
    )
};

export default Row;
