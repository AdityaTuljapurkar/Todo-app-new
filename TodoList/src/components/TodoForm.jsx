    import { useState } from "react";
    import { UseTodoContext } from "../context/TodoContext";

    function TodoForm() {
    const [todoData, setTodoData] = useState('')
    const {addTodo}=UseTodoContext()
    const addData=(e)=>{
        e.preventDefault()
        if(!todoData) return
        addTodo({id:Date.now(),todoMsg:todoData,completed:false})
        setTodoData('')
    }

        return (
            <form  onSubmit={addData} className="flex">
                <input
                    type="text"
                    placeholder="Write Todo..."
                    className="w-full border text-amber-50 border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                    value={todoData}
                    onChange={(e)=>setTodoData(e.target.value)}
                />
                <button type="submit" className="rounded-r-lg px-3 py-1 bg-[#4CAF50]  text-[#E0E0E0] shrink-0 hover:bg-[#66BB6A]">
                    Add
                </button>
            </form>
        );
    }

    export default TodoForm;

