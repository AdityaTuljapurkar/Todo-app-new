import { useState } from "react";
import { UseTodoContext } from "../context/TodoContext";

function TodoItem({ todo }) {

    const {deleteTodo, editTodo, toggleTodo} = UseTodoContext();
    

    const [isTodoEditable, setIsTodoEditable] = useState(false);
    const [todoMsg, setTodoMsg] = useState(todo.todoMsg);
    
                                                                 /*      const toggleTodo = (id)=>{
                                                                setTodo((prev)=>prev.map((prevVal)=> prevVal.id === id ? {...prevVal,completed:!prevVal.completed    }:prevVal   */
    const toggleCompleted = () => {
        toggleTodo(todo.id);
    };
    //why we created 
    const handleEdit = () => {
        editTodo({todoMsg: todoMsg}, todo.id);
        setIsTodoEditable(false);
    };

    return (

        <div className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 text-black ${
            todo.completed ? " text-[#FFF7E6]  bg-[#D97706]" : " text-[#F1F5F9] bg-[#334155]"
        }`}>
  
            <input
                type="checkbox"  
                className="cursor-pointer"
                checked={todo.completed}                               
                onChange={toggleCompleted}
            />
        
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/40 px-2 border-2" : "border-transparent"
                } ${todo.completed ? "  line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            

            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center
                 bg-gray-50 hover:bg-stone-600 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;
                    if (isTodoEditable) {
                        handleEdit();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            

            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-500 shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
