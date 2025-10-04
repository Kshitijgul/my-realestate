import React, { useState, useEffect, useRef } from "react";

const OurMilestones = () => {
  const [counters, setCounters] = useState({
    sqft: 0,
    acres: 0,
    families: 0
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  const milestones = [
    {
      key: "sqft",
      target: 6000000,
      label: "Sq. Ft. Of Land",
    },
    {
      key: "acres",
      target: 400,
      label: "Acres Land",
    },
    {
      key: "families",
      target: 5000,
      label: "Happy Families",
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true); // trigger animation once
        }
      },
      { threshold: 0.3 } // 30% visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const timer = setInterval(() => {
      setCounters((prev) => {
        const newCounters = { ...prev };
        let allCompleted = true;

        milestones.forEach((milestone) => {
          if (newCounters[milestone.key] < milestone.target) {
            const increment = milestone.target / steps;
            newCounters[milestone.key] = Math.min(
              newCounters[milestone.key] + increment,
              milestone.target
            );
            allCompleted = false;
          }
        });

        if (allCompleted) {
          clearInterval(timer);
        }

        return newCounters;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [hasAnimated]);

  return (
    <div ref={sectionRef} className="max-w-6xl mx-auto p-8 bg-gray-100">
      <h2 className="text-4xl font-bold text-center text-gray-700 mb-12">
        Our Milestones
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {milestones.map((milestone) => (
          <div key={milestone.key} className="text-center">
            <div className="text-5xl md:text-6xl font-bold text-orange-500 mb-2">
              {milestone.key === "sqft"
                ? `${(counters[milestone.key] / 1000000)
                    .toFixed(1)
                    .replace(/\.?0+$/, "")}M+`
                : milestone.key === "families"
                ? `${(counters[milestone.key] / 1000)
                    .toFixed(1)
                    .replace(/\.?0+$/, "")}K+`
                : `${Math.floor(counters[milestone.key])}+`}
            </div>
            <p className="text-gray-600 text-lg font-medium">
              {milestone.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurMilestones;
