import React from "react";

const Task = ({task, removeTask, completeTask}) => {

    return (

        <div className="Tasks" 
        style={{textDecoration: task.isCompleted ? "line-through":"" }} >
        
        <div className="content">
          <p>{task.text}</p>
          <p className='Category'>({task.category})</p>
        </div>

        <div> 
          <button className="complete" onClick={()=> completeTask(task.id)} >Mark as completed</button>
          <button className="delete" onClick={()=> removeTask(task.id)}>
          X</button>
        </div>

      </div>
    );
};


export default Task;