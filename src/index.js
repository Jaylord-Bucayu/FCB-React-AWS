import React from "react"
import ReactDom from "react-dom"
import "./index.css";

function TaskList(){
 return (
    <ul>
    <li className="tasks-item">Follow Edukashon.ph on Facebook</li>
    <li className="tasks-item">Follow AWS Siklab Pilipinas on Facebook</li>
    <li className="tasks-item">Follow Zuitt Codking Bootcamp on Facebook</li>
</ul>
 );
}

function App(){

    const pStyle = {
        "marginBottom": "15px"
    }

    return (
            <div className="app">
                <header className="app-header">
                    <h1>To do List</h1>
                    <p style={pStyle}>This To do list is created with React</p>
                
                 <TaskList/>
                
                </header>
            </div>
    );
}

ReactDom.render(<App/>,document.getElementById("root"));