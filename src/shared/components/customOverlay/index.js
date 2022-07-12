import React from 'react';
import { Circles, ThreeCircles } from 'react-loader-spinner';

const CustomOverlay = ({ children, active, ...props }) => {
  return (
    <div className="relative w-full h-full">
      {!active && children}
      <div
        className={` absolute inset-0  flex justify-center items-center transition-all ${
          !active && `opacity-0 hidden`
        }`}
        style={{ zIndex: 3 }}
      >
        <ThreeCircles width={45} height={45} color="rgb(55 48 163)" />
      </div>
    </div>
  );
};

export default CustomOverlay;
