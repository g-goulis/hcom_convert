import React from 'react';

//((prevIndex) => prevIndex + 1);

const TrueFalseQuestion = ({popupTitle, popupDescription, setShowPopup, updateQuestion}) => {
    const handleContinue = () => {
        setShowPopup(false);
        if(popupTitle === "Correct"){
            updateQuestion((prevIndex) => prevIndex + 1);
        }
    };

    return (
        <div className="popwrap">
            <div className="popcontent">
                <div className="modal">
                    <span className="modal_heading">{popupTitle}</span>
                    <div className="modal_content">
                        {popupDescription}
                    </div>
                    <div className="modal-btns">
                        <a onClick={handleContinue} className="btn ok-btn continue-popup">Continue</a>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default TrueFalseQuestion;