// FrameManager.js
import React, { useState } from 'react';
import QuestionFrame from './question/QuestionFrame';
import MultipleChoiceQuestion from './question/MultipleChoiceQuestion';
import FreeResponseQuestion from './question/FreeResponseQuestion';
import VideoPlayer from "./VideoPlayer";

import EnglishQuestions from "../data/EnglishData.json"
import Popup from "./question/Popup";

const FrameManager = () => {
    const [currentFrameIndex, setCurrentFrameIndex] = useState(0);
    const [responses, setResponses] = useState([]);

    const frames = [
        {
            type: 'video',
        }, ...EnglishQuestions
    ];

    // const handleNextFrame = (isCorrect) => {
    //     setCurrentFrameIndex((prevIndex) => prevIndex + 1);
    //     setResponses((prevResponses) => [...prevResponses, response]);
    // };

    const currentFrame = frames[currentFrameIndex];

    const renderFrame = () => {
        if (currentFrame) {
            if (currentFrame.type === 'multiple-choice') {
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
                        <button onClick={() => setCurrentFrameIndex((prevIndex) => prevIndex + 1)}>Video Next</button>
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
