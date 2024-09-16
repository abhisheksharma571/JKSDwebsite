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
    <div className="flex justify-center items-center">
      <div
        ref={wrapperRef}

        className={`w-[300px] mt-6 mx-4 md:w-[1300px] flex flex-wrap lg:flex-nowrap justify-around items-center rounded-3xl bg-gradient-to-r from-blue-400 to-purple-400 backdrop-blur-lg bg-opacity-50 ${

          isVisible ? 'opacity-100 transition-opacity duration-1000' : 'opacity-0'
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
    </div>
  );
};

const counters = [
  { iconClass: './icons/assistance.png', endValue: 150, text: 'Projects Completed' },
  { iconClass: './icons/customer.png', endValue: 98, text: '% Happy Customers' },
  { iconClass: './icons/project.png', endValue: 100, text: '% Placement Assistance' },
  { iconClass: './icons/online-course.png', endValue: 25, text: 'Courses Offered' },

];

export default CounterWrapper;
