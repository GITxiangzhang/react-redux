import Todo from "./Todo";
import React from 'react';
const TodoList=({todos,onTodoClick})=>{
    console.log(todos)
    return(
        <ul>
            {
                todos.map(todo=>(
                    <Todo  key={todo.id}
                                    {...todo}
                                onClick={()=>onTodoClick(todo.id)} />
                ))
            }
        </ul>
    )
}
export default TodoList;