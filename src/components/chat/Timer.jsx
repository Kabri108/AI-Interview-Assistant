import React, { useEffect, useState } from "react";

function Timer({ duration, onTimeUp, resetKey }) {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    setTimeLeft(duration);
  }, [duration, resetKey]);

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeUp();
      return;
    }
    const interval = setInterval(() => {
      setTimeLeft((t) => t - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft, onTimeUp]);

  return <div className="font-bold mb-2">Time left: {timeLeft}s</div>;
}

export default Timer;
