import { useState, useEffect, useRef } from 'react';
import ComingSoon from './components/ComingSoon';
import song from './assets/song.mp3';
import { FaPlay } from "react-icons/fa";
// analytics from vercel
import { Analytics } from '@vercel/analytics/react';
import './App.css'; // Create this for the blinking animation and transitions

function App() {
  const [liveTime, setLiveTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false); // Track if audio is playing
  const [showContent, setShowContent] = useState(false); // Track if content is visible
  const audioRef = useRef(null); // Ref to control the audio

  // Function to update the current date and time with milliseconds
  const getTime = () => {
    const date = new Date();

    // Format date to "October 12, 2024"
    const formattedDate = date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });

    // Get time with milliseconds
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const milliseconds = String(date.getMilliseconds()).padStart(3, '0');

    const time = `${hours}:${minutes}:${seconds}:${milliseconds}`;

    // Combine date and time
    const dateTime = `${formattedDate} ${time}`;
    setLiveTime(dateTime);
  };

  useEffect(() => {
    // Update date and time every millisecond
    const timeInterval = setInterval(getTime, 1);

    return () => {
      clearInterval(timeInterval);
    };
  }, []);

  // Function to handle play and reveal content
  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
      setShowContent(true); // Reveal content after playing
    }
  };

  return (
    <div className="overflow-x-hidden w-screen min-h-[40rem] justify-center flex flex-col bg-neutral-950">
      {!showContent && (
        <button
          onClick={handlePlay}
          className="animate-pulse text-3xl text-neutral-200 font-bold"
        >
        <FaPlay className="inline-block"/>
        </button>
      )}

      {/* The content that fades in */}
      <div className={`content-container ${showContent ? 'fade-in' : 'hidden'}`}>
        <ComingSoon />
        <footer className="w-full flex flex-col items-center text-neutral-500 mt-4 text-center">
          <p className="max-w-96 text-neutral-500 text-lg font-bold px-5">
            hi, this is           <a
              target="_blank"
              href="https://www.oresokunbi.blog/"
              className="hover:text-neutral-400 transition-colors duration-300 text-neutral-200 text-lg font-bold "
            >
            <span className="underline">ore</span>
            </a>.
          </p>
          <p className="max-w-96 text-neutral-500 text-lg font-bold px-5">how do you feel?</p>
          <p className="mt-5 text-neutral-400 text-xs">{liveTime}</p>
        </footer>
      </div>

      <audio ref={audioRef} src={song} loop />
      <Analytics/>
    </div>
  );
}

export default App;
