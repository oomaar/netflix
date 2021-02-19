import React from 'react';
import { Faq, OptionForm } from '..';
import "./styles/Accordion.css";
import faqsData from "../../data/faqsData.json";

const Accordion = () => {
    return (
        <div className="accordion">
            <div className="accordion__faqs">
                <h1>Frequently Asked Questions</h1>
                <div className="accordion__container">
                    {faqsData.map(item => (
                        <Faq
                            key={item.id}
                            title={item.header}
                            body={item.body}
                        />
                    ))}
                </div>
            <OptionForm />
            </div>

        </div>
    )
};

export default Accordion;
