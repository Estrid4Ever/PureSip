import React, { useRef, useState, useEffect } from "react";

export default function CardMedia({ dish }) {

    const [videoSrc, setVideoSrc] = useState("");

    const [isVideoAvailable, setIsVideoAvailable] = useState(false);

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

    function setSrcAndPlay(event, title) {

        setVideoSrc("/videos/" + title.toLowerCase() + ".mp4");


        setTimeout(function () {

            event.target.play();

        }, 50);
    }

    function deleteSrcAndPause(event) {
        event.target.pause();
        setVideoSrc("");
    }


    const media = (
        isVideoAvailable ? (<video
            key={dish._id}
            className="cardImg"
            alt={`Picture of ` + dish.title}
            poster={dish.imageUrl}
            onMouseOver={event => setSrcAndPlay(event, dish.title)}
            onMouseOut={event => deleteSrcAndPause(event)}
            onEnded={() => setVideoSrc("")}
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
