import ItemList from "./ItemList";


const TodoList = ({list}) => {
    return (
        <div className="mt-3 flex items-center p-10">
            {list.length > 0 ? (<ul>
             {list.map((item)=>(
                 <ItemList key={item.id} data={item}/>
             ))}
            </ul>)
            
            :
            (<p className="text-center w-full">Not Found Todo!</p>)}
        </div>
    );
}

export default TodoList;
