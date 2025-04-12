import { useRef } from "react";
import WaveSurfer from "wavesurfer.js";

const WavesurferPlayerBar = (wavesurferObjRef) => {
  console.log(wavesurferObjRef);
  const wavesurferRef = useRef(null);

  const wavesurfer = WaveSurfer.create({
    container: wavesurferRef.current,
    waveColor: "#4F4A85",
    progressColor: "#383351",
    url: "https://samplelib.com/lib/preview/mp3/sample-3s.mp3",
  });

  wavesurferObjRef.current = wavesurfer;

  console.log(wavesurfer);

  return (
    <div>
      <div ref={wavesurferObjRef} />
      <button onClick={() => wavesurfer.playPause()}>
        {wavesurfer.isPlaying() ? "Pause" : "Play"}
      </button>
    </div>
  );
};
export default WavesurferPlayerBar;
