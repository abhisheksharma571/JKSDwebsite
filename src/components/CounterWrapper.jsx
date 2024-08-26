import React from 'react';
import CounterCard from './CounterCard';


const CounterWrapper = () => {

  return (
    <div className="w-full flex justify-around bg-cardscolor gap-[9px]">
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
