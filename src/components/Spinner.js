import React from 'react';
import '../Spinner.css';

function Spinner() {
  return (
    <div className="flex flex-col justify-center items-center">
    <div className="spinner"></div>
    <p className="text-3xl">Loading....</p>
    </div>
  )
}

export default Spinner;
