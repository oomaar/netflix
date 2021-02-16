import { useEffect, useState } from 'react';
import "./styles/Banner.css";
import axios from "../../helpers/axios";
import requests from "../../helpers/requests";

const Banner = () => {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ]);
        }

        fetchData();
    }, []);

    const truncate = (string, n) => string?.length > n ? string.substr(0, n - 1) + '...' : string;

    return (
        <header className="banner" style={{
            background: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
            backgroundPosition: "center center"
        }} >
            {/* <img className="banner" src={`https://image.tmdb.org/t/p/original/${movie ?. backdrop_path}`} alt=""/> */}
            <div className="banner__container">
                <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
                <h1 className="banner__description">{truncate(movie?.overview, 150)}</h1>
                <div className="banner__buttons">
                    <button className="banner_button play">
                        <img className="banner_buttonIcon" src="/images/icons/play.png" alt="Play Button" />
                        Play
                    </button>
                    <button className="banner_button">
                        <img className="banner_buttonIcon" src="/images/icons/info.png" alt="info Button" />
                        More info
                    </button>
                </div>
            </div>

            <div className="banner--fadeBottom" />
        </header>
    )
};

export default Banner;


