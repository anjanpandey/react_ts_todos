import React, {useContext} from "react";

import TodosItem from "./TodosItem";
import classes from './Todos.module.css';
import { TodosContext } from "../store/todos-context";

const Todos: React.FC = () => {
    const todosCtx = useContext(TodosContext);

    return (
        <ul className={classes.todos}>
            {todosCtx.items.map(item => (<TodosItem item={item} onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)} />))}
        </ul>
    );
}


export default Todos;