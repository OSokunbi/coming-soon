import { useState, useEffect } from 'react';
import ComingSoon from './components/ComingSoon';

function App() {
  const checkInMessages = [
    "hey i'm ore",
    "how are you feeling today?",
    "ur music taste says a lot about u lol",
    "can you tell i really like music",
    "back up soon",
  ];

  const [index, setIndex] = useState(0);
  const [message, setMessage] = useState(checkInMessages[0]);


  useEffect(() => {
    const messageInterval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % checkInMessages.length);
    }, 1000);

    return () => {
      clearInterval(messageInterval);
    };
  }, [checkInMessages.length]);

  useEffect(() => {
    setMessage(checkInMessages[index]);
  }, [index, checkInMessages]);

  return (
    <div className="w-screen h-screen p-20 justify-center flex flex-col bg-neutral-950">
      <ComingSoon />
      <footer className="text-neutral-500 mt-4 text-center">
        <p className="text-neutral-500 text-lg font-bold">"{message}"</p>
        <a target="_blank" href="https://www.oresokunbi.blog/" className="text-neutral-200 text-lg font-bold ">- <span className="underline">ore</span></a>
      </footer>
    </div>
  );
}

export default App;
