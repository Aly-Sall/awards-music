// YouTubePlayer.tsx
import React from "react";

interface YouTubePlayerProps {
  videoId: string;
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({ videoId }) => {
  return (
    <div>
      <iframe
        title="YouTube Video Player"
        width="560"
        height="315"
        src={`<iframe width="560" height="315" src="https://www.youtube.com/embed/AxXNRTyRG4E?si=hM1uRHC2rbzVngwv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>${videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubePlayer;
