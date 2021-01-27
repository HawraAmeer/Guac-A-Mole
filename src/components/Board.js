import data from '../data';
import { Ground, Wrapperground, Holeimg, Avocimg, Guacimg } from '../styles';
import {useState} from "react";
const Board = (props) => {
  const [GuacTop, SetGuacTop] = useState("100%");
  const clickAvo = () => {
    props.IncreaseScore();
    props.setAvocTop("100%");
    SetGuacTop("0");
  }
 
  const boardlist = data.map((img) => {
        if (img.id === props.selectedhole)
          return (<Ground>
            <Wrapperground>
            <Holeimg src={img.holeimg} onClick={clickAvo}/>
            <Guacimg style={{top: GuacTop}}src={img.guacimg} />
            <Avocimg style={{top: props.AvocTop}} src={img.avocimg}/>
            </Wrapperground>
            </Ground>)
        else
          return (<Ground>
            <Wrapperground>
            <Holeimg src={img.holeimg} />
            <Guacimg src={img.guacimg} />
            <Avocimg style={{top: "100%"}} src={img.avocimg} />
            </Wrapperground>
            </Ground>)
      });

    return (
        boardlist
        );
};

export default Board;