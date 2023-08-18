import React, { useEffect, useState } from 'react';
import './style.css';

const SecondsCounter = (props) => {
  const [seconds, setSeconds] = useState(props.seconds);
  const [digits, setDigits] = useState({ four: 0, three: 0, two: 0, one: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const four = Math.floor(seconds / 1000) % 10;
    const three = Math.floor((seconds % 1000) / 100);
    const two = Math.floor((seconds % 100) / 10);
    const one = seconds % 10;

    setDigits({ four, three, two, one });
  }, [seconds]);

  return (
    <div>
    <div>
      <h1>Seconds Counter App</h1>
      </div>
    <div className="counter-container">
      
      <div className="icon">
        <i className="fas fa-clock"></i> {/* Icono de reloj de FontAwesome */}
      </div>
      <div className="digit-container">
        <div className="digit">{digits.four}</div>
        <div className="digit">{digits.three}</div>
        <div className="digit">{digits.two}</div>
        <div className="digit">{digits.one}</div>
      </div>
    </div>
    </div>
  );
};

export default SecondsCounter;

