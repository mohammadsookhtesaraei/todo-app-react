import { useState, useEffect } from "react";
import { v4 } from "uuid";

import AddTodoInput from "./AddTodoInput";
import TodoList from "./TodoList";
import Modal from "./Modal";

const Todo = () => {
  const [todo, setTodo] = useState({
    id: "",
    todo: "",
    date:"",
  });

  const [todoList, setTodoList] = useState(() => {
    const stored = localStorage.getItem("todos");
    return stored ? JSON.parse(stored) : [];
  });
  const [modal, setModal] = useState(false);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  const todoHandler = (event) => {
    const { value, name } = event.target;
    setTodo((prevTodo) => ({ ...prevTodo, [name]: value.toLowerCase() }));
  };

  const addtodoHandler = () => {
    if (!todo.todo.trim()) {
      setModal(true);
      return;
    }

    const newTodo = { ...todo, id: v4(),date:new Date().toLocaleString("fa-IR")};
    console.log(newTodo);
    setTodoList((prevTodoList) => [...prevTodoList, newTodo]);
    setTodo({
      id: "",
      todo: "",
      date:""
    });
  };

  const deleteHandler = (id) => {
    const newTodoList = todoList.filter((item) => item.id !== id);
    setTodoList(newTodoList);
  };

  const editHandler = (id, newTodo) => {
    const newTodoListAfterEdit = todoList.map((item) =>
      item.id === id ? { ...item, todo: newTodo } : item
    );
    setTodoList(newTodoListAfterEdit);
  };

  return (
    <>
      <div className="container max-w-7xl mx-auto h-screen">
        <div className="bg-blue-500 sm:w-7/12 mx-auto sm:mt-5 rounded  shadow-sm shadow-amber-50">
          <h1 className="pt-4 sm:text-3xl font-bold text-center">Todo App</h1>
          <div className="h-[1px] bg-white mx-auto w-3/12 mt-2 "></div>
          <AddTodoInput
            todo={todo.todo}
            tHandler={todoHandler}
            addtodoHandler={addtodoHandler}
          />
          <TodoList
            list={todoList}
            deleteHandler={deleteHandler}
            editHandler={editHandler}
          />
        </div>
        {modal && <Modal setModal={setModal} />}
      </div>
    </>
  );
};

export default Todo;
