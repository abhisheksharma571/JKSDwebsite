import React, { useEffect, useState, useRef } from 'react';
import CounterCard from './CounterCard';

const CounterWrapper = () => {
  const [isVisible, setIsVisible] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (wrapperRef.current) {
      observer.observe(wrapperRef.current);
    }

    return () => {
      if (wrapperRef.current) {
        observer.unobserve(wrapperRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className={`w-full flex justify-around bg-indigo-950 gap-[9px] ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0'
      }`}
    >
      {counters.map((counter, index) => (
        <CounterCard
          key={index}
          iconClass={counter.iconClass}
          endValue={counter.endValue}
          text={counter.text}
        />
      ))}
    </div>
  );
};

const counters = [
  { iconClass: './icons/assistance.png', endValue: 150, text: 'Projects Completed' },
  { iconClass: './icons/customer.png', endValue: 98, text: '% Happy Customers' },
  { iconClass: './icons/project.png', endValue: 100, text: '% Placement Assistance' },
];

export default CounterWrapper;
