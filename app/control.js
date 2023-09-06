"use client";
import React from "react";
import { useState } from "react";

const Control = ({ onVolumeChange }) => {
  const [volume, setVolume] = useState(0);
  const handleChange = (event) => {
    const newVolume = parseInt(event.target.value);
    setVolume(newVolume);
  };

  const gradient = `linear-gradient(to left, #333333, #333333 ${
    100 - (volume / 4000) * 100
  }%,
    #ECECEC ${100 - (volume / 4000) * 100}%, #ECECEC 100%)`;

  return (
    <div className="w-full h-8 relative sm:my-4">
      <input
        type="range"
        min="0"
        max="4000"
        step="1"
        value={volume}
        onChange={handleChange}
        className="w-full absolute top-1/2 cursor-pointer custom-range sm:h-[9px] h-[3px]"
        style={{
          WebkitAppearance: "none",
          appearance: "none",
          width: "100%",
          // height: '9px',
          background: gradient,
          outline: "none",
          border: "none",
          borderRadius: "9px",
          cursor: "pointer",
        }}
      />
    </div>
  );
};

export default Control;
