import fs from "fs";
import path from "path";
import { ArtistCard } from "../components/ArtistCard";
import { Key } from "react";

export default async function ArtistsPage() {
  const filePath = path.join(process.cwd(), "data", "artists.json");
  const jsonData = fs.readFileSync(filePath, "utf8");
  const artists = JSON.parse(jsonData);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Nos Artistes</h1>
      <ul className="space-y-4">
        {artists.map((artist: any, index: Key | null | undefined) => (
          <li key={index}>
            <ArtistCard {...artist} />
          </li>
        ))}
      </ul>
    </div>
  );
}
