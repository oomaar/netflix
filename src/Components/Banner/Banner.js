import React from 'react';
import "./styles/Banner.css";

const Banner = () => {
    const truncate = (string, n) => string?.length > n ? string.substr(0, n - 1) + '...' : string;
    
    return (
        <header className="banner" style={{
            background: `url('/images/misc/homebg.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center center"
        }}>
            <div className="banner__container">
                <h1 className="banner__title">MovieName</h1>
                <div className="banner__buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                </div>
                <h1 className="banner__description">This is a test Description
                {truncate(`This is a test DescriptionThis is a test DescriptionThis is a test Desc
                ription
                This is a test DescriptionThis is a test DescriptionThis is a test D
                escriptionT
                his is a test DescriptionThis is a test DescriptionThis is a test Descripti
                onThis is
                a test DescriptionThis is a test DescriptionThis is a test DescriptionThis is
                a test
                DescriptionThis is a test DescriptionThis is a test DescriptionThis is a test D
                escriptio
                nThis is a test DescriptionThis is a test DescriptionThis is a test Description
                This is a te
                st DescriptionThis is a test DescriptionThis is a test DescriptionThis is a test
                DescriptionThi
                s is a test DescriptionThis is a test DescriptionThis is a test Description
                This is a test Description`, 150)}</h1>
            </div>

            <div className="banner--fadeBottom" />
        </header>
    )
};

export default Banner;
