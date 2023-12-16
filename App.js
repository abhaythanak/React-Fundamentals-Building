import React from "react";
import ReactDOM from "react-dom/client";
  
  const container = React.createElement("div",{id: "parent",},[
    React.createElement("div",{id: "child",},[
        React.createElement("h1",{},"heading1"),
        React.createElement("h1",{},"heading2"),
    ]),
    React.createElement("div",{id: "child1",},[
        React.createElement("h1",{},"heading1"),
        React.createElement("h1",{},"heading223"),
    ]),
]);
    //      this both are same

{/* <div id="root">Not rendered</div>
    <div id="parent">
        <div class="child">
            <h1></h1>
            <h2></h2>
        </div>
        <div class="child1">
            <h1></h1>
            <h2></h2>
        </div>
    </div> */}
  
  // create root using createRoot
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(container);