import { useState, useEffect } from 'react';

export default function AnimatedCounter({ endValue, label, suffix = '+' }: { endValue: number, label: string, suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const animate = () => {
      let start = 0;
      const duration = 2000;
      const stepTime = 20;
      const steps = duration / stepTime;
      const increment = endValue / steps;

      const timer = setInterval(() => {
        start += increment;
        if (start >= endValue) {
          setCount(endValue);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, stepTime);
    };

    animate();
    const interval = setInterval(animate, 10000); // 10 seconds
    return () => clearInterval(interval);
  }, [endValue]);

  return (
    <div className="border border-stone-200 rounded-2xl p-8 text-center">
      <h3 className="text-4xl font-serif text-[#333333] mb-2">{count}{suffix}</h3>
      <p className="text-stone-600">{label}</p>
    </div>
  );
}
