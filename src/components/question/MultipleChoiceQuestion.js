import React from 'react';
import QuestionContainer from "./QuestionContainer";

const MultipleChoiceQuestion = ({question, options, onNext}) => {
    // Component logic and rendering for free response questions
    return (
        <QuestionContainer>
            <span className="question"> {question} </span>
            <div className="ans_option">
                {options.map( (option) => {
                    return (
                        <div class="ans_span">
                            <label>
                                <input type="radio" name="qstn2" value="0" />
                                <span className="label_text">
                                      {option.text}
                                  </span>
                            </label>
                        </div>
                    )}
                )}
            </div>
        </QuestionContainer>
    );
};

export default MultipleChoiceQuestion;