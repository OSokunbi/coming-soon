import React from 'react';
import ComingSoon from './components/ComingSoon';

function App() {
  return (
    <div className="w-screen h-screen p-20 justify-center flex flex-col bg-neutral-900">
      <ComingSoon />
      <footer className="text-neutral-500 mt-4 text-center">
        <p className="text-neutral-500 text-lg font-bold">july 2024</p>
      </footer>
    </div>
  );
}

export default App;
