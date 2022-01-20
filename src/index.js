import React from "react"
import ReactDom from "react-dom"
import "./index.css";

function TaskList(props){
    
 return (
    <ul>
    <li className="tasks-item">{props.task}</li>
   
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
                
                 <TaskList task={"Follow Edukasyon Ph on Facebook"}/>
                
                </header>
            </div>
    );
}

ReactDom.render(<App/>,document.getElementById("root"));