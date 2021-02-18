import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectToggleShow, setToggleShow } from '../../features/faqSlice';
import "./styles/Accordion.css"

const Accordion = () => {
    const toggleShow = useSelector(selectToggleShow);
    const dispatch = useDispatch();

    const handleToggleShow = () => {
        dispatch(setToggleShow({ value: true }));
    }

    return (
        <div className="accordion">

            <div className="accordion__faqs">
                <h1>Frequently Asked Questions</h1>

                <div className="accordion__item">
                    <div className="accordion__itemHeader" onClick={handleToggleShow}>
                        <h3>What is Netflix?</h3>
                        {/* plus and cross img */}
                        <img
                            className={`accordion__icon ${!toggleShow ? "faq__open" : "faq__close"}`}
                            src="/images/icons/add-slim.png"
                            alt="open"
                        />
                        <img
                            className={`accordion__icon ${toggleShow ? "faq__open" : "faq__close"}`}
                            src="/images/icons/close-slim.png"
                            alt="close"
                        />
                    </div>

                    <div className="accordion__itemBody">
                        <h3>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!</h3>
                    </div>
                </div>

            </div>

        </div>
    )
};

export default Accordion;
