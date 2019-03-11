import React from 'react';
import TodoItem from '../TodoItem';


const TodoList = props => (
   <div><h2>Todo List</h2>
            <ul>{props.todos.map((item, idx) => (
                <TodoItem key= {idx}
                title={item.title}
                status={item.complete}
               
               />
            ))}</ul>
        </div>

);

export default TodoList;