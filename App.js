// Manipulate the HTML DOM using Javscript
// const heading = document.createElement("h1");
// heading.innerHTML = "Namaste Everyone";
// const root = document.getElementById("root");
// root.appendChild(heading);

// Manipulate the HTML DOM using React

// Create nested React Elements
const heading = React.createElement(
    "h1",
    {
      id: "title",
      style: {
        background:"red",
      },
      className:"title"
    },
    "heading"
  );


  //const heading1 = React.createElement("h1",{},"heading1"); 
  // h1 is tag, {} atrributes like class&ID, "Heading1"is text 
  //     <h1 id="is attribute">Heading</h1>
  
  const container = React.createElement("div",{id: "parent",},[
    React.createElement("div",{id: "child",},[
        React.createElement("h1",{},"heading1"),
        React.createElement("h1",{},"heading2"),
    ]),
    React.createElement("div",{id: "child1",},[
        React.createElement("h1",{},"heading1"),
        React.createElement("h1",{},"heading2"),
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
  // passing react element inside root
  root.render(container);