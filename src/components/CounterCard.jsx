import React, { useEffect } from 'react';

const easing = (t) => (--t) * t * t + 1;

const CounterCard = ({ iconClass, endValue, text }) => {
  useEffect(() => {
    let startValue = 0;
    const duration = 4000 / endValue;
    const counter = setInterval(() => {
      startValue += 1;
      document.getElementById(`counter-${endValue}`).textContent = Math.round(easing(startValue / endValue) * endValue);
      if (startValue === endValue) {
        clearInterval(counter);
      }
    }, duration);
  }, [endValue]);

  return (
    <div className="w-full sm:w-[350px] h-[150px] flex items-center p-4 border-b-[8px] border-orange rounded-md m-6 animate-fade-in-up">
      <img src={iconClass} alt={text} className="w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] mr-4" />
      <div className="flex flex-col justify-center">
        <span id={`counter-${endValue}`} className="text-black font-bold text-[2em] sm:text-[3em]">0</span>
        <span className="text-black font-medium text-base sm:text-lg">{text}</span>
      </div>
    </div>
  );
};

export default CounterCard;
