import { useState, useEffect } from 'react';
import ComingSoon from './components/ComingSoon';

function App() {
  const checkInMessages = [
    "hey i'm ore",
    "how u feelin today?",
    "ur music taste says a lot about u",
    "can i tell i really like music",
    "see u soon",
  ];

  const [liveTime, setLiveTime] = useState(0);
  const [index, setIndex] = useState(0);
  const [message, setMessage] = useState(checkInMessages[0]);

  // Function to update the current date and time with milliseconds
  const getTime = () => {
    const date = new Date();

    // Format date to "October 12, 2024"
    const formattedDate = date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
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

    // Rotate messages every second
    const messageInterval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % checkInMessages.length);
    }, 1000);

    return () => {
      clearInterval(timeInterval);
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
        <a target="_blank" href="https://www.oresokunbi.blog/" className="hover:text-neutral-400 transition-colors duration-300 text-neutral-200 text-lg font-bold ">- <span className="underline">ore</span></a>
        <p className="mt-20 text-neutral-400 text-xs">{liveTime}</p>
      </footer>
    </div>
  );
}

export default App;
