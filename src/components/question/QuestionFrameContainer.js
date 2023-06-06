import React from 'react';

const QuestionContainer = (props) => {
    return (
        <div id="equestion2" className="question_wrap ">
            <div className="white_wrap">
                <div className="qstn_wrap">
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export default QuestionContainer;