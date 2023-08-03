"use client";
import { useEffect, useState } from "react";
import moment from "moment";
import { Sun, MoonStar } from "lucide-react";

const Clock: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>("");
  const [icon, setIcon] = useState<string>("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const timeString = moment().format("HH:mm");
      setCurrentTime(timeString);

      const currentHour = moment().hour();
    //   const currentHour = 10;
      if (currentHour >= 6 && currentHour < 18) {
        setIcon("sun");
        document.documentElement.classList.remove("dark");
      } else {
        setIcon("moon");
        document.documentElement.classList.add("dark");
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex items-center gap-5">
      {icon === "sun" ? (
        <Sun className="w-4 h-4" />
      ) : (
        <MoonStar className="w-4 h-4" />
      )}
      <h4>{currentTime}</h4>
    </div>
  );
};

export default Clock;
