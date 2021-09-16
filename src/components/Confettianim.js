import React from "react";
import Confetti from "react-confetti";

const Confettianim = (props) => {
  // const { width, height } = useWindowSize()
  return (
    <>
      {props.confettiActive ? (
        <Confetti width={window.innerWidth} height={"800px"} />
      ) : (
        <></>
      )}
    </>
  );
};

export default Confettianim;
