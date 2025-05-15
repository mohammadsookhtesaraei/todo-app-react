
import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { MdDone } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const ItemList = ({data:{id,todo,date},deleteHandler,editHandler}) => {
    console.log(date);
 
    const [newTodo,setNewTodo]=useState(todo);
    const [isEditing,setIsEditing]=useState(false);
    const [isDone,setIsDone]=useState(true);
    const [alert,setAleret]=useState("")
    return (
        <li className={isDone ? "flex items-center border-1 border-slate-300 rounded py-2 px-2 bg-slate-200 text-gray-900 sm:w-[94%] m-2" :"flex items-center border-1 border-slate-300 rounded py-2 px-2 bg-slate-200 text-gray-900 w-[94%] m-2 opacity-70"}>
          {isEditing ? (
           <>
            <input className="flex-1 border-none outline-none placeholder:tex-[3px]" type="text" value={newTodo} onChange={(e)=>setNewTodo(e.target.value)} placeholder="you can change now" maxLength="40" />
           {alert&& <p className="mr-5 text-red-600">{alert}</p>}
          
           </>
          ):<p className={isDone ? "flex-1" : "flex-1 opacity-55 text-gray-400 line-through"}>{todo}</p>}

          {isEditing ? (<button className="mr-2 cursor-pointer hover:scale-90 transition duration-150 ease-in-out" onClick={()=>{
           
           if(!newTodo.trim()){
           setAleret("write todo!");
            return
           }
           setAleret("")
            setIsEditing(false);
            editHandler(id,newTodo)
          }}>save</button>) : (<button onClick={()=>{
            setIsEditing(true);
            setIsDone(true)
          }} className="mr-2 cursor-pointer hover:scale-90 transition duration-150 ease-in-out">edit</button>)}


        
            <button className="mr-2 cursor-pointer hover:scale-90 transition duration-150 ease-in-out" onClick={()=>{
                if(!isEditing){
                    setIsDone(false)
                }
            }}><MdDone color={isDone ? "lime" : "#333"} fontSize="1.5rem"/></button>
            <button className="mr-2 cursor-pointer hover:scale-90 transition duration-150 ease-in-out" onClick={()=>setIsDone(true)}><RxCross2 color={isDone ? "#333" :"red"}  fontSize="1.5rem"/></button>
            <button className="cursor-pointer hover:scale-90 transition duration-150 ease-in-out" onClick={()=> deleteHandler(id)}><FaTrash color="gray"/></button>
        </li>
    );
}

export default ItemList;
