import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
  background-color: #B7B7A4;
  color:#404337;
  // background-image: url("https://image.freepik.com/free-vector/avocado-pattern_53876-25667.jpg");
  
}
`;
export const Title = styled.h1`
color:#555A49;
text-align: center;
font-size:50px;
`;
export const Mainsection = styled.main`
    width: 55%;
    margin: 0 auto;  
`;

export const Scorearea = styled.section`
display: flex;
justify-content: space-between;
padding: 0 20px;
font-size: 30px;

button {
    position: relative;
    font-size: 16px;
    font-weight: 600;
    text-align: center;
    padding: 0.7em 1.2em;
    cursor: pointer;
    user-select: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 46px;
    margin-bottom:10px;
    min-width: 96px;
    border-radius: 4px;
    background-color: #555A49;
    border: 1px solid;
    color: #fff;
    border-color: #555A49;
    -webkit-transition: background 0.2s ease;
    -moz-transition: background 0.2s ease;
    -o-transition: background 0.2s ease;
    transition: background 0.2s ease;

    &.primary {
        background-color: #555A49;
        border-color: #555A49;
        color: #fff;
      }
      
      &.primary:hover {
        background-color: #606553;
        border-color: #606553;
      }
  }

`;

export const Playarea=styled.section `
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
border-style: solid;
border-color: #D2D2C6;
background-color:#D2D2C6;
height:500px;
`
export const Ground = styled.section`
display: inline-flex;
flex: 1 1 25%;
justify-content: center;
align-items: center;
padding: 10px;

`
export const Wrapperground = styled.div`
position: relative;
width: 40%;
padding-bottom: 50%;
overflow: hidden;
`
export const Holeimg = styled.img`
position: absolute;
width: 100%;
height: 100%;
left: 0;
background-size: contain;
background-repeat: no-repeat;
z-index: 1;
background-position: center 113%;
`
export const Avocimg = styled.img`
position: absolute;
width: 100%;
height: 100%;
left: 0;
background-size: contain;
background-repeat: no-repeat;

transition: all 0.1s ease;
// top: 100%;
background-position: bottom;
background-size: 73%;
`

export const Guacimg = styled.img`
position: absolute;
width: 95%;
height: 95%;
left: 0;
background-size: contain;
background-repeat: no-repeat;

transition: all 0.1s ease;
top: 100%;
background-position: bottom;
background-size: 73%;
`