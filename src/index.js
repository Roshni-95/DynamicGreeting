import React from "react";
import ReactDOM from "react-dom";

const time = new Date().getHours();
//console.log(time);

let greet;

const customColor = {
  color: " "
};

if (time < 12) {
  greet = "Good Morning";
  customColor.color = "red";
} else if (time >= 12 && time <= 17) {
  greet = "Good Afternoon";
  customColor.color = "green";
} else if (time >= 17 && time <= 24) {
  greet = "Good Night";
  customColor.color = "blue";
}

ReactDOM.render(
  <div>
    <h1 className="heading" style={customColor}>
      Hello! {greet}
    </h1>
  </div>,
  document.getElementById("root")
);
