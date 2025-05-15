import ItemList from "./ItemList";


const TodoList = ({list,deleteHandler,editHandler}) => {
    return (
        <div className="mt-3 flex items-center sm:p-10">
            {list.length > 0 ? (<ul className="w-full">
             {list.map((item)=>(
                 <ItemList key={item.id} data={item} deleteHandler={deleteHandler} editHandler={editHandler}/>
             ))}
            </ul>)
            
            :
            (<p className="text-center w-full">Not Found Todo!</p>)}
        </div>
    );
}

export default TodoList;
