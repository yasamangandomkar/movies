import { useState } from "react";
import VideoPopup from "../VideoPopup/VideoPopup";

const VideoSection = ({ data }) => {
    const [show, setShow] = useState(false);
    const [videoId, setVideoId] = useState(null);
    return (
        <div>
            {data?.results?.map((video) => (
                <div key={video.id}  
                  onClick={() => {
                    setVideoId(video.key);
                    setShow(true);
                }}>
                    <img
                        src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`}
                    />
                </div>
            ))}
            <VideoPopup       show={show}
                setShow={setShow}
                videoId={videoId}
                setVideoId={setVideoId}/>
        </div>
    )
}

export default VideoSection