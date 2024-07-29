"use client"


export default function VideoComponent() {


    return (
        <video className="video-container" width="990" height="500" controls preload="none" loop  muted >
            <source src="https://masterbbqerbil.net/videos/bbq.mp4" type="video/mp4"/>
            <track
                src="https://masterbbqerbil.net/videos/bbq.mp4"
                kind="subtitles"
                srcLang="en"
                label="English"

            />
        </video>
    );
}

