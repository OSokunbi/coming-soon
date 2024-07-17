import React from 'react';
import logo from '../assets/logo-base-256x256.png';

const ComingSoon = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="text-center">
        <img src={logo} alt="logo" className="w-20 h-20 mx-auto mb-4 animate-spin" />
      </div>
    </div>
  );
};

export default ComingSoon;
