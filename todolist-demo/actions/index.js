let nextTodoId=0;
//添加
export const addTodo=(text)=>{
    return{
        type:"ADD_TODO",
        id:nextTodoId++,
        text
    }
}
//过滤
export const setVisibility=(filter)=>{
    return{
        type:"SET_VISIBILITY",
        filter
    }
}
//触发
export const toggleTodo=(id)=>{
    return{
        type:"TOGGLE_TODO",
        id
    }
}