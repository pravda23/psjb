import React from "react";
import ReactPlayer from "react-player";

const App = () => {
  const tracks = [
    {
      title: "Song One",
      url: "https://johnbartmann.com/track/overdose-sample.mp3",
    },
    {
      title: "Song Two",
      url: "https://johnbartmann.com/track/cybernetic-boss-battle-sample.mp3",
    },
    {
      title: "Song Three",
      url: "https://johnbartmann.com/track/a-crime-in-progress-sample.mp3",
    },
  ];

  const [currentTrack, setCurrentTrack] = React.useState(tracks[0]);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      {/* Header */}
      <header className="w-full max-w-4xl text-center">
        <h1 className="text-4xl font-bold mb-4">Pebble Shaker Jazz Band</h1>
        <p className="text-lg text-gray-400">Official Website</p>
      </header>

      {/* Audio Player */}
      <div className="mt-8 w-full max-w-2xl">
        <ReactPlayer
          url={currentTrack.url}
          playing
          controls
          width="100%"
          height="50px"
          config={{ file: { forceAudio: true } }}
        />
        <p className="text-center mt-2">
          Now Playing: <strong>{currentTrack.title}</strong>
        </p>
      </div>

      {/* Track List */}
      <div className="mt-6 w-full max-w-2xl">
        <h2 className="text-xl font-semibold mb-4">Tracks</h2>
        <ul className="space-y-2">
          {tracks.map((track, index) => (
            <li
              key={index}
              onClick={() => setCurrentTrack(track)}
              className={`cursor-pointer p-3 rounded-lg ${
                currentTrack.title === track.title
                  ? "bg-blue-500"
                  : "bg-gray-700 hover:bg-gray-600"
              }`}
            >
              {track.title}
            </li>
          ))}
        </ul>
      </div>

      {/* Footer */}
      <footer className="mt-auto text-center text-gray-400">
        &copy; 2024 Band Name. All Rights Reserved.
      </footer>
    </div>
  );
};

export default App;
