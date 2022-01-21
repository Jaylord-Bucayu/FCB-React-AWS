import { useState } from "react";

import Task from "./Task";


function TaskList(){


    const taskItems = ["Follow Edukasyon Ph on Facebook","Follow Aws Siklab on Facebook","Follow Zuitt on Facebook"]
   
   const [taskValue,setTaskValue] = useState();

   const inputChangeHandler = (e) =>{
   
    setTaskValue();
    }

return(
 
<>
<input className="task-input" placeholder="Enter new Task" onChange={inputChangeHandler}/>
    <ul>
    {taskItems.map((task,index) => {
        return (<Task task={task} key={index} />);
        
    })}

</ul>
</>
);
      
    
   
  
 

     }

export default TaskList;