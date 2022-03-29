import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./logo.css";

function App() {
  const [time, setTime] = useState("");
  const [days, setDays] = useState("");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = Date.parse(time) - now;
      if (distance <= 0 || !distance) return;
      setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
      setHours(
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div className="flex justify-center items-center mx-auto w-full h-screen">
      <div>
        <img src={logo} className="logo mx-auto" alt="logo" />
        <div className="text-center dark:text-gray-100 text-4xl font-bold my-3 uppercase">
          Countdown
        </div>
        <div className="mt-3 flex justify-center items-center text-lg leading-relaxed text-gray-600 dark:text-gray-200">
          <input
            type="date"
            className="px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg w-60 focus:border-gray-500 focus:bg-gray-100 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 "
            required
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <div className="flex justify-center items-center mt-5">
          <span>
            <div className="w-32 h-8 text-center mx-auto p-3 text-xl dark:text-gray-100">
              {days ? days : days === 0 ? 0 : "D"}
            </div>
            <div className="w-32 h-8 text-center mx-auto p-3 text-2xl dark:text-gray-100">
              Days
            </div>
          </span>
          <span>
            <div className="w-32 h-8 text-center mx-auto p-3 text-2xl dark:text-gray-100">
              {hours ? hours : hours === 0 ? 0 : "O"}
            </div>
            <div className="w-32 h-8 text-center mx-auto p-3 text-2xl dark:text-gray-100">
              Hours
            </div>
          </span>
          <span>
            <div className="w-32 h-8 text-center mx-auto p-3 text-2xl dark:text-gray-100">
              {minutes ? minutes : minutes === 0 ? 0 : "N"}
            </div>
            <div className="w-32 h-8 text-center mx-auto p-3 text-2xl dark:text-gray-100">
              Minutes
            </div>
          </span>
          <span>
            <div className="w-32 h-8 text-center mx-auto p-3 text-2xl dark:text-gray-100">
              {seconds ? seconds : seconds === 0 ? 0 : "E"}
            </div>
            <div className="w-32 h-8 text-center mx-auto p-3 text-2xl dark:text-gray-100">
              Seconds
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
