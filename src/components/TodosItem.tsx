import React from "react";
import Todo from "../models/todo";
import classes from './TodosItem.module.css';


const TodosItem: React.FC<{item: Todo; onRemoveTodo : () => void}> = (props) => {

    return (
        <li className={classes.item} key={props.item.id} onClick={props.onRemoveTodo}>
            {props.item.text}
        </li>
    );
}


export default TodosItem;