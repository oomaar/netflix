import { useEffect, useState } from 'react';
import "./styles/Row.css";
import axios from "../../helpers/axios";
import YouTube from 'react-youtube';
import movieTrailer from "movie-trailer";

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

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

    const opts = {
        height: "390px",
        widht: "100%",
        autoplay: 1
    }

    const handleClick = (movie) => {
        if(trailerUrl) {
            setTrailerUrl('');
        } else {
            movieTrailer(movie?.name || "")
            .then(url => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'));
            })
            .catch(error => console.log(error));
        }
    }

    return (
        <div className="row">
            <h1 className="row__title">{title}</h1>
            <div className="row__posters">
                {movies.map(movie => (
                    ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.poster_path)) && (
                        <div key={movie.id} className={`row__posterContainer ${isLargeRow && "row__posterLarge"}`}> 
                            <img
                                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                                onClick={() => handleClick(movie)}
                                src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                                alt={movie.name}
                            />
                            {!isLargeRow && <h1 className="row__posterTitle">{truncate(movie.title, 20)}</h1>}
                            {!isLargeRow && <p className="row__posterYear">({movie.release_date})</p>}
                        </div>
                    )))}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
};

export default Row;
