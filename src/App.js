import './App.css';
import Board from './components/Board'
import TimerTest from './components/TimerTest'
import { Scorearea, Mainsection, Playarea, GlobalStyle,Title} from './styles';
import {useState} from "react";

function App() {
  let [Timeractive, setTimeractive ] = useState(false);
  let [currenthole, setCurrenthole] = useState(0);
  const [AvocTop, setAvocTop] = useState("0");


  let [score, setScore] = useState(0);
  const IncreaseScore = () => {
    setScore(score += 5);
  }
 
  const showavocado = () => {
    setCurrenthole(Math.floor(Math.random() * 6) + 1);
    setAvocTop("0");
};


// const startgame =()=> {
//  setInterval(()=>{
//   setCurrenthole(Math.floor(Math.random() * 6) + 1 );
//  }, 700);
// }

  
  return (
    <> 
      <GlobalStyle />
      <Title>🥑 Guac-A-Mole 🥑</Title>
      <Mainsection>
        <Scorearea>
        <button className="primary" onClick={() => setTimeractive(!Timeractive)}>Start</button>
        <span>Score: <span>{score}</span></span>
           <TimerTest Timeractive={Timeractive} setTimeractive={setTimeractive} setCurrenthole={setCurrenthole} setAvocTop={setAvocTop} /> 
        </Scorearea>
   
      <Playarea>
          <Board selectedhole={currenthole} IncreaseScore={IncreaseScore} setAvocTop={setAvocTop} AvocTop={AvocTop}/>
      </Playarea>
      </Mainsection>
    </>
  );
}

export default App;
