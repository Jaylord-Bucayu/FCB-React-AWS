import React from "react"

import Task from "./Task";

function TaskList(){


    const taskItems = ["Follow Edukasyon Ph on Facebook","Follow Aws Siklab on Facebook","Follow Zuitt on Facebook"]
   
   
return( <ul>
    {taskItems.map((task,index) => {
        return (<Task task={task} key={index} />);
        
    })}

</ul>);
      
    
   
 

   }

export default TaskList;