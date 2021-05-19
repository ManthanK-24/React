/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  //<React.StrictMode>
   // <App />
  //</React.StrictMode>
  <h1> Hello World !! </h1>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/



// #1 to #6
//same as -> var React = require('react');  
import React from 'react';    // for using jsx 

// same as -> var ReactDOM = require('react-dom');
import ReactDOM from 'react-dom';     // helps in rendering 


import "./index.css";

ReactDOM.render(<h1>Hi Manthan !!</h1> ,document.getElementById('root'));  // what toshow, where toshow, call-back func

// in where to show we display content of html file, with the help of DOM(Document Object Module) of JS with the help of ID of html tag
// here call back func = NULL 

// javascript exts , javascript xml => JSX 3rd line

// Babel compiler converts high level JS to intermediate level JS -> becomes available on importing react 
// eg 3rd line intermediate code ->  
//ReactDOM.render(React.createElement("h1"),null,"Hi Manthan"),document.getElementById('root'));

// Pure JS code 
//var e = document.createElement("h1");
//e.innerHTML = "Hello Manthan ";
//document.getElementById("root").appendChild(e);

// #7 how to use multiple jsx elements in render method  => using <div>
ReactDOM.render(
           <div>
           <h1>Multiple Render !!</h1>
           <p >Using Div Method</p> 
           </div>
           ,document.getElementById('root'));

// #7,M2  using array method         
ReactDOM.render(
  [
  <h1>Multiple Render </h1>,
  <p >Using Array Method</p>, 
  ]
  ,document.getElementById('root')); 

// #8,M3 React.Fragement same as array method but diff from div tag
ReactDOM.render(
           <React.Fragment>
           <h1>Multiple Render !!</h1>
           <p >Using Fragement Method</p> 
           </React.Fragment>
           ,document.getElementById('root'));
// M4 Same as m3,m2  <> </>

ReactDOM.render(
  <>
  <h1>Multiple Render !!</h1>
  <p >Using Empty tag Method</p> 
  </>
  ,document.getElementById('root'));

// #9_1
ReactDOM.render(
  <React.Fragment> 
    <h1>Top 5 Favourite Enterprenurs</h1>
    <p >People in List are one who did it from scratch</p>
    
      <ol>
        <li>Ratan Tata</li>
        <li>Vijay S Sharma</li>
        <li>Mark Zuckerberg</li>
        <li>Elon Musk</li>
        <li>Jeff Bezos</li>
      </ol>
    
   </React.Fragment>
  ,
  document.getElementById('root')
);

// #10 JS expression in JSX (ReactJs)   // This is JS file, In it html & in it we need to use JS so we use {}  
//  can use only expressions and not statements
const flname = "Manthan M Kulkarni";
ReactDOM.render(
  <>
     <h1>Name : {flname} </h1>
     <p> Probablity it rains today {Math.random()} </p>
  </>
  ,
  document.getElementById('root')
);


// #11 ES6 Template Literals in JSX     
//  `  ` + ${}


// other methods {fname} {lname}, {fname + lname}

const fname = "Manthan ";
const lname = "Kulkarni ";
ReactDOM.render(
  <>
     <h1>Name  {`of the student : ${fname} ${lname} `} </h1> 
     <p> Probablity it rains today {Math.random()} </p>
  </>
  ,
  document.getElementById('root')
);


// #12_2

var cd = new Date().toLocaleDateString();
var ct = new Date().toLocaleTimeString();
ReactDOM.render(
  <>
    <h1> Hello All {flname} Here</h1>
    <p>Current Date is {cd}</p>
    <p>Current Time is {ct}</p>
  </>
  ,
  document.getElementById('root')
);


//  #13  JSX Attributes in react 

// JSX Attributes are similar to HTML attributes eg. global attri like contentEditable
// 

var img1 = "https://picsum.photos/200/300";
var img2 = "https://picsum.photos/250/300";
var img3 = "https://picsum.photos/300/300";
var links = 'https://www.flipkart.com';
ReactDOM.render(
  <>
  <h1 contentEditable="true"> Hello All {flname} here</h1>
   <img src= {img1} alt="random_images"/>
   <img src= {img2} alt="random_images"/>
   <a href={links} target="_anything">
   <img src= {img3} alt="random_images"/>
   </a>
  </>
  ,
   document.getElementById('root')
);

// #14 CSS styling & importing css file

 //  at the top -> import "./index.css";
var naam='Manthan';
ReactDOM.render(
  <>
  <h1 className="heading" > Hello All {naam} here</h1>
  <div className="div_img">
   <img src= {img1} alt="random_images"/>
   <img src= {img2} alt="random_images"/>
   <a href={links} target="_anything">
   <img src= {img3} alt="random_images"/>
   </a>
   </div>
  </>
  ,
   document.getElementById('root')
);