import React from 'react';
import Collapse from "../components/Collapse"
import Waypoint from '../components/Waypoint';
import { FAQ } from "../data/Faq";


function FaqDispaly({ element }) {
    return (
        <>
            {/* <GradientImage title="FAQs" /> */}
            <Waypoint element={element} />
            <div className="container mt-5">
                {FAQ.map((eachFaq) =>
                    <div key={eachFaq.id} className="mb-4">
                        <h4>{eachFaq.title}</h4>
                        {eachFaq.questions.map((eachQuestion) => <Collapse
                            key={eachQuestion.id}
                            id={`unique${eachQuestion.id + 1}`}
                            question={eachQuestion.question}
                            answer={eachQuestion.answer}
                        />)}
                    </div>
                )}
            </div>
        </>
    );
}

export default FaqDispaly;