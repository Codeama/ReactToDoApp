import React from 'react';
import style from './TodoItem.module.css';

const TodoItem = props => (
    <div>
        
        <li className={style.ul}
        ><button >Complete</button>
         {props.title} - {props.status ? "Complete" : "Active"}
         <button >X</button></li>
        
    </div>
)

export default TodoItem;