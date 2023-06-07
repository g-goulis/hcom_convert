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
        <div id="equestion2" className="question_wrap ">
            <div className="white_wrap">
                <div className="qstn_wrap">
                    {showPopup
                        && (<Popup popupTitle={popupTitle} popupDescription={popupDescription} setShowPopup={setShowPopup} updateQuestion={setCurrentFrameIndex}/>)}
                    {questionWithSetters}
                    <button onClick={() => handleQuestionAnswered()}>Next Page</button>
                </div>
            </div>
        </div>
    );
};

export default QuestionFrame;