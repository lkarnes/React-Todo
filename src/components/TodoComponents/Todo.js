import React from 'react';

export default function Todo(props) {
    return (
        <div onClick={()=> {props.toggle(props.item.id)}} className={`task ${props.item.completed ? 'complete' : ''}`}>
            <p>{props.item.completed ? 'completed' : 'incomplete'}</p>
           <p >{props.item.task}</p>
           
        </div>
    )
}