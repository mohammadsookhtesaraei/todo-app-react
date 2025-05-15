import { FaPlusSquare } from "react-icons/fa";

const AddTodoInput = ({todo, tHandler,addtodoHandler}) => {

    const todoChangeHandler=(event)=>{
        tHandler(event)
    };


    return (
        <div className="mt-14 container flex items-center p-10">
            <input className="w-full px-0 py-0 bg-slate-300 outline-none border-none shadow-sm shadow-white rounded text-blue-800 sm:px-4 sm:py-2" type="text" name="todo" value={todo} onChange={todoChangeHandler}maxLength="40" />
            <button onClick={addtodoHandler} className="ml-2 cursor-pointer hover:scale-90 transition duration-150 ease-in-out">
                <FaPlusSquare fontSize="1.85rem" color="orange" />
            </button>
        </div>
    );
}

export default AddTodoInput;
