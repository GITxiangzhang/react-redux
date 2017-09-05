import todos from "./todo";
import visibilityFilter from "./visibilityFilter";
import {combineReducers} from "redux";
//combineReducers合并reducers
const  todoApp=combineReducers({
    todos,
    visibilityFilter
})
export default todoApp;
//这是系统所有的响应