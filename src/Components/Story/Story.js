import React from 'react';
import "./styles/Story.css";

const Story = () => {
    return (
        <div className="story">
            <div className="story__card">
                <div className="story__feature">
                    <h1>Enjoy on your TV.</h1>
                    <h2>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h2>
                </div>
                <div className="story__image">
                    <img className="story__img" src="/images/story/tv.png" alt="story1" />
                    <div className="story__video">
                        <video className="story__vid" autoPlay playsInline muted loop>
                            <source src="/images/story/video-1.m4v" type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>

            <div className="story__card flip__story">
                <div className="story__feature flip__feature">
                    <h1>Download your shows to watch offline.</h1>
                    <h2>Save your favorites easily and always have something to watch.</h2>
                </div>
                <div className="story__image flip__image">
                    <img className="story__img" src="/images/story/story-2.jpg" alt="story2" />

                    <div className="storyTwo__animation">
                        <div className="animation__image">
                            <img className="animation__img" src="/images/story/boxshot.png" alt="BoxShot" />
                        </div>
                        <div className="animation__feature">
                            <div className="animation__featureTitle">Stranger Things</div>
                            <div className="animation__featureSubTitle">Downloading...</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="story__card">
                <div className="story__feature">
                    <h1>Watch everywhere.</h1>
                    <h2>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</h2>
                </div>
                <div className="story__image">
                    <img className="story__img" src="/images/story/mac.png" alt="story3" />
                    <div className="story__video video3">
                        <video className="story__vid vid3" autoPlay playsInline muted loop>
                            <source src="/images/story/video-3.m4v" type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Story;
