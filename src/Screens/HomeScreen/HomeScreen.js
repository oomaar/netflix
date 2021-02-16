import React from 'react';
import { Banner, Navbar, Row } from '../../Components';
import requests from '../../helpers/requests';
import "./styles/HomeScreen.css";

const HomeScreen = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Row title="Trending" fetchUrl={requests.fetchTrending} />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
            <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
        </div>
    )
};

export default HomeScreen;
