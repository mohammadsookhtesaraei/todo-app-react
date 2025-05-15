
import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { MdDone } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const ItemList = ({data:{id,todo},deleteHandler,editHandler}) => {
    const [newTodo,setNewTodo]=useState(todo);
    const [isEditing,setIsEditing]=useState(false);
    const [isDone,setIsDone]=useState(true);
    return (
        <li className="flex items-center border-1 border-slate-300 rounded py-2 px-2 bg-slate-200 text-gray-900 w-[94%] m-2">
          {isEditing ? (
            <input className="flex-1 border-none outline-none" type="text" value={newTodo} onChange={(e)=>setNewTodo(e.target.value)} placeholder="you can change now and save it ..." maxLength="40" />
          ):<p className={isDone ? "flex-1" : "flex-1 opacity-55 text-gray-400 line-through"}>{todo}</p>}

          {isEditing ? (<button className="mr-2" onClick={()=>{
            setIsEditing(false)
            editHandler(id,newTodo)
          }}>save</button>) : (<button onClick={()=>setIsEditing(true)} className="mr-2">edit</button>)}



            <button className="mr-2" onClick={()=>setIsDone(false)}><MdDone color={isDone ? "lime" : "#333"} fontSize="1.5rem"/></button>
            <button className="mr-2" onClick={()=>setIsDone(true)}><RxCross2 color={isDone ? "#333" :"red"}  fontSize="1.5rem"/></button>
            <button onClick={()=> deleteHandler(id)}><FaTrash color="gray"/></button>
        </li>
    );
}

export default ItemList;
