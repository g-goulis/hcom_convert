import React, {cloneElement, useState} from 'react';
import Popup from "./Popup";

const QuestionFrame = ({setCurrentFrameIndex, children}) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [isCorrect, setIsCorrect] = useState(false);

    const [showPopup, setShowPopup] = useState(false);
    const [popupTitle, setPopupTitle] = useState("");
    const [popupDescription, setPopupDescription] = useState("");

    const handleQuestionAnswered = () => {
        if(isCorrect) {
            setShowPopup(true);
            setPopupTitle("Correct");
            setPopupDescription("That's right! You selected the correct response.");
        } else {
            setShowPopup(true);
            setPopupTitle("Incorrect");
            setPopupDescription("That is incorrect. Please try again.");
        }
        // setResponses((prevResponses) => [...prevResponses, response]);
    };

    const questionWithSetters = React.Children.map(children, (child) => {
        // Clone the child element and add additional props
        return cloneElement(child, { setIsCorrect: setIsCorrect, setSelectedOption: setSelectedOption });
    });



    return (
        <div id="equestion2" className="question_wrap">
            <div className="white_wrap">
                <div className="qstn_wrap">
                    {showPopup
                        && (<Popup popupTitle={popupTitle} popupDescription={popupDescription} setShowPopup={setShowPopup} updateQuestion={setCurrentFrameIndex}/>)}
                    {questionWithSetters}
                </div>
            </div>
            <div className="com_logo" />
            <div className="btn-wrap">
                <input type="button" name="submit" className="en-submit-btn" value="SUBMIT/ENVIAR" onClick={() => handleQuestionAnswered()} />
            </div>
        </div>
    );
};

export default QuestionFrame;