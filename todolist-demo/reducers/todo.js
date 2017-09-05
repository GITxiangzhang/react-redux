//一个代办的响应
const todo =(state,action)=>{
    switch (action.type){
    case "ADD_TODO":
        return{
            id:action.id,
            text:action.text,
            completed:false,//刚传入的代办未完成
        }
    case  "TOGGLE_TODO":
        if(state.id !== action.id){
            return state
        }
        //es6 对象 assign方法
        return Object.assign({},state,{
            completed:!state.completed
        })
    default:
        return state
    }
}

//待办列表的响应
//列表的state可以明白就不是一个对象了，这里是个数组
const todos =(state=[],action)=>{
    switch (action.type){
    case "ADD_TODO":
        //...es6 扩展运算符
        return [...state,
        todo(undefined,action)
        ]
    case "TOGGLE_TODO":
        return state.map(t=>todo(t,action))
    default:
        return state
    }
    }
}

export default todos;
