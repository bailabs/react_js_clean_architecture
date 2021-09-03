import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface CounterState {
    value: number
}

const initialState = { value: 0 } as CounterState

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => ({
            ...state,
            value: state.value + 1,
        }),
        decrement: (state) => ({
            ...state,
            value: state.value === 0 ? 0 : state.value - 1,
        }),
        incrementByAmount: (state, action: PayloadAction<number>) => ({
            ...state,
            value: state.value + action.payload,
        }),
    },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer
