const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "I'm an H1 tag"),
    React.createElement("h2", {}, "I'm an H2 tag")
  )
);

// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello World from the React!"
// );

console.log(parent); //object

// const heading = React.createElement("h1", {}, "Hello world from React!");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
