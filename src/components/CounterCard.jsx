import React, { useEffect, useState, useRef } from 'react';

const easing = (t) => (--t) * t * t + 1;

const CounterCard = ({ iconClass, endValue, text }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      let startValue = 0;
      const duration = 4000 / endValue;
      const counter = setInterval(() => {
        startValue += 1;
        document.getElementById(`counter-${endValue}`).textContent = Math.round(easing(startValue / endValue) * endValue);
        if (startValue === endValue) {
          clearInterval(counter);
        }
      }, duration);
    }
  }, [isVisible, endValue]);

  return (
    <div ref={ref} className="w-full sm:w-[350px] flex items-center p-4 ">
      <img src={iconClass} alt={text} className="w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] mr-4" />
      <div className="flex flex-col justify-center">
        <span id={`counter-${endValue}`} className="text-white text-center font-bold text-[2em] sm:text-[3em]">0</span>
        <span className="text-white font-medium text-base sm:text-lg">{text}</span>
      </div>
    </div>
  );
};

export default CounterCard;
