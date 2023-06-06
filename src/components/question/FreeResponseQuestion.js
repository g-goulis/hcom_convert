import React from 'react';
import QuestionContainer from "./QuestionContainer";

const FreeResponseQuestion = ({question : {questionText, answers}}) => {
    // Component logic and rendering for free response questions
    return (
        <QuestionContainer>
            <span className="question"> {questionText} </span>
            <div className="ans_option">
                <input type="text" />
            </div>
        </QuestionContainer>
    );
};

export default FreeResponseQuestion;