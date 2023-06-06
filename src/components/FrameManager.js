// FrameManager.js
import React, { useState } from 'react';
import QuestionFrameContainer from './question/QuestionFrameContainer';
import MultipleChoiceQuestion from './question/MultipleChoiceQuestion';
import TrueFalseQuestion from './question/TrueFalseQuestion';
import FreeResponseQuestion from './question/FreeResponseQuestion';
import VideoPlayer from "./VideoPlayer";

const FrameManager = () => {
    const [currentFrameIndex, setCurrentFrameIndex] = useState(0);
    const [responses, setResponses] = useState([]);

    const frames = [
        {
            type: 'video',
        },
        {
            type: 'multiple-choice',
            question: 'Question 1',
            options: ['Option 1', 'Option 2', 'Option 3'],
        },
        {
            type: 'free-response',
            question: 'Question 2',
        },
        // Add more frames/questions as needed
    ];

    const handleNextFrame = (response) => {
        setCurrentFrameIndex((prevIndex) => prevIndex + 1);
        setResponses((prevResponses) => [...prevResponses, response]);
    };

    const currentFrame = frames[currentFrameIndex];

    const renderFrame = () => {
        if (currentFrame) {
            if (currentFrame.type === 'multiple-choice') {
                return (
                    <QuestionFrameContainer>
                        <MultipleChoiceQuestion
                            question={currentFrame.question}
                            options={currentFrame.options}
                            onNext={handleNextFrame}
                        />
                    </QuestionFrameContainer>
                );
            } else if (currentFrame.type === 'free-response') {
                return (
                    <QuestionFrameContainer>
                        <FreeResponseQuestion
                            question={currentFrame.question}
                            onNext={handleNextFrame}
                        />
                    </QuestionFrameContainer>
                );
            } else if (currentFrame.type === 'video') {
                return (
                    <VideoPlayer />
                );
            }
        }

        return <p>End of frames</p>;
    };

    return (
        <div>
        {renderFrame()}
        <button onClick={() => handleNextFrame({})}>Next Page</button>
        </div>
    );
};

export default FrameManager;
