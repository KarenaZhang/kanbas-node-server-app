import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment1, decrement1 } from "../Counter1/counterReducer1";

function CounterRedux() {
    const {count} = useSelector((state) => state.counterReducer.count);
    const dispatch = useDispatch();

    // const handleIncrement = () => {
    //     dispatch(increment1());
    // };
    //
    // const handleDecrement = () => {
    //     dispatch(decrement1());
    // };

    return (
        <div>
            <h2>Counter Redux</h2>
            <h3>{count}</h3>
            <button onClick={() => dispatch(increment1())}>Increment </button>
            <button onClick={() => dispatch(decrement1())}>Decrement </button>
        </div>
    );
}

export default CounterRedux;
