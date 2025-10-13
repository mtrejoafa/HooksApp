import { useEffect, useState } from "react";

const colors = {
    red : 'bg-red-500 animate-pulse',
    yellow : 'bg-yellow-500 animate-pulse',
    green : 'bg-green-500 animate-pulse',
  }

 type TrafficLightColors = keyof typeof colors;

export const useTrafficLight = () => {
    const [light, setLight] = useState<TrafficLightColors>('red');
  const [countDown, setCountDown] = useState(5);

  useEffect(() => {
    if (countDown === 0) return;
    const interval = setInterval(() => {
      console.log('setInterval llamado');
      setCountDown((prev) => prev - 1);
    }, 1000);

    return () => {
      console.log('Clean interval');
      clearInterval(interval);
    }
  },[countDown]);

  useEffect(() => {
    if (countDown > 0) return;
    console.log('entra');
    setCountDown(5);
    if (light === 'red') {
      setLight("yellow");
      return;
    }
    if (light === 'yellow') {
      setLight("green");
      return;
    }
    if (light === 'green') {
      setLight("red");
      return;
    }
  },[countDown]);

  return {
    countDown,
    light,
    colors,
    percentage: (countDown / 5) * 100,
    greenLight: light === 'green' ? colors.green : 'bg-gray-500',
    yellowLight: light === 'yellow' ? colors.yellow : 'bg-gray-500',
    redLight: light === 'red' ? colors[light] : 'bg-gray-500'
  }
}
