import React from 'react';
import style from './TodoItem.module.css';

const TodoItem = props => (
    <div>
        
        <li className={style.ul}
        ><button onClick = {props.onComplete}>✓</button>
         {props.title} - {props.status ? "Complete" : "Active"}
         <button onClick = {props.onDelete}>X</button></li>
        
    </div>
)

export default TodoItem;