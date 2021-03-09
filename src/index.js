//import react and reactdom library
import React from "react";   // react library
import ReactDOM from "react-dom";  // virtual dom
import App from "./app";
import "./index.css";
ReactDOM.render(<App /> , document.getElementById('root'));

// //without jsx
// ReactDOM.render(
//     React.createElement("div" , {class:"container"} , "i am div" ), document.getElementById("root"))

