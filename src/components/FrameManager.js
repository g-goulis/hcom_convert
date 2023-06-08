// FrameManager.js
import React, { useState } from 'react';
import QuestionFrame from './question/QuestionFrame';
import MultipleChoiceQuestion from './question/MultipleChoiceQuestion';
import FreeResponseQuestion from './question/FreeResponseQuestion';
import VideoPlayer from "./VideoPlayer";

import EnglishQuestions from "../data/EnglishData.json"
import PDFViewer from "./PDFViewer";

const FrameManager = () => {
    const [currentFrameIndex, setCurrentFrameIndex] = useState(0);
    const [responses, setResponses] = useState([]);

    const frames = [
        {
            type: 'language-select'
        },
        {
            type: 'video',
        },
        // ...EnglishQuestions,
        {
            type: 'pdf',
            url: process.env.PUBLIC_URL + "/HEBSample.pdf"
        },
        {
            type: 'completed'
        }
    ];

    // const handleNextFrame = (isCorrect) => {
    //     setCurrentFrameIndex((prevIndex) => prevIndex + 1);
    //     setResponses((prevResponses) => [...prevResponses, response]);
    // };

    const currentFrame = frames[currentFrameIndex];

    const renderFrame = () => {
        if (currentFrame) {
            if (currentFrame.type === 'language-select') {
                return (
                    <div>
                        <div className="choose_lang_wrap">
                            <div className="lang_overlay"></div>
                            <div className="lcenter">
                                <h3>Please choose your language / Por favor, selections su idioma</h3>
                                <div className="lang_btns">
                                    <a onClick={() => setCurrentFrameIndex((prevIndex) => prevIndex + 1)} className="lbtns eng_btn">English</a>
                                    <a onClick={() => setCurrentFrameIndex((prevIndex) => prevIndex + 1)} className="lbtns spanish_btn">Espanol</a>
                                </div>
                            </div>
                        </div>
                        <div className="com_logo width100">
                            <div className="com-logo-img ">
                                <img src={process.env.PUBLIC_URL + "/heb-counts-on-me-logo.png"} alt="HEB Count on Me Logo"/>
                            </div>
                            <div className="btns_next_logo eng_ver">
                                <a href="javascript:void(0);" className="next_btn"><span>Next</span></a>
                            </div>
                            <div className="btns_next_logo span_ver">
                                <a href="javascript:void(0);" className="next_btn"><span>Siguiente</span></a>
                            </div>
                        </div>
                    </div>
                );
            } else if (currentFrame.type === 'multiple-choice') {
                return (
                    <QuestionFrame setCurrentFrameIndex={setCurrentFrameIndex}>
                        <MultipleChoiceQuestion
                            question={currentFrame.question}
                            options={currentFrame.options}
                            index={currentFrameIndex}
                        />
                    </QuestionFrame>
                );
            } else if (currentFrame.type === 'free-response') {
                return (
                    <QuestionFrame>
                        <FreeResponseQuestion
                            question={currentFrame.question}
                        />
                    </QuestionFrame>
                );
            } else if (currentFrame.type === 'video') {
                return (
                    <div>
                        <VideoPlayer />
                        <div className="com_logo width100">
                            <div className="com-logo-img ">
                                <img src={process.env.PUBLIC_URL + "/heb-counts-on-me-logo.png"} alt="HEB Count on Me Logo"/>
                            </div>
                            <div className="btns_next_logo eng_ver">
                                <a href="javascript:void(0);" className="next_btn"><span>Next</span></a>
                            </div>
                            <div className="btns_next_logo span_ver">
                                <a href="javascript:void(0);" className="next_btn"><span>Siguiente</span></a>
                            </div>
                        </div>
                        <button onClick={() => setCurrentFrameIndex((prevIndex) => prevIndex + 1)}>Video Next</button>
                    </div>
                );
            } else if (currentFrame.type === 'pdf') {
                return (
                    <PDFViewer url={process.env.PUBLIC_URL + "/HEBSample.pdf"}/>
                )
            } else if (currentFrame.type === 'completed') {
                return (
                    <div className="thankyou_wrap ethanku_wrap">
                        <div className="thanks_text">
                            Thanks for your time, Partner!
                        </div>
                        <div className="t_msg_wrap">
                            <div className="t_msg">
                                Talk with your Manager if you have any questions about this material.
                            </div>
                            <div className="exit_course_btn">
                                <a href="javascript:void(0);" className="exit-btn">Exit Course</a>
                            </div>
                        </div>
                    </div>
                );
            }
        }

        return <p>End of frames</p>;
    };

    return (
        <div>
            {renderFrame()}
        </div>
    );
};

export default FrameManager;
