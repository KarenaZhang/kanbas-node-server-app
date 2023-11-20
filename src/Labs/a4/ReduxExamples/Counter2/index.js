import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment2, decrement2, setTo } from "./counterReducer2";

function Counter2() {
    const { count2 } = useSelector((state) => state.counterReducer2);
    const { count1 } = useSelector((state) => state.counterReducer1);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Counter 2</h1>
            <p>Count2: {count2}</p>
            <p>Count1: {count1}</p>
            <button onClick={() => dispatch(increment2())}>Increment</button>
            <button onClick={() => dispatch(decrement2())}>Decrement</button>
            <button onClick={() => dispatch(setTo(222))}>Reset</button>
        </div>
    );
}

export default Counter2;
