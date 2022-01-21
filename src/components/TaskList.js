import { useState } from "react";

import Task from "./Task";


function TaskList(){

   //data to be used
    const [taskItemsList, setTaskItemsList] = useState([
        "Follow Edukasyon.ph on Facebook.", // 0
        "Follow AWS Siklab Pilipinas on Facebook.", // 1
        "Follow Zuitt Coding Bootcamp on Facebook." // 2
      ]);
   
    //to add to task value   
   const [taskValue,setTaskValue] = useState();

   
   //when change set new task
    const inputChangeHandler = (e) => {

       
        setTaskValue(e.target.value)
      };
    
    //add the task value to the list of task
    const addTaskHandler = (e) => {

        if(e.keyCode == 13){
            setTaskItemsList([taskValue, ...taskItemsList]);

            e.target.value = '';
        }
       
       

      };

      
return(
 
<>
<input className="task-input" placeholder="Enter new Task" value={taskValue}  onChange={inputChangeHandler} onKeyUp={addTaskHandler}/>
    <ul>
    {taskItemsList.map((task,index) => {
        return (<Task task={task} key={index} />);
        
    })}

</ul>
</>
);
      
    
   
  
 

     }

export default TaskList;