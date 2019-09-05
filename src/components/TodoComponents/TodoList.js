// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

import Todo from './Todo.js';

export default function TodoList(props) {
    return(
        <div className='todo-list'>
            {props.todo.map(item=>(
                <Todo key={item.id} item={item} toggle={props.toggle}/>
            ))}
        <button className='clear-btn' onClick={props.clear}>Clear Completed</button>
        </div>
    )
}
