import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ScrollProgress = () => {
  const [scrollValue, setScrollValue] = useState(0);
  const location = useLocation(); // Get the current route location

  useEffect(() => {
    const calcScrollValue = () => {
      const pos = document.documentElement.scrollTop;
      const calcHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const newScrollValue = Math.round((pos * 100) / calcHeight);

      setScrollValue(newScrollValue); // Update the scrollValue state
    };

    // Attach scroll event listener
    window.addEventListener("scroll", calcScrollValue);
    window.addEventListener("load", calcScrollValue);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener("scroll", calcScrollValue);
      window.removeEventListener("load", calcScrollValue);
    };
  }, []);

  useEffect(() => {
    // Reset the scroll value and scroll to the top when the location changes
    setScrollValue(0);
    window.scrollTo(0, 0); // Scroll to top
  }, [location]);

  return (
    <div
      id="progress"
      className="fixed top-[70px] left-0 h-[3px] rounded-full bg-orange z-50 transition-width duration-100 ease-out"
      style={{ width: `${scrollValue}%` }}
    ></div>
  );
};

export default ScrollProgress;
