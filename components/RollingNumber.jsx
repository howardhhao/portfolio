import { useEffect, useRef, useState } from 'react';

const RollingDigit = ({ target, duration }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    const isDigit = /^\d$/.test(target);
    if (!isDigit) {
      el.textContent = target;
      return;
    }

    const frameRate = 1000 / 60;
    const totalFrames = Math.round(duration / frameRate);
    let frame = 0;
    const start = 0;
    const end = parseInt(target);
    const step = (end - start) / totalFrames;

    const interval = setInterval(() => {
      frame++;
      const val = Math.floor(start + step * frame);
      el.textContent = Math.min(val, 9);
      if (frame >= totalFrames) {
        el.textContent = target;
        clearInterval(interval);
      }
    }, frameRate);
  }, [target, duration]);

  return (
    <span ref={ref} className="inline-block">
      0
    </span>
  );
};

const RollingNumber = ({ value, duration = 1500 }) => {
  const [chars, setChars] = useState([]);

  useEffect(() => {
    setChars(value.toString().split(''));
  }, [value]);

  return (
    <span className="digit-turn-effect">
      {chars.map((char, i) =>
        /\d/.test(char) ? (
          <RollingDigit key={i} target={char} duration={duration} />
        ) : (
          <span key={i} className="inline-block">{char}</span>
        )
      )}
    </span>
  );
};

export default RollingNumber;
