import React from 'react';
import ReactDOM from 'react-dom';

const Loader = () => {
  return ReactDOM.createPortal(
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="w-6 h-6 animate-spin rounded-full border-4 border-t-white border-[#172233]"></div>
    </div>,
    document.body,
  );
};

export default Loader;
