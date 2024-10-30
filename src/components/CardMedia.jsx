import React, { useRef, useState, useEffect } from "react";

export default function CardMedia({ dish }) {

    const [videoSrc, setVideoSrc] = useState("");

    const [isVideoAvailable, setIsVideoAvailable] = useState(false);
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    useEffect(() => {
        // Check if the video URL is accessible
        const checkVideo = async () => {
            try {
                const response = await fetch("/videos/" + dish.title.toLowerCase() + ".mp4", { method: "HEAD" });
                if (response.ok) {

                    setIsVideoAvailable(false);

                    response.headers.forEach((header) => {
                        if (header === "video/mp4") {
                            setIsVideoAvailable(true);
                            setIsVideoLoaded(true);
                            setVideoSrc("/videos/" + dish.title.toLowerCase() + ".mp4");
                        }
                    });
                }
            } catch (error) {
                setIsVideoAvailable(false);
            }
        };

        checkVideo();
    }, [dish]);

    function setSrcAndPlay(event) {

        if (isVideoLoaded) {
            event.target.play();
        }
    }

    function deleteSrcAndPause(event) {

        event.target.pause();
        setIsVideoLoaded(false);
        event.target.load();
    }


    const media = (
        isVideoAvailable ? (<video
            key={dish._id}
            className="cardImg"
            alt={`Picture of ` + dish.title}
            poster={dish.imageUrl}
            onMouseOver={event => setSrcAndPlay(event)}
            onMouseOut={event => deleteSrcAndPause(event)}
            onEnded={(event) => event.target.load()}
            onCanPlayThrough={() => setIsVideoLoaded(true)}
            src={videoSrc} >
        </video>) :
            (<img
                className="cardImg"
                src={dish.imageUrl}
                alt={`Picture of ` + dish.title}
                onMouseOver={() => setIsVideoAvailable(false)}
                onMouseOut={() => setIsVideoAvailable(false)}
            />)
    );

    return (
        <>
            {media}
        </>
    );
}