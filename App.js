{
  /* <div id="parent">
  <div class="child">
    <h1>I am h1 tag</h1>
  </div>
</div>; */
}

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
]);

const heading = React.createElement(
  "h1",
  { id: "heading", className: "test-1 test-2" },
  "Hello World from React!"
);

console.log(heading); //object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
