import { configureStore } from "@reduxjs/toolkit";
import helloReducer from "../a4/ReduxExamples/HelloRedux/helloReducer";
import counterReducer1 from "../a4/ReduxExamples/Counter1/counterReducer1";
import counterReducer2 from "../a4/ReduxExamples/Counter2/counterReducer2";
import addReducer from "../a4/ReduxExamples/AddRedux/addReducer";
import todosReducer from "../a4/ReduxExamples/todos/todosReducer";
import counterReducer from "../a4/ReduxExamples/CounterRedux/counterReducer";

const store = configureStore({
    reducer: {
        todosReducer,
        helloReducer,
        counterReducer1,
        counterReducer2,
        counterReducer,
        addReducer,
    },
});
export default store;