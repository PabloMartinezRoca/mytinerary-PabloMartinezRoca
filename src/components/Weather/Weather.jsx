import React from "react";

const Weather = ({ weatherCondition, isDayTime }) => {
  
  return (
    <div className="px-2">
      {(() => {
        switch (weatherCondition) {
          case "sunny":
          return isDayTime ? "☀️" : "🌙"
          case "partially-cloudy":
            return isDayTime ? "⛅️" : "☁️"
          case "cloudy":
            return "☁️";
          case "rainy":
            return "🌨️";
          case "sun-behind-rain-cloud":
            return isDayTime ? "🌦️" : "☁️"
          case "stormy":
            return "⛈️";
          case "snowy":
            return "🌨️";
        }
      })()} {/* self invoking JavaScript function using () */}
      {/*
      Functions are not valid as a React child. - whitout the () 
      This may happen if you return a Component instead of <Component /> from render.
      Or maybe you meant to call this function rather than return it
      */}
      
    </div>
  );
};

export default Weather;
