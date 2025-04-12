import WavesurferPlayerBar from "./WavesurferPlayerbar.js";
import { useState, useEffect, useRef } from "react";
import ReactPlayer from "react-player";
import tracks from "./musicTracks.json";
import Player from "./Player";

const App = () => {
  const [currentTrack, setCurrentTrack] = useState(tracks[0]);
  const titleLogo = document.querySelector("#title-logo");

  const scrollHandler = (e) => {
    console.log(e);
  };

  const wavesurferObjRef = useRef(null);

  useEffect(() => {
    console.log("action");
  }, []);

  return (
    <div className="bg-cream min-h-screen flex flex-col">
      <div>
        <header className="fixed header-container bg-cream w-full flex justify-center items-center top-0 z-10 ">
          <img
            src="./images/title-logo-900.jpg"
            alt="Pebble Shaker Jazz Band"
            className="w-1/3 mx-auto"
            id="title-logo"
          />
        </header>
      </div>
      {/* Body */}
      <div className="">
        <div className="w-full bg-cream bg-cover bg-center pt-0">
          <div className="w-full bg-psjb-trans bg-cover bg-center bg-fixed ">
            {/* Text Description */}
            <div className="text-container mx-auto w-full bg-cream mt-40 p-24">
              <div className="p-4 text-center ">
                Text description Text description Text description Text
                description Text description Text description Text description
                Text description Text description Text description Text
                description Text description Text description Text description
                Text description{" "}
              </div>
            </div>

            <div className="player-container min-h-screen text-white flex flex-col items-center p-6 bg-cream">
              {/* Audio Player */}
              <div className="mt-8 w-full max-w-2xl ">
                <div ref={wavesurferObjRef}>
                  <WavesurferPlayerBar wavesurferObjRef={wavesurferObjRef} />
                </div>

                {/* <ReactPlayer
                  url={currentTrack.url}
                  playing
                  controls
                  width="100%"
                  height="50px"
                  config={{ file: { forceAudio: true } }}
                />
                <p className="text-center mt-2 text-orange-700">
                  <strong>NOW PLAYING: {currentTrack.title}</strong>
                </p> */}
              </div>

              {/* Track List */}
              <div className="mt-6 w-full max-w-2xl">
                <h2 className="text-xl font-semibold text-orange-700 mb-4 flex flex-col items-center">
                  TRACKS
                </h2>
                <ul className="space-y-2 flex flex-col items-center">
                  {tracks.map((track, index) => (
                    <div
                      className="flex flex-col justify-center w-1/3 right-0"
                      key={index}
                    >
                      <li
                        onClick={() => setCurrentTrack(track)}
                        className={`cursor-pointer p-3 rounded-lg ${
                          currentTrack.title === track.title
                            ? "bg-yellow-500 flex  justify-center"
                            : "bg-orange-700 hover:bg-orange-600 flex  justify-center"
                        }`}
                      >
                        {track.title}
                      </li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="fixed bottom-0 w-full flex justify-center items-center text-gray-400 bg-cream text-xs border-top border-gray-300 p-2">
        &copy; 2024 Band Name. All Rights Reserved.
      </footer>
    </div>
  );
};

export default App;
