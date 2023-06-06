import {useEffect} from 'react';


const VideoPlayer = () => {

    useEffect(() => {
        const script = document.createElement('script');

        script.src = "https://players.brightcove.net/1160327042001/S1X17dLSW_default/index.min.js";
        script.async = false;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, []);

    // Component logic and rendering for free response questions
    return (
        <div className="video_player eng_version">
            <video-js id="english_video" data-video-id="6052176062001" data-account="1160327042001"
                      data-player="S1X17dLSW" data-embed="default" data-application-id className="video-js" controls
                      width="100%" height="100%"></video-js>
        </div>
    );
};

export default VideoPlayer;