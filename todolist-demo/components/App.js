import React from 'react';
import AddTodo from "../containers/AddTodo"
import VisibleTodoList from "../containers/VisibleTodoList"
import Footer from "./Footer"
//为什么放两个不同层级，组件分为两种
/* 1.container:用来解释组件怎么工作的，和数据流相关的，来表现逻辑的，不容易复用
 2.component:用来表示和显示相关的，样式布局类。很容易复用
 */
const App = ()=> {
    return (
        <div>
            <AddTodo/>
            <VisibleTodoList/>
            <Footer/>
        </div>
    )
}


export  default App;