import { useContext, createContext, useState, useEffect } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todoMsg: "Enter Message",
      completed: false,
    },
  ],
  addTodo: (newData) => {},
  editTodo: (newData, id) => {},
  deleteTodo: (id) => {},
  toggleTodo: (id) => {},
});

export const UseTodoContext = () => useContext(TodoContext);
export const TodoContextProvider = ({ children }) => {
  //using storeLocal here for inside the useState
  const [todos, setTodo] = useState(() => {
    try {
      const Data = localStorage.getItem("todos");
      return Data ? JSON.parse(Data) : [];
    } catch (error) {
      console.log(`Error form the get local storage : ${error}`);
      return [];
    }
  });
  useEffect(() => {
    try {
      localStorage.setItem("todos", JSON.stringify(todos));
    } catch (error) {
      console.log(`Error form the set local storage : ${error}`);
    }
  }, [todos]);
  const addTodo = (newData) => {
    setTodo((prev) => [...prev, newData]);
    // console.log(todos);
  };
  const deleteTodo = (id) => {
    setTodo((prev) => prev.filter((todo) => todo.id !== id)); 
  };

  const editTodo = (newData, id) => {
    setTodo((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id ? { ...prevTodo, ...newData } : prevTodo
      )
    );
  };
  const toggleTodo = (id) => {
    setTodo((prev) =>
      prev.map((prevVal) =>
        prevVal.id === id
          ? {
              ...prevVal,
              completed: !prevVal.completed,
            }
          : prevVal
      )
    );
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        deleteTodo,
        editTodo,
        toggleTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
