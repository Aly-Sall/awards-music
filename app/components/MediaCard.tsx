import React from "react";

interface MediaProps {
  youtubeLink: string;
  spotifyEmbed: string;
}

export const MediaCard: React.FC<MediaProps> = ({
  youtubeLink,
  spotifyEmbed,
}) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-xs mb-6">
      <div className="p-4">
        <div className="mb-4">
          <a
            href={youtubeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-indigo-500 hover:text-indigo-800"
          >
            YouTube
          </a>
        </div>
        <div
          className="spotify-embed"
          dangerouslySetInnerHTML={{ __html: spotifyEmbed }}
        />
      </div>
    </div>
  );
};
