//const heading = React.createElement("h1",{id:"heading"},"Hello world from react");
const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);

const parent = React.createElement("div",{id:"parent"},
[React.createElement("div",{id:"child"},[React.createElement("h1",{},"hi I am h1 tag"),React.createElement("h2",{},"hi I am h2 tag")]),
React.createElement("div",{id:"child2"},[React.createElement("h1",{},"hi I am h1 tag"),React.createElement("h2",{},"hi I am h2 tag")])]);
root.render(parent);
const pt = React.createElement("div",{id:"parent"},
[React.createElement("div",{id:"child"},[React.createElement("h1",{},"hi I am h1 tag Modified"),React.createElement("h2",{},"hi I am h2 tag")]),
React.createElement("div",{id:"child2"},[React.createElement("h1",{},"hi I am h1 tag Modified"),React.createElement("h2",{},"hi I am h2 tag")])]);
root.render(parent);
root.render(pt);
console.log(parent);