import React, { useEffect, useState } from "react";

// Counter Component
const Counter = ({ target, duration, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(target);
    if (start === end) return;

    let totalMilSecDur = duration * 1000;
    let incrementTime = totalMilSecDur / end;

    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const StatsSection = () => {
  return (
    <section className="relative w-full bg-white py-8">
      {/* Background Image */}
      <div className="relative w-full h-[350px] md:h-[450px]">
        <img
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
          alt="Handshake"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Stats Box */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 md:bottom-8 md:right-8 md:left-auto md:translate-x-0 bg-white shadow-lg rounded-md px-6 md:px-10 py-6 flex flex-col md:flex-row gap-6 md:gap-12 w-[90%] md:w-auto">
          {/* Stat 1 */}
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
              <Counter target={14} duration={2} suffix="+" />
            </h3>
            <p className="text-gray-500 text-sm md:text-base">Years of Experience</p>
          </div>

          {/* Stat 2 */}
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
              <Counter target={92} duration={2} suffix="%" />
            </h3>
            <p className="text-gray-500 text-sm md:text-base">Approval Success</p>
          </div>

          {/* Stat 3 */}
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
              <Counter target={20} duration={2} suffix="K" />
            </h3>
            <p className="text-gray-500 text-sm md:text-base">Homes Financed</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
