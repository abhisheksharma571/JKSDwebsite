import React, { useEffect } from "react";

const ScrollProgress = () => {
  useEffect(() => {
    const calcScrollValue = () => {
      const scrollProgress = document.getElementById("progress");
      const progressValue = document.getElementById("progress-value");
      const pos = document.documentElement.scrollTop;
      const calcHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollValue = Math.round((pos * 100) / calcHeight);
      if (pos > 100) {
        scrollProgress.style.display = "grid";
      } else {
        scrollProgress.style.display = "none";
      }
      scrollProgress.style.background = `conic-gradient(#FFA75C ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
    };

    // Attach scroll event listener
    window.onscroll = calcScrollValue;
    window.onload = calcScrollValue;

    // Attach click event listener to scroll to top
    const scrollProgress = document.getElementById("progress");
    scrollProgress.addEventListener("click", () => {
      document.documentElement.scrollTop = 0; // Scroll to top
    });
  }, []);

  return (
    <div
      id="progress"
      className="fixed bottom-5 right-4 h-10 w-10 grid place-items-center rounded-full shadow-lg cursor-pointer"
      style={{ display: "none" }}
    >
      <div
        id="progress-value"
        className="h-[calc(100%-10px)] w-[calc(100%-10px)] bg-white rounded-full grid place-items-center text-xl text-[#001a2e]"
      >
        ↑
      </div>
    </div>
  );
};

export default ScrollProgress;
