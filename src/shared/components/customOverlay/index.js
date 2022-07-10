import React from 'react';
import { RotatingSquare } from 'react-loader-spinner';

const CustomOverlay = ({ children, active, ...props }) => {
  return (
    <>
      {children}
      <div
        className={` absolute inset-0  flex justify-center items-center transition-all ${
          !active && `opacity-0 hidden`
        }`}
        style={{ zIndex: 3 }}
      >
        <div>
          <RotatingSquare width="100" />
        </div>
      </div>
    </>
  );
};

export default CustomOverlay;
