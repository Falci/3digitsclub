import { useEffect, useState } from 'react';

export const useCoolBackground = () => {
  const [color, setColor] = useState(0);

  const colors = [
    'bg-neutral-50',
    'bg-red-50',
    'bg-orange-50',
    'bg-yellow-50',
    'bg-lime-50',
    'bg-green-50',
    'bg-teal-50',
    'bg-blue-50',
    'bg-violet-50',
    'bg-purple-50',
    'bg-pink-50',
  ];

  const pick = () => setColor((color) => (color + 1) % colors.length);

  useEffect(() => {
    pick();
    const timer = setInterval(pick, 10000);
    return () => clearInterval(timer);
  }, []);

  return colors[color];
};
