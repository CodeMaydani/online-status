import {
  SignalHigh,
  SignalIcon,
  SignalLow,
  SignalMediumIcon,
  SignalZero,
} from 'lucide-react';
import { useEffect, useState } from 'react';

function Signal() {
  const [index, setIndex] = useState(0);
  const frames = [
    <SignalIcon />,
    <SignalHigh />,
    <SignalMediumIcon />,
    <SignalLow />,
    <SignalZero />,
  ];

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % frames.length),
      2000,
    );
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <>{frames[index]}</>;
}

export default Signal;
