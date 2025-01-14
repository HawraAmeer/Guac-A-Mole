import { useState, useEffect } from "react";
import Confettianim from "./Confettianim";
const Timer = (props) => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(20);
  const [confettiActive, setConfetti] = useState(false);
  useEffect(() => {
    if (props.Timeractive) {
      let myInterval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(myInterval);
            props.setTimeractive(false);
            setConfetti(true);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        }
        //avocado shows when time start
        if (props.Timeractive) {
          props.setCurrenthole(Math.floor(Math.random() * 6) + 1);
          props.setAvocTop("0");
        }
      }, 800);
      return () => {
        clearInterval(myInterval);
      };
    }
    //hide avocado after time finish
    props.setCurrenthole(0);
  });
  return (
    <div>
      <Confettianim confettiActive={confettiActive} />
      {minutes === 0 && seconds === 0 ? (
        <span>Times Up</span>
      ) : (
        <span>
          {" "}
          Time Left: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </span>
      )}
    </div>
  );
};

export default Timer;
