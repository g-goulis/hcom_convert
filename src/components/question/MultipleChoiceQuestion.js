import {useState} from 'react';
import QuestionContainer from "./QuestionContainer";

const MultipleChoiceQuestion = ({question, options, index, setSelectedOption, setIsCorrect}) => {

    const name = "qstn" + index;

    const onChangeValue = (event) => {
        // pass the question update up to the frame which handles the popups
        setIsCorrect(event.target.value === "1" ? true : false);
        setSelectedOption(event.target.text);
        // handleQuestionAnswered(event.target.value, event.target.text);
    };


    return (
        <div>
            <span className="question"> {question} </span>
            <div className="ans_option">
                {options.map( (option, index) => {

                    return (
                        <div class="ans_span" onChange={onChangeValue}>
                            <label>
                                <input type="radio" name={name} id={name + "_ans" + index} value={option.value}/>
                                <span className="label_text">
                                      {option.text}
                                  </span>
                            </label>
                        </div>
                    )}
                )}
            </div>
        </div>
    );
};

export default MultipleChoiceQuestion;