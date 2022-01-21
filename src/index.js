import React from "react"
import ReactDom from "react-dom"
import "./index.css";

function TaskList(props){
    
 return (
   
    <li className="tasks-item">{props.task}</li>
   

 );
}

function App(){
    const taskItems = ["Follow Edukasyon Ph on Facebook","Follow Aws Siklab on Facebook","Follow Zuitt on Facebook"]
    const pStyle = {
        "marginBottom": "15px"
    }

    return (
            <div className="app">
                <header className="app-header">
                    <h1>To do List</h1>
                    <p style={pStyle}>This To do list is created with React</p>

                    <input className="task-input"/>
                    <ul>
                        {taskItems.map((task,index) => {
                            return <TaskList key={index} task={task} />
                            
                        })}

                    </ul>
                
                </header>
            </div>
    );
}

ReactDom.render(<App/>,document.getElementById("root"));