import React from "react"
import ReactDOM from "react-dom"

//component file
import TodoContainer from "./App.js"

const element = <h1>Hello from Create React App</h1>

//expression 

const myelement = <h1>React is {5 + 5} times better with JSX</h1>;

ReactDOM.render(<TodoContainer />, document.getElementById("root"))

ReactDOM.render(myelement, document.getElementById("root1"))

