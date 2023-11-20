import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment1, decrement1, setTo } from "./counterReducer1";

function Counter1() {
    const {count1} = useSelector((state) => state.counter1Reducer.count1);
    const {count2} = useSelector((state) => state.counter2Reducer.count2);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Counter 1</h1>
            <p>Count1: {count1}</p>
            <p>Count2: {count2}</p>
            <button onClick={() => dispatch(increment1())}>Increment</button>
            <button onClick={() => dispatch(decrement1())}>Decrement</button>
            <button onClick={() => dispatch(setTo(111))}>Reset</button>
        </div>
    );
}

export default Counter1;
