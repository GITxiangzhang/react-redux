import todos from "./todos";
import visibilityFilter from "./visibilityFilter";
import {combineReducers} from "./visibilityFilter";
//combineReducers合并reducers
const  todoApp=combineReducers({
    todos,
    visibilityFilter
})
export default todoApp;
//这是系统所有的响应