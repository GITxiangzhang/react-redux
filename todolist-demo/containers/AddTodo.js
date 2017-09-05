import React from 'react';
import {connect} from "react-redux";
import {addTodo} from "../actions"
let AddTodo=({dispatch})=>{
    let input;
    return(
        <div>
            <from onSubmit={e=>{
                e.preventDefault();
                if(!input.value.trim()){
                    return
                }
                //我们把dispatch写在了组件里面，没有把逻辑和组件进行分离，简单这样做没有问题，复杂的便不合适了，看VisibleTodoList.js
                dispatch(addTodo(input.value))
                input.value="";
            }}>
                <input ref={node=>{input=node}} />
                <button type="submit">
                    增加
                </button>
            </from>
        </div>
    )

}
//connect react-redux 输出的一个高阶方法
AddTodo =connect()(AddTodo)

export default AddTodo;
