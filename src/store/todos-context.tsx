import React, { PropsWithChildren, useState } from "react";

import Todo from "../models/todo";


type TodosCotextObj = {
    items: Todo[];
    addTodo: (text: string) => void,
    removeTodo: (id: string) => void;

};

type Props = {
    children: React.ReactNode
};

export const TodosContext = React.createContext<TodosCotextObj>({
    items: [],
    addTodo: () => {},
    removeTodo: (id: string) => {}
});

const TodosContextProvider : React.FC<Props> = ({children}) => {
    
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodoHandler = (todoText: string) => {
      const newTodo = new Todo(todoText);
  
      setTodos((prevTodos) => {
        return prevTodos.concat(newTodo);
      });
  
    };
  
    const removeTodoHandler = (todoId: string) => {
      setTodos((prevTodos) => {
        return prevTodos.filter(todo => todo.id !== todoId);
      });
    };

    const contextValue : TodosCotextObj = {
        items: todos,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler
    };
    
    return (
        <TodosContext.Provider value={contextValue}>
            {children}
        </TodosContext.Provider>
    );
};

export default TodosContextProvider;