import React, { useEffect } from 'react';

const CounterCard = ({ iconClass, endValue, text }) => {
  useEffect(() => {
    let startValue = 0;
    const duration = 4000 / endValue;
    const counter = setInterval(() => {
      startValue += 1;
      document.getElementById(`counter-${endValue}`).textContent = startValue;
      if (startValue === endValue) {
        clearInterval(counter);
      }
    }, duration);
  }, [endValue]);

  return (
    <div className="w-[350px] h-[150px] flex flex-col justify-around p-4 bg-cardscolor border-b-[10px] border-orange rounded-md mt-6">
      <i className={`${iconClass}`}></i>
      <span id={`counter-${endValue}`} className="text-black text-center font-semibold text-[3em]">0</span>
      <span className="text-black text-center font-normal leading-none">{text}</span>
    </div>
  );
};

export default CounterCard;
