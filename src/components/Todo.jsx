import { useState } from "react";
import { v4 } from "uuid";


import AddTodoInput from "./AddTodoInput";
import TodoList from "./TodoList";



const Todo = () => {
    const [todo,setTodo]=useState({
        id:"",
        todo:""
    });

    const [todoList,setTodoList]=useState([]);
    
    const todoHandler=(event)=>{
    const {value,name}=event.target;
    setTodo((prevTodo)=>({...prevTodo,[name]:value}));
   };

   const addtodoHandler=()=>{

    if(!todo.todo.trim()){
        alert("please insert a todo!");
        return
    }

    const newTodo={...todo,id:v4()};
    setTodoList((prevTodoList)=>([...prevTodoList,newTodo]));
    setTodo({
        id:"",
        todo:""
    });
   };



    return (
        <div>
            <div className="container max-w-7xl mx-auto h-screen">
                <div className="bg-blue-500 w-7/12 mx-auto mt-5 rounded p-10 shadow-sm shadow-amber-50">
                  <h1 className="text-3xl font-bold text-center">Todo App</h1>
                  <div className="h-[1px] bg-white mx-auto w-3/12 mt-2 "></div>
                  <AddTodoInput todo={todo.todo} tHandler={todoHandler} addtodoHandler={addtodoHandler}/>
                  <TodoList list={todoList}/>
                </div>

            </div>
        </div>
    );
}

export default Todo;
