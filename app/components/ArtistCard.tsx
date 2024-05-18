interface ArtistProps {
  name: string;
  image: string;
  youtubeLink: string;
  spotifyEmbed: string;
  bio: string;
}

export const ArtistCard: React.FC<ArtistProps> = ({
  name,
  image,
  youtubeLink,
  spotifyEmbed,
  bio,
}) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-6">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:h-full md:w-48"
            src={image}
            alt={name}
          />
        </div>
        <div className="p-8">
          <div className="block mt-1 text-lg leading-tight font-semibold text-gray-900">
            {name}
          </div>
          <p className="mt-2 text-gray-600">{bio}</p>
          <div className="mt-4 flex items-center">
            <a
              href={youtubeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-800 mr-4"
            >
              YouTube
            </a>
            <div
              className="spotify-embed"
              dangerouslySetInnerHTML={{ __html: spotifyEmbed }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
