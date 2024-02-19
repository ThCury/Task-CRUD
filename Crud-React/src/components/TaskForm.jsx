import React from "react";
import { useState } from "react";


const TaskForm = ({addTask}) => {
    const [value, setValue] = useState ("");
    const [category, setCategory] = useState ("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value || !category) return;
    //Add task
        addTask(value, category);
        setCategory("");
        setValue("");
        console.log ("Check");
    }


    return (
        <div className="taskform">
            
            <h2>Create task</h2>
            <form onSubmit={handleSubmit}> 

                <input
                type="text" 
                placeholder="Write the name"
                value={value}
                onChange= {(e)=>{setValue(e.target.value)}} />

                
                <select value={category} onChange={(e)=>{setCategory(e.target.value)}} >
                    <option value="">Select category</option>
                    <option value="Work">Work</option>
                    <option value="Study">Study</option>
                    <option value="Health">Health</option>
                    
                </select>
                
                <button type="submit"> Add new </button>

            </form>
            
        </div>
    );
};


export default TaskForm;