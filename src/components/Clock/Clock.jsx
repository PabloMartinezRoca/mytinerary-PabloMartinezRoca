import React, { useEffect, useState } from "react";
import Weather from "../Weather/Weather";

const Clock = ({ weatherCondition = "sunny" }) => {
  const [time, setTime] = useState(new Date());
  let [isDayTime, setIsDayTime] = useState();

  let intervalID = useState();

  useEffect(() => {
    console.log("Este hook se ejecuta al montar el componente");
    intervalID = setInterval(() => {
      setTime(new Date());
    }, 1000); // Se ejecuta cada 1000 milisegundos

    return () => {
      console.log("Este hook se ejecuta al desmontar el componente");
      clearInterval(intervalID);
    };
  }, []);

  useEffect(() => {
    const anochecer = new Date(
      time.getFullYear(),
      time.getMonth(),
      time.getDate(),
      19,
      0,
      0,
      0
    );
    const amanecer = new Date(
      time.getFullYear(),
      time.getMonth(),
      time.getDate(),
      6,
      0,
      0,
      0
    );

    if (time > anochecer || time < amanecer) {
      setIsDayTime(false);
    } else {
      setIsDayTime(true);
    }
  }, [time]);

  //   const handleDayChange = () => {
  //     setisDayTime((prevState) => !prevState)
  //   }

  const handleAddHour = () => {
    const newTime = new Date(time);
    newTime.setHours(newTime.getHours() + 1);
    setTime(newTime);
  };

  const handleAddMinute = () => {
    const newTime = new Date(time);
    newTime.setMinutes(newTime.getMinutes() + 1);
    setTime(newTime);
  };

  const handleResetSeconds = () => {
    const newTime = new Date(time);
    newTime.setSeconds("00");
    setTime(newTime);
  };

  return (
    <div className="flex align-middle h-100 self-center mx-4">
      <Weather weatherCondition={weatherCondition} isDayTime={isDayTime} />
      <span
        onClick={() => {
          handleAddHour();
        }}
      >
        {time.getHours().toLocaleString("en-US", { minimumIntegerDigits: 2 })}
      </span>
      :
      <span
        onClick={() => {
          handleAddMinute();
        }}
      >
        {time.getMinutes().toLocaleString("en-US", { minimumIntegerDigits: 2 })}
      </span>
      :
      <span
        onClick={() => {
          handleResetSeconds();
        }}
      >
        {time.getSeconds().toLocaleString("en-US", { minimumIntegerDigits: 2 })}
      </span>
    </div>
  );
};

export default Clock;
