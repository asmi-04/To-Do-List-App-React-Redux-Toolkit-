import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

export default function AddForm() {
    const [task,setTask] = useState("");
    const dispatch = useDispatch();

    let submitHandler = (event)=>{
        event.preventDefault();
        console.log(task);
        dispatch(addTodo(task));
        setTask("");
    };

    return(
        <>
            <form onSubmit={submitHandler}>
                <input type="text" value={task} onChange={(event)=> setTask(event.target.value)}></input>
                <button>Add Task</button>
            </form>
        </>
    )
}