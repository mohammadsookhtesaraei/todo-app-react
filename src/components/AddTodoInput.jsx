import { FaPlusSquare } from "react-icons/fa";

const AddTodoInput = ({todo, tHandler,addtodoHandler}) => {

    const todoChangeHandler=(event)=>{
        tHandler(event)
    };


    return (
        <div className="mt-14 flex items-center p-10">
            <input className="flex-1 bg-slate-300 outline-none border-none shadow-sm shadow-white rounded text-blue-800 px-4 py-2" type="text" name="todo" value={todo} onChange={todoChangeHandler}maxLength="40" />
            <button onClick={addtodoHandler} className="ml-2 cursor-pointer hover:scale-90 transition duration-150 ease-in-out">
                <FaPlusSquare fontSize="1.85rem" color="orange" />
            </button>
        </div>
    );
}

export default AddTodoInput;
