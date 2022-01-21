import React from "react"
import ReactDom from "react-dom"
import "./index.css";


import TaskList from "./components/TaskList";


function App(){
 
    return (
            <div className="app">
                <header className="app-header">
                    <h1>To do List</h1>
                    <p >This To do list is created with React</p>

                   <TaskList/>
                   
                
                </header>
            </div>
    );
}

ReactDom.render(<App/>,document.getElementById("root"));