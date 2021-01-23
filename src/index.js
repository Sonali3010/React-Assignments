import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

var currDate= new Date();
var message=" ";
const cssStyle = { };

if(currDate.getHours() <= 24 && currDate.getHours() >=19){
  message= "Good Night Sir!! Its "+ currDate.toLocaleTimeString();
  cssStyle.color='purple';
 
} else if(currDate.getHours() >=15 && currDate.getHours() <=18){
  message= "Good Evening Sir!! Its "+ currDate.toLocaleTimeString();
  cssStyle.color='red';

} else if (currDate.getHours() >= 1  && currDate.getHours() <12){
  message= "Good Morning Sir!! Its "+ currDate.toLocaleTimeString();
  cssStyle.color='yellow';
  
} else if(currDate.getHours() >=12  && currDate.getHours() <=14){
  message= "Good Afternoon Sir!! Its "+ currDate.toLocaleTimeString();
  cssStyle.color='blue';
}
ReactDOM.render(
  <>
   <div><span style={cssStyle}> <h1 > Welcome to my gallery!! </h1>
   
   <h1 > {message} </h1></span>
  </div>
  </>,
  document.getElementById('root')
);

