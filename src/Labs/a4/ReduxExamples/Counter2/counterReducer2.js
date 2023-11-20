import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 222,
};

const counter2Slice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment2: (state) => {
            state.count2 += 1;
        },
        decrement: (state) => {
            state.count2 -= 1;
        },
        setCount: (state, action) => {
            state.count2 = action.payload;
        },
    },
});

export default counter2Slice.reducer;
export const { increment2, decrement2, setTo } = counter2Slice.actions;
