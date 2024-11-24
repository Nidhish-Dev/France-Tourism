'use client'
import React, { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date().toLocaleString("en-GB", { timeZone: "Europe/Paris" }));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleString("en-GB", { timeZone: "Europe/Paris" }));
    }, 1000);

    return () => clearInterval(intervalId);   
  }, []);

  return (
    <div className="absolute bottom-10 right-10 text-white text-xl md:text-3xl lg:text-2xl font-mono z-20">
      {time}
    </div>
  );
};

export default Clock;
