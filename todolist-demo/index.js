import "babel-polyfill";
import  React from "react";
import  {render} from "react-dom";
import  {Provider} from "react-redux";
import  {createStore} from "redux";
import todoApp from "./reducers";
import APP from "./components/APP";

let store= createStore(todoApp);

render(
    <Provider store={store}>
        <APP/>
    </Provider>,
    document.getElementById('root')
)