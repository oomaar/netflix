import React, { useRef, useState } from 'react';
import "./styles/Faq.css";

const Faq = ({ title, body }) => {
    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");
    const [setRotate, setRotateState] = useState("accordion__icon");

    const content = useRef(null);

    function toggleAccordion() {
        setActiveState(setActive === "" ? "active" : "");
        setHeightState(setActive === "active" ? "0px" : `${content.current.scrollHeight}px`);
        setRotateState(setActive === "active" ? "accordion__icon" : "accordion__icon rotate");
    }

    return (
        <div className="faq">
            <button
                className={`faq__header ${setActive}`}
                onClick={toggleAccordion}
            >
                <p className="faq__title">{title}</p>
                <img
                    className={`faq__icon ${setRotate}`}
                    src="/images/icons/add-slim.png"
                    alt="add"
                />
            </button>
            <div
                className="faq__content"
                ref={content}
                style={{ maxHeight: `${setHeight}` }}
            >
                <div
                    className="faq__text"
                    dangerouslySetInnerHTML={{ __html: body }}
                />
            </div>
        </div>
    )
};

export default Faq;
